'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function StaticPage() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
                    </li>
                    <li>
                        <Link href="/docs/tutorials/static-page" className="mb-8">Static page</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-content">ShipFast comes with many components to help you build SEO-optimized pages (like a landing page) in no time.</div>

            <div className="docs-content">The <span className="dosc-tag">/components</span> folder contains all you need (hero, pricing, FAQ sections). Here's the list of <Link href='/docs/components' className="link link-primary">all the components</Link> & themes.</div>

            <div className="docs-content">A simple landing page can done like this:</div>

            <CopyBlock
                language={`tsx`}
                text={`import { getSEOTags } from "@/libs/seo";

                export const metadata = getSEOTags({ canonicalUrlRelative: "/" });
                
                export default function Landing() {
                  return (
                    <>
                      <main
                        className="min-h-screen p-12 pb-24 text-center"
                        data-theme="dark"
                      >
                        <section className="max-w-xl mx-auto space-y-8">
                          <h1 className="text-3xl md:text-4xl font-extrabold">
                            Food recipes you&apos;ll love 🥦
                          </h1>
                
                          <p className="text-lg leading-relaxed text-base-content/80">
                            Our AI will generate recipes based on your preferences. New recipes
                            will be added every week!
                          </p>
                
                          <img
                            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3484&q=80"
                            alt="Vegetables"
                            width={500}
                            height={250}
                            className="rounded-lg mx-auto"
                          />
                
                          <button className="btn btn-primary btn-wide">Get started</button>
                        </section>
                      </main>
                    </>
                  );
                }`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            

        </div>
    )
}