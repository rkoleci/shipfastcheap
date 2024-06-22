'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

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
                        <Link href="/docs/features/analytics" className="mb-8">Analytics</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-title flex flex-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Setup
            </div>
            <CopyBlock
                language={'jsx'}
                text={`<script
          defer
          data-domain="YOUR_DOMAIN"
          data-api="/plausible/api/event"
          src="/plausible/js/script.js"
        ></script>`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            <div className="docs-content mt-4"><Link href="https://plausible.io/" className="link underline">Create a new site on Plausible</Link> </div>

            <div className="docs-hint">(optional) Some adblockers block Plausible. To fix this, proxy the script through the nextjs /api.
First add this to next.config.js:</div>

            <div className="docs-content">Then replace the Plausible script in the the main layout.js file:
            </div>


            <CopyBlock
                language={'jsx'}
                text={`<script
                defer
                data-domain="YOUR_DOMAIN"
                data-api="/plausible/api/event"
                src="/plausible/js/script.js"
              ></script>`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />


            <div className="docs-content mt-4">I use Plausible for traffic analytics & custom events. If you want to use another tool, remove the Plausible script in the layout.js file.

            </div>
            <div className="docs-content"></div>

        </div>
    )
}