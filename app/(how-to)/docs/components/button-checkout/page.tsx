'use client'
import BetterIcon from "@/components/ui/BetterIcon";
import HintIcon from "@/components/ui/HintIcon";
import PricingUICTA from "@/components/ui/PricingCTA";
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
                        <Link href="/docs/components/button-checkout" className="mb-8">Button Checkout</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">Opens a Stripe Checkout session. Perfect for a one-time payment or a subscription.
            </div>

            <div className="docs-content">Set <span className="docs-tag">mode="payment"</span> for one-time payments or <span className="docs-tag">mode="subscription"</span> for recurring payments like a monthly membership.</div>
            <div className="docs-hint">By default the user must be logged in to checkout to prevent potential disputes like a fraudulent payment with a fake email. You can change that in the <span className="docs-tag">/stripe/server.ts</span>.
</div>
<div className="docs-component mb-4">This component is used to create <Link href="/docs/tutorials/stripe" className="link link-primary">Stripe subscriptions and one-time payments</Link>.</div>

            <div className="pointer-events-none"><PricingUICTA sessionId="" /></div>
            <CopyBlock
                language={'tsx'}
                text={`import ButtonCheckout from "@/components/button-checkout";                `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-title">Tips</div>
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