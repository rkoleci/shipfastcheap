import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
                    </li>
                    <li>
                        <Link href="/docs/tutorials/privacy-policy" className="mb-8">Privacy policy with GPT</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-content">Privacy policy & terms of service are mandatory when you set a Stripe account or apply for Google Oauth constent screen.</div>

            <div className="docs-content">ShipFast boilerplate includes ChatGPT prompts to help you generate these boring documents in minutes</div>

            <div className="docs-content">Go the the <span className="docs-tag">/app/tos/page.js</span> & <span className="docs-tag">/app/privacy-policy/page.js</span> files in the repo to get the prompts. Add your business details, prompt ChatGPT, and you're up & running!</div>

        </div>
    )
}