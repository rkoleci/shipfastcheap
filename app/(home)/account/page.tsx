import CustomerPortalForm from '@/components/ui/AccountForms/CustomerPortalForm';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function Account() { 
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();
  
  if (!user) {
    return redirect('/signin');
  }

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
        <div className='text-primary leading-relaxed font-medium'>You will receive an email at ({user?.email}) with the purchased product with 24 hours.</div>
      )}
      
      <div className="p-4">
        {subscription[0] && <CustomerPortalForm subscription={subscription[0]} />}
      </div>
    </section>
  );
}