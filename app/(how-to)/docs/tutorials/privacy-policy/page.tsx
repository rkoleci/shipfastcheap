import { appName } from "@/utils/config";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div>
            <ul>
        <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
          <li>
            <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
          <li>
            <Link href="/docs/tutorials/privacy-policy" className="mb-8">Privacy policy with GPT</Link>
          </li>
        </div>
      </ul>

            <div className="docs-content">Privacy policy & terms of service are mandatory when you set a Stripe account or apply for Google Oauth constent screen.</div>

            <div className="docs-content">{appName} boilerplate includes ChatGPT prompts to help you generate these boring documents in minutes</div>

            <div className="docs-content">Go the the <span className="docs-tag">Readme.md</span> in the repo, in the end of file to get the prompt. Add your business details, prompt ChatGPT, and you're up & running!</div>

        </div>
    )
}