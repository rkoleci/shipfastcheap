'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Features() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/features" className="mb-8">Features</Link>
                    </li> <li>
                        <Link href="/docs/SEO" className="mb-8">SEO</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-title flex flex-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
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