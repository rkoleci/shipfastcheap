'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function ShipIn5() {
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
            <Link href="/docs/tutorials/ship-in-five" className="mb-8">Ship in 5 minutes</Link>
          </li>
        </div>
      </ul>

      <div className="docs-title">Let's get your startup in front of your customers in 5 minutes ⚡️</div>

      <div className="docs-content">We're building a beautiful landing page and adding forms to collect emails for a waitlist (optional)</div>

      <div className="docs-content">Finish this tutorial to be featured on our homepage ⭐️</div>

      <div className="docs-content">1. If you havent't already, clone the repo and run the server locally. See the <Link href="/docs" className="link link-primary">Get Started</Link> tutorial.</div>

      <div className="docs-content">2. Edit <span className="docs-tag">/app/(home)page.tsx,</span>  to show some sections:</div>

      <CopyBlock
        language={`tsx`}
        text={`return (
                <main>
                    <Hero   />
                    <Problem />
                    <TestimonialTriple />
                    <FeaturedOn />
                    <FeaturesListicle />
                    <Intro />
                    <Pricing   />
                    <FAQ />
                    <Boost   />
                    <Footer />
                </main>
              )`}
        showLineNumbers
        theme={dracula}
        codeBlock
      />




      <div className="docs-content">3. Edit the copy to fit your business logic. <span className="text-white">Each component has tips to help you write copy that sells</span> —see <Link href="/docs/components/header" className="link link-primary">components section</Link>. Congrats you have a beautiful landing page to show!</div>

      <div className="docs-content">4. (Optional) To collect emails for a waitlist, <Link href="/docs/features/database" className="link link-primary">set up a database</Link>.</div>

      <div className="docs-content">5. (Optional) This is the main call-to-action button in <span className="docs-tag">Hero, Pricing</span>. It redirects user to checkout:</div>


      <CopyBlock
        language={`tsx`}
        text={`<PricingCTA />`}
        showLineNumbers
        theme={dracula}
        codeBlock
      />


      <div className="docs-content">It's time to deploy! If you need help, here's <Link href='/docs/deployments' className="link link-primary">a simple tutorial</Link></div>

      <div className="docs-divider"></div>


    </div>
  )
}