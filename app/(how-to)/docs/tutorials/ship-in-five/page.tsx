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

            <div className="docs-content">If you havent't already, clone the repo and run the server locally. See the <Link href="/docs" className="link link-primary">Get Started</Link> tutorial.</div>

            <div className="docs-content">Delete everything in <span className="docs-tag">/app/page.js,</span> and paste this:</div>

            <div className="docs-hint mb-10">You're browsing the /app router documentation. To use the /pages router, <a className="link" href="/docs-old">see here</a></div>

            <h2 className="docs-title-xl">Start a local server</h2>


  <CopyBlock
                language={`tsx`}
                text={`import { Suspense } from 'react'
                import Header from "@/components/Header";
                import Hero from "@/components/Hero";
                import Problem from "@/components/Problem";
                import FeaturesAccordion from "@/components/FeaturesAccordion";
                import Pricing from "@/components/Pricing";
                import FAQ from "@/components/FAQ";
                import CTA from "@/components/CTA";
                import Footer from "@/components/Footer";
                
                export default function Home() {
                  return (
                    <>
                      <Suspense>
                        <Header />
                      </Suspense>
                      <main>
                        <Hero />
                        <Problem />
                        <FeaturesAccordion />
                        <Pricing />
                        <FAQ />
                        <CTA />
                      </main>
                      <Footer />
                    </>
                  );
                }`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

 


            <div className="docs-content">Edit the copy to fit your business logic. Each component has tips to help you write copy that sells—see <Link href="/docs/components" className="link link-primary">components section</Link>. Congrats you have a beautiful landing page to show!</div>

            <div className="docs-content">(Optional) To collect emails for a waitlist, set up a database.</div>

            <div className="docs-content">(Optional) Replace the main call-to-action button in <span>Hero</span>, <span>Pricing</span> with this:</div>


            <CopyBlock
                language={`tsx`}
                text={`import ButtonLead from "@/components/ButtonLead";

                ...
                </div>
                
                {/* For the Hero & CTA use this 👇 */}
                <ButtonLead />
                
                {/* For the Pricing use this instead 👇 */}
                <ButtonLead extraStyle="!max-w-none !w-full" />
                
                <div>
                ...`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
 

            <div className="docs-content">It's time to deploy! If you need help, here's a simple tutorial</div>

            <div className="docs-divider"></div>


        </div>
    )
}