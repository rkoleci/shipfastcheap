'use client'
import BetterIcon from "@/components/ui/BetterIcon";
import ButtonAccount from "@/components/ui/ButtonAccount";
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
                        <Link href="/docs/components/button-account" className="mb-8">Button Account</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">A button with a dropdown menu to manage user account:
            </div>

       
            <ul>
                <li>
                    <div className="docs-content"><span className="docs-title text-base">Billing</span>: Open a Stripe Customer Portal to manage their billing (cancel subscription, update payment method, etc.). You have to manually activate the Customer Portal in your <Link href="https://dashboard.stripe.com/test/settings/billing/portal" className="link underline">Stripe Dashboard</Link>. This is only available if the customer has a customerId (they made a purchase previously)</div>
                </li>
                <li>
                    <div className="docs-content"><span className="docs-title text-base">Logout</span>: sign out the user and go back to the homepage</div>
                </li>
            </ul>

            <div className="docs-content">It's automatically hidden if the user is not logged in. This component is used to handle <Link href="/docs/tutorials/stripe" className="link underline">Stripe Subscriptions</Link>.</div>

           
 
            <CopyBlock
                language={'tsx'}
                text={`import ButtonAccount from "@/components/button-acount";                `}
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