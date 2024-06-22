import CustomerPortalForm from '@/components/ui/AccountForms/CustomerPortalForm';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser(); 

  const { data: subscription, error } = await supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .eq('user_id', user?.id as string)
    .in('status', ['trialing', 'active'])

  if (error) {
    console.log(error);
    throw new Error(error.message)
  }

  const hasSubscription = !!subscription[0]?.id

  return (
    <section className="bg-base-200 flex flex-col items-center min-h-screen  gap-8 w-full px-8 py-0">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6  lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Account
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            Thank you for your puchase!
          </p>
        </div>
      </div>

      {hasSubscription && (
        <>
          <div role="alert" className="alert alert-success w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Your purchase has been confirmed!</span>
          </div>
          <p className='text-accent-main/80 leading-relaxed font-medium'>You will receive an email at ({user?.email}) with the purchased product with 24 hours.</p></>

      )}

      <div className="p-4">
        {subscription[0] && <CustomerPortalForm subscription={subscription[0]} />}
      </div>
    </section>
  );
}