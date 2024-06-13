'use client'

import BetterIcon from "@/components/ui/BetterIcon";
import ButtonLead from "@/components/ui/ButtonLead";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Components() {


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
                        <Link href="/docs/components/button-lead" className="mb-8">Button lead</Link>
                    </li>
                </div>
            </ul>

            <p className="docs-content">Collect emails and automatically save them in the database. Perfect for a waitlist (if your product isn't ready yet) or a lead generation popup.</p>

            <p className="docs-content">It stores email in <span className="docs-tag">{` waitlist table `}</span> in the database.</p>

            <div className="docs-hint">A database is required.</div>

            <div className="py-10 max-w-xs pointer-events-none"><ButtonLead /></div>

            <CopyBlock
                language={'jsx'}
                text={`import ButtonLead from "@/components/ButtonLead";`}
                
                theme={dracula}
                codeBlock
            />


            <div className="docs-divider"></div>

            <BetterIcon />

            <p className="docs-content">Looking for UI-only components like buttons, inputs, etc? It's all available with daisyUI. See this guide for more info.</p>



        </div>
    )
}