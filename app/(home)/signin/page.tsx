import { redirect } from 'next/navigation';
import { getDefaultSignInView } from '@/utils/auth-helpers/settings';
import { cookies } from 'next/headers';

export default function SignIn() {
  console.log(111, 'true')
  const preferredSignInView =
    cookies().get('preferredSignInView')?.value || null;
  const defaultView = getDefaultSignInView(preferredSignInView);

  return redirect(`/signin/email_signin`);
}
