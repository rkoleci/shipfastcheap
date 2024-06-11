import Link from "next/link";

export default function Stripe() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
                    </li>
                    <li>
                        <Link href="/docs/tutorials/stripe" className="mb-8">Stripe</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-hint">The flow is the same for one-time payments</div>

            <div className="docs-content">Let's create a Stripe Checkout to set up a subscription and let our webhook handle the logic to provision access to the user.</div>

            <div className="docs-content">You need to have <Link href="" className="link link-primary">Stripe</Link> and a <Link href="" className="link link-primary">database</Link> set up.</div>

            <div className="docs-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent/80"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Setup</div>

            <div className="docs-content">In your <Link href="" className="link link-primary">Stripe dashboard</Link>, Click [More +] > [Product Catalog] > [+ Add Product]. Set a name and a monthly price (or anything according to your business model). Then click [Save Product].</div>


            <div className="docs-content">In the [Pricing] section, copy the product price ID (starts with <Link href="" className="link link-primary">price_</Link>) and add it to the first plan in the <Link href="" className="link link-primary">stripe.plans</Link> array <Link href={""} className="link link-primary">config.js</Link>.</div>

            <div className="docs-content">3.In <span className="docs-tag">/dashboard/page.js</span>, paste this:</div>

            <div className="mockup-code bg-base-800  mb-6">
                <pre data-prefix="$"><code>{`import ButtonAccount from "@/components/ButtonAccount";
import ButtonCheckout from "@/components/ButtonCheckout";
import config from "@/config";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <ButtonAccount />

        <h1 className="text-3xl md:text-4xl font-extrabold">
          Subscribe to get access:
        </h1>

        <ButtonCheckout
          mode="subscription"
          priceId={config.stripe.plans[0].priceId}
        />
      </section>
    </main>
  );
}

`}</code></pre>
            </div>

            <div className="docs-content">Open <span className="docs-tag">http://localhost:3000/dashboard</span> in your browser, log-in and click the button to make a payment with the credit card number <span className="docs-tag">4242 4242 4242 4242</span>.</div>

            <div className="docs-content">Our webhook <span className="docs-tag">/api/webhook/stripe/route.js</span> listens to Stripe events and will handle the logic to provision access (or not) to the user—See the boolean hasAccess in the User.js schema (NextAuth) or has_access in your Supabase profiles table.</div>

            <div className="docs-hint">You need to have a <Link href='' className="link">Stripe local endpoint</Link> running on your computer for this to work in dev mode.</div>

            <div className="docs-content">You can add your own logic in /api/webhook/stripe/route.js like sending abandoned cart emails, remove credits, etc.</div>

            <div className="docs-content">That's it. You can build your SaaS on top of this flow!</div>

            <div className="relative w-full h-[250px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png')" }}>
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    <h1 className="text-white text-2xl font-bold">Your Text Here</h1>
                </div>
            </div>
        </div>
    )
}