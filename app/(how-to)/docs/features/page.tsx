import Link from "next/link";

export default function Features() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/features" className="mb-8">Features</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-content">None of the librairies are mandatory. You can set them all or only a few.</div>
        </div>
    )
}