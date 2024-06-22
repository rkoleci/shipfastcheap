'use client'
import BetterIcon from "@/components/ui/BetterIcon";
import ButtonLead from "@/components/ui/ButtonLead";
import HintIcon from "@/components/ui/HintIcon";
import Image from "next/image";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks"; 

export default function ComponentItem() {
    return (
        <div>

            <ul>
                <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                    <li>
                        <Link href="/docs/components" className="mb-8">Components</Link>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                    <li>
                        <Link href="/docs/components/button-lead" className="mb-8">Button Lead</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">Collect emails and automatically save them in the database. Perfect for a waitlist (if your product isn't ready yet) or a lead generation popup.
 
            </div>
            

            <div className="docs-content">It inserts <span className="docs-tag">email</span> into<span className="docs-tag">waitlist table</span>.</div>
            <div className="docs-hint">A <Link className="link underline" href="/docs/features/database">database</Link> is required.</div>
            <div className="pointer-events-none mb-6 "><ButtonLead /></div>
            <CopyBlock
                language={'tsx'}
                text={`import ButtonLead from "@/components/button-lead";                `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-title mt-4">Tips</div>
            <ul>
                <li><div className="docs-content">Try to cover an potential objections your visitors might have. For instance, if you're selling a course, you might want to add a question about the refund policy.


                </div></li>

            </ul>
            <div className="docs-content text-sm">Updated on: Tuesday, June 21, 2024</div>
            <div className="docs-divider"></div>
            <HintIcon />
            <div className="docs-content mt-2">Looking for UI-only components like buttons, inputs, etc? It's all available with daisyUI. See <Link href="/docs/components" className="link underline">this guide</Link> for more info.</div>

        </div>
    )

}