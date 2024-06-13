'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function SEO() {
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
                        <Link href="/docs/features/seo" className="mb-8">SEO</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-title flex flex-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Setup
            </div>

            <div className="docs-content">Open <span className="docs-tag">config.js</span> file and add values for appName, appDescription, and domainName. These values will be used as default SEO tags.
                The helper /libs/seo.js adds all the important SEO tags (with your default values) to all pages thanks to the main /app/layout.js file.</div>

            <div className="docs-content">To add custom SEO tags to a page without rewritting all the tags, do this:</div>

            <CopyBlock
                language={'tsx'}
                text={`
                import { getSEOTags } from "@/libs/seo";
                ...
                
                export const metadata = getSEOTags({
                  title: "Terms and Conditions | ShipFast",
                  canonicalUrlRelative: "/tos",
                });
                
                export default async function TermsAndConditions() {
                ...
                `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            <div className="docs-hint">I recommend setting title andcanonicalUrlRelative for each pages.</div>

            <div className="docs-content">When relevant, add Structured Data to a page using the renderSchemaTags() function in /libs/seo.js. It helps Google understand better your website and can get you a rich snippet. Open the component for more documentation. Here's an example:</div>

            <div className="docs-content">Add your root URL to siteUrl (i.e. https://yourdomain.com) in the next-sitemap.config.js file, in the root folder. It will generate a sitemap.xml & robots.txt file for all your pages (at build time).</div>

            <div className="docs-hint">Claim your domain ownership on Google Search Console to help indexing</div>
        </div>
    )
}