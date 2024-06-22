import PricingCTA from '@/components/server/PricingCTA';
import CustomerPortalForm from '@/components/ui/AccountForms/CustomerPortalForm';
import { appName } from '@/utils/config';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
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
  console.log(111, { hasSubscription })

  return (
    <section className="bg-base-200 flex flex-col items-center min-h-screen  gap-8 w-full px-8 py-0">
      <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6  lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            Account
          </h1>
          <p className="max-w-2xl m-auto mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl">
            {hasSubscription && `Thank you for your puchase!`}
            {!hasSubscription && (
             <Link href="/#pricing">
               <div className={`flex flex-col gap-4 mb-10 items-start lg:items-start`}>
                <button className="btn btn-primary text-accent-secondary btn-wide text-sm">
                <svg className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out" viewBox="0 0 375 509" xmlns="http://www.w3.org/2000/svg"><path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z"></path></svg>
                  Get {appName}
                </button>
              </div>
             </Link>
            )}
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