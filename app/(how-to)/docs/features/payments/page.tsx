import Image from "next/image";
import Link from "next/link"; 

export default function Features() {
    return (
        <div>
              <ul>
                <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                    <li>
                        <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                    <li>
                        <Link href="/docs/features/payments" className="mb-8">Payments</Link>
                    </li>
                </div>
            </ul>


            <div className="mb-4 relative w-full h-[250px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png')" }}>
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    
                </div>
            </div>

            <div className="docs-title flex flex-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Setup
            </div>

            <div className="docs-content">Create a new account on Stripe and activate payments (boring, I know.. see you in a bit!)</div>

            <div className="docs-content">In your [Settings], [Public Details], add your website URL</div>

            <div className="docs-content">In your [Settings], [Branding], add your logo & colors</div>

            <div className="docs-content">In your [Settings], [Customer Emails], turn on emails for successful payments & refunds</div>

            <div className="docs-content">In your [Settings], [Customer Portal], activate link to customer portal (in case you need later)</div>

            <div className="docs-content">In the search box, type 'rules' and click [Fraud Prevention {'>'} Rules] , make sure the first 3DS rule is enabled. I also turn on the second one (recommended). Make sure to block payments if CVC fails (check below)</div>

            <div className="docs-title">Turn ON Test Mode</div>
 
            

            <div className="docs-content">In your [Developers], copy your public & private keys and add them to STRIPE_SECRET_KEY & STRIPE_PUBLIC_KEY in .env.local</div>

            <div className="docs-content">Create a webhook with URL like this: [ngrok_address]/api/webhooks</div>
            
            <div className="docs-hint">
                Webhook example: https://e714-71-136-126-125.ngrok-free.app/api/webhooks
            </div>
        
          
            <div className="docs-content">Copy the signing secret and add it to STRIPE_WEBHOOK_SECRET in .env.local</div>

            <div className="docs-title">To set up the webhook locally</div>
            <div className="docs-hint">Run the <Link href="/docs/tutorials/stripe" className="link underline">webhook listener (ngrok)</Link> first and events will be handled by local api /webhooks/route.</div>


            <div className="docs-hint">Going to production?

                Turn OFF Test Mode in your Stripe Dashboard
                In your [Developers], copy your public & private keys and add them to STRIPE_SECRET_KEY & STRIPE_PUBLIC_KEY in your production environment variables.
                In your [Developers], [Webhook], [Add Enpoint]. Set your domain + /api/webhook/stripe. Select [checkout.session.completed] event (or more if needed). Copy the signing secret and add it to STRIPE_WEBHOOK_SECRET in your production environment variables.
                Optional: In [Balance], [Manage Payouts], set a specific date of the month to receive your payouts (I use the 10th of each month)
                Optional: In [Settings], [Customers Emails], activate emails for successful payments & refunds</div>

            <div className="docs-divider"></div>

            <div className="docs-title">Create a checkout</div>

            <div className="docs-content">From the front-end, use the PricingCTA to automatically create a checkout session (one-time payment or subscription)</div>

            <div className="docs-title">Stripe webhooks & subscription handling</div>

            <div className="docs-content ">Our API listens to Stripe selected webhooks events & update the user accordingly. It turns boolean hasAccess (or has_access in Supabase) to true/false based on whether the user should have access to a paid resource or not.</div>

            <div className="docs-content">You can add your own business logic to the /api/webhook/route API endpoint (add credits to a user, send email with a paid e-book etc.)</div>

             
        </div>
    )
}