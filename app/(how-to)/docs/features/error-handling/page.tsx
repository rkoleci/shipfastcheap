import Link from "next/link";

export default function Features() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/features" className="mb-8">Features</Link>
                    </li> <li>
                        <Link href="/docs/error-handling" className="mb-8">Error handling</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-content">Javascript errors are handled gracefully in the /app/error.js high-level component. Error 404 (not found) is handled gracefully in the /app/not-found.js high-level component.</div>

            <div className="docs-content">When an error occurs, a beautiful page is shown and users can reach out support through the ButtonSupport component.</div>

            <div className="docs-content">By default, it will open the Crisp customer chat (if crisp.id is present in config.js). Here's the tutorial to set up Crisp.</div>

            <div className="docs-content">If crisp.id is not set up in the config.js file, it will open the user mail client (mailto:) and let them them an email to your email support (mailgun.supportEmail in config.js)</div>
        </div>
    )
}