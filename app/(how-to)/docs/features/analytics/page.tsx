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
                        <Link href="/docs/analytics" className="mb-8">Analytics</Link>
                    </li>
                </ul>
            </div>

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

            <div className="docs-content">Create a new site on Plausible</div>

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


            <div className="docs-content">I use Plausible for traffic analytics & custom events. If you want to use another tool, remove the Plausible script in the layout.js file.

            </div>
            <div className="docs-content"></div>

        </div>
    )
}