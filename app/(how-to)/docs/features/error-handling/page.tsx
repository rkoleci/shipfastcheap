import Link from "next/link";

export default function Features() {
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
                        <Link href="/docs/features/error-handling" className="mb-8">Error handling</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-content">Javascript errors are handled gracefully in the /app/error.js high-level component. Error 404 (not found) is handled gracefully in the /app/not-found.js high-level component.</div>

            <div className="docs-content">When an error occurs, a beautiful page is shown and users can reach out support through the ButtonSupport component.</div>

            <div className="docs-content">By default, it will open the Crisp customer chat (if crisp.id is present in config.js). Here's the tutorial to set up Crisp.</div>

            <div className="docs-content">If crisp.id is not set up in the config.js file, it will open the user mail client (mailto:) and let them them an email to your email support (mailgun.supportEmail in config.js)</div>
        </div>
    )
}