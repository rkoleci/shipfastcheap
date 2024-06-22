'use client'
import HintIcon from "@/components/ui/HintIcon";
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
                        <Link href="/docs/components/hero" className="mb-8">Hero</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">A beautiful hero section with a title, a supporting headline, image, social proof and CTA.
            </div>
             
            <CopyBlock
                language={'tsx'}
                text={`import Hero from "@/components/hero";`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-title mt-4">Tips</div>
            <ul>
                <li><div className="docs-content">Your should answer this question in less than 10 words: "Why should a random visitor stay on your site for more than 10 seconds?".
                    Write about the pain it's relieving, the problem it's solving, or the pleasure it's giving.</div></li>
                <li><div className="docs-content">The supporting headline explain how you deliver what your promise in the title.
                </div></li>
                <li><div className="docs-content">Social proof = trust = more conversions. Offer the product to a few people for free in exchange for a genuine testimonial.
                </div></li>
                <li><div className="docs-content">The image is a like YouTube thumbnail. It should be super easy to understand what your product does just by looking at it.
                </div></li>
                <li><div className="docs-content">The <span className="docs-tag">{'<Problem />'}</span> section should follow this Hero section
                </div></li>
            </ul>
            <div className="docs-content text-sm">Updated on: Tuesday, September 12, 2023</div>
            <div className="docs-divider"></div>
            <HintIcon />
            <div className="docs-content mt-2">Looking for UI-only components like buttons, inputs, etc? It's all available with daisyUI. See <Link href="/docs/components" className="link underline">this guide</Link> for more info.</div>

        </div>
    )

}