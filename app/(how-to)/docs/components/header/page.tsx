'use client'
import BetterIcon from "@/components/ui/BetterIcon";
import HintIcon from "@/components/ui/HintIcon";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import image from '../../../../../public/header.webp'

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
                        <Link href="/docs/components/header" className="mb-8">Header</Link>
                    </li>
                </div>
            </ul>

           <div className="docs-content">A responsive header with your logo (left), links (center) and a CTA (right). Links and CTA are hidden on mobile and accessible with a burger menu. Add your own logo in the <span className="docs-tag">/app</span> folder. Make sure to match the file name in <span className="docs-tag">{'<Header />'}</span> component (currently icon.png)</div>
            
           <div className=" mb-6 relative w-full h-[60px]   mx-auto   bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300"  >
                <Image alt="" src={image} style={{width: '100%', height: '100%'}} />
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
               
            </div>
        
            <CopyBlock
                language={'tsx'}
                text={`import Header from "@/components/header";`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-title mt-4">Tips</div>
            <ul>
                <li><div className="docs-content">Unless you're Nike or Apple, visitors have no idea who you are. Keep your brand name small.</div></li>
                <li><div className="docs-content">Try to always have a Pricing link in your header. No matter what you sell, people will look for it.</div></li>
            </ul>
            <div className="docs-content text-sm">Updated on: Tuesday, September 12, 2023</div>
            <div className="docs-divider"></div>
            <HintIcon />
            <div className="docs-content mt-2">Looking for UI-only components like buttons, inputs, etc? It's all available with daisyUI. See <Link href="/docs/components" className="link underline">this guide</Link> for more info.</div>

        </div>
    )

}