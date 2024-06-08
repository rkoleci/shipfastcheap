import Link from "next/link";

export default function Components() {
   

    return (
        <div>
            <div className="max-w-xs  text-3xl text-accent-main font-bold leading-9 breadcrumbs">
                <ul>
                    <li>
                        <Link href="/docs">Docs</Link>
                    </li>
                    <li>
                        <Link href="/docs/components">Components</Link>
                    </li>

                </ul>

            </div>

        </div>
    )
}