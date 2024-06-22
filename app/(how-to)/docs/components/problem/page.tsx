'use client'
import BetterIcon from "@/components/ui/BetterIcon";
import HintIcon from "@/components/ui/HintIcon";
import Problem from "@/components/ui/Problem";
import Image from "next/image";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import image from '../../../../../public/problem.webp'
 

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
                        <Link href="/docs/components/problem" className="mb-8">Problem</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">Your startup fixes a problem for customers. But what happens if they don't buy your product?</div>
            <div className="docs-content">This section explains the consequences of not taking care of the problem your startup promises to fix.</div>
            <div className="docs-content">It goes under your Hero section, and above your Features section. A crucial, yet overlooked, component for a landing page that sells.</div>

            <div className="mb-6 relative w-full h-[350px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300"  >
                <Image alt="problem" src={image} style={{width: '100%', height: '100%'}} />
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    
                </div>
            </div>

            <CopyBlock
                language={'tsx'}
                text={`import Problem from "@/components/Problem";`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-title">Tips</div>
            <ul>
                <li><div className="docs-content">Your <span className="docs-tag">{'<Hero />'}</span> section should make a promise to the customer: "Our product helps you solve problem XYZ".</div></li>
                <li><div className="docs-content">This Problem Agitation section section explains what happens to the customer if its problem isn't solved.

                </div></li>
                <li><div className="docs-content">The copy should NEVER mention your product. Instead, it should dig the emotional outcome of not fixing a problem.</div></li>

             
            </ul>
            <div className="docs-content text-sm">Updated on: Tuesday, September 12, 2023</div>
            <div className="docs-divider"></div>
            <HintIcon />
            <div className="docs-content mt-2">Looking for UI-only components like buttons, inputs, etc? It's all available with daisyUI. See this guide for more info.</div>
        </div>
    )

}