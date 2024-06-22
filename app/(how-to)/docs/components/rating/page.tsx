'use client'
import BetterIcon from "@/components/ui/BetterIcon";
import HintIcon from "@/components/ui/HintIcon";
import Image from "next/image";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import image from '../../../../../public/rating.webp'

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
                        <Link href="/docs/components/rating" className="mb-8">Rating</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">Showing your app rating. Looks good above a headline.

            </div>
            <div className="mb-6 relative w-full h-[150px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300"  >
                <Image alt="rating" src={image} style={{width: '100%', height: '100%'}} />
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    
                </div>
            </div>
         


            <CopyBlock
                language={'tsx'}
                text={`import Rating from "@/components/Rating"; `}
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