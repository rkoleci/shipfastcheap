import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getErrorRedirect, getStatusRedirect } from '@/utils/helpers';

export async function GET(request: NextRequest) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the `@supabase/ssr` package. It exchanges an auth code for the user's session.
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const supabase = createClient();

  if (code) {


    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(
        getErrorRedirect(
          `${requestUrl.origin}/signin`,
          error.name,
          "Sorry, we weren't able to log you in. Please try again."
        )
      );
    }
  }

  const { data: auth } = await supabase.auth.getUser()
  if (!auth) {
    return NextResponse.redirect(
      getErrorRedirect(
        `${requestUrl.origin}/signin`,
        'auth',
        "Sorry, we weren't able to log you in. Please try again."
      )
    );
  }


  // TODO redirect to dashboard for admin
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('id', auth.user?.id as string)
    .single();
  if (!user) {
    return NextResponse.redirect(
      getErrorRedirect(
        `${requestUrl.origin}/signin`,
        'auth',
        "Sorry, we weren't able to log you in. Please try again."
      )
    );
  }



  if (user?.role === 'admin') {
    return NextResponse.redirect(
      getStatusRedirect(
        `${requestUrl.origin}/dashboard`,
        'Success!',
        'You are now signed in.'
      )
    );
  }

  // Check if user has subscription
  const { data: subscription, error } = await supabase
  .from('subscriptions')
  .select('*, prices(*, products(*))')
  .eq('user_id', auth.user?.id as string)
  .in('status', ['trialing', 'active'])
  .select()

  console.log(111, 'subscr', auth.user?.id,   subscription)

  if (!subscription?.length || (subscription && subscription[0] && subscription[0]?.status !== 'active')) {
    return NextResponse.redirect(
      getStatusRedirect(
        `${requestUrl.origin}/#pricing`,
        'Success!',
        'You are now signed in.'
      )
    );
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(
    getStatusRedirect(
      `${requestUrl.origin}/saas`,
      'Success!',
      'You are now signed in.'
    )
  );
}
