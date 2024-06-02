import Link from "next/link";

export default function Docs() {
    return (
        <div>
            <div className="max-w-xs  text-3xl text-accent-main font-bold leading-9 breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs">Docs</Link>
                    </li>
                </ul>
            </div>
            <Link href="/docs/components">Comop</Link>
        </div>
    )
}