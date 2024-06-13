import Link from "next/link";

export default function Components() {


    return (
        <div>
            <div className="max-w-xs  text-3xl text-accent-main font-bold leading-9 breadcrumbs">
                <ul>
                    <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                        <li>
                            <Link href="/docs/components" className="mb-8">Components</Link>
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                        <li>
                            <Link href="/docs/components/withwithout" className="mb-8">Withwithout</Link>
                        </li>
                    </div>
                </ul>
            </div>

        </div>
    )
}