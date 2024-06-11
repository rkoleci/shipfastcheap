import BetterIcon from "@/components/ui/BetterIcon";
import ButtonLead from "@/components/ui/ButtonLead";
import Link from "next/link";

export default function Components() {


    return (
        <div>
            <div className=" text-3xl text-accent-main font-bold leading-9 breadcrumbs mb-8">
                <ul>
                    <li>
                    <Link href="/docs/components">Components</Link>
                    </li>
                    <li>
                        <Link href="/docs/components/button-lead">Button Lead</Link>
                    </li>

                </ul>

            </div>

            <p className="docs-content">Collect emails and automatically save them in the database. Perfect for a waitlist (if your product isn't ready yet) or a lead generation popup.</p>

            <p className="docs-content">It stores email in <span className="docs-tag">{` waitlist table `}</span> in the database.</p>

            <div className="docs-hint">A database is required.</div>

            <div className="py-10 max-w-xs pointer-events-none"><ButtonLead /></div>

            <div className="mockup-code bg-base-800  mb-6">
                <pre data-prefix="$"><code> import ButtonLead from "@/components/ButtonLead";</code></pre>
            </div>

            <div className="docs-divider"></div>

            <BetterIcon />

            <p className="docs-content">Looking for UI-only components like buttons, inputs, etc? It's all available with daisyUI. See this guide for more info.</p>



        </div>
    )
}