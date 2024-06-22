'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function DocsPage() {
    return (
        <div>

<ul>
                <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                    <li>
                        <Link href="/docs/deployments" className="mb-8">Deployments</Link>
                    </li>
                 
                  
                </div>
            </ul>

            <div className="docs-content">1. Commit your code, switch to the main git branch and merge supabase:</div>

           

            <CopyBlock
                language={'terminal'}
                text={`git add .
git commit –m "Time to ship"
git checkout main
git merge supabase `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            <div className="docs-content mt-4">2. Use your favorite hosting provider (Vercel for me) to create a new project based on the GitHub repo. You can deploy your app anywhere NextJS is supported: Vercel, Netlify, Render, etc.</div>
            <div className="docs-content">3. Set the right .env file on your deployement as the .env.local is not committed.</div>
            <div className="docs-content">4. Using Google Oauth? Follow the <Link href="/docs/features/google-oauth" className="link underline">production checklist</Link>  (scroll down on the page)</div>
            <div className="docs-content">5. Using Stripe? Follow the <Link href="/docs/tutorials/stripe" className="link underline">production checklist</Link> (scroll down on the page)</div>
            
            <div className="docs-content ">
                Congrats on making it that far, legend!
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            </div>
            <div className="docs-content">--Rei Koleci</div>
           
        </div>
    )

}