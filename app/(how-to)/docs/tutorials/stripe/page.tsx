'use client'
import { appName } from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import image from '../../../../../public/stripe.webp'

export default function Stripe() {
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
            <Link href="/docs/features/stripe" className="mb-8">Stripe Subscriptions</Link>
          </li>
        </div>
      </ul>


      <div className="mb-6 relative w-full h-[650px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300"  >
                <Image alt="" src={image} style={{width: '100%', height: '100%'}} />
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    
                </div>
            </div>

      <div className="docs-hint">The flow is the same for one-time payments</div>

      <div className="docs-content">Let's create a Stripe Checkout to set up a subscription and let our webhook handle the logic to provision access to the user.</div>

      <div className="docs-content">You need to have <Link href="/docs/tutorials/stripe" className="link link-primary">Stripe</Link> and a <Link href="/docs/features/database" className="link link-primary">database</Link> set up.</div>

      <div className="docs-title flex flex-start gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
        Setup
      </div>
     

      <div className="docs-title" id="ngrok">Connect to Stripe webhook</div>

      <div className="docs-content">1. Run the project <span className="docs-tag">npm run dev</span></div>

      <div className="docs-content">2. Connect webhook to Stripe (ngrok or Stripe CLI)</div>

      <div className="docs-hint">Follow <Link href={'https://www.youtube.com/watch?v=-kXrLMnh90s'} className="link link-primary">this tutorial</Link> to setup<span className="docs-tag">ngrok</span>.</div>

      <div className="docs-content">After install, run <span className="docs-tag"> ./ngrok http http://localhost:3000</span> to expose your local webhook to Stripe.</div>

      <div className="docs-content">Now Stripe will be able to call your local <span className="docs-tag">/webhook</span>.</div>

      <div className="docs-title">Create a product</div>

      <div className="docs-content">In your <Link href="https://dashboard.stripe.com/test/products?active=true" className="link link-accent-main/80">Stripe dashboard</Link>, Click [More +] {'->'} [Product Catalog] {'->'} [+ Add Product]. Set a name and a monthly price (or anything according to your business model). Then click [Save Product].</div>

      <div className="docs-hint">When you create a product in Stripe dashboard, it will be automatically added in supabase table <span className="docs-tag">products</span>.</div>
      <div className="docs-title">Collect payment</div>

      <div className="docs-content">Open <span className="docs-tag">http://localhost:3000/</span> in your browser, log-in and click the button <span className="docs-tag">{appName}</span> to make a payment with the credit card number <span className="docs-tag">4242 4242 4242 4242</span>.</div>


      <CopyBlock
        language={`tsx`}
        text={` const handleStripeCheckout = async (sessionId: string) => {
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });
};
`}
        showLineNumbers
        theme={dracula}
        codeBlock
      />


     

      <div className="docs-content mt-4">Our webhook <span className="docs-tag">/api/webhooks/route.ts</span> listens to Stripe events and will handle the logic to provision access (or not) to the user.</div>

      <div className="docs-hint">You need to have a <Link href='#ngrok' className="link">Stripe local endpoint</Link> running on your computer for this to work in dev mode. See <span className="docs-tag">ngrok</span> above.</div>

      <div className="docs-content">You can add your own logic in /api/webhook/route.js like sending abandoned cart emails, remove credits, etc.</div>

      <div className="docs-content">Users can manage their accounts with <span className="docs-tag">{'<ButtonAccount />'}</span> (cancel subscription, update credit card, etc.)</div>

      <div className="docs-content">That's it. You can build your SaaS on top of this flow!</div>
    </div>
  )
}