import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';
import { createClient } from '@/utils/supabase/server';

export const PROTECTED_ADMIN_ROUTES = ['/dashboard', `/api/protected/my-account`]
export const PROTECTED_USER_ROUTES = ['/account', '/saas', `/api/protected/my-account`]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const supabase = createClient();

  const {
    data: auth
  } = await supabase.auth.getUser();

  if ([...PROTECTED_ADMIN_ROUTES, ...PROTECTED_USER_ROUTES].some(route => pathname.startsWith(route))) {
    if (!auth) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    const { data: user, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', auth.user?.id as string)
      .single();

    if (userError) {
      console.error('Error fetching user record:', userError);
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    if (PROTECTED_ADMIN_ROUTES.some(route => pathname.startsWith(route)) && user?.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (PROTECTED_USER_ROUTES.some(route => pathname.startsWith(route)) && user?.role !== 'user') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
};
