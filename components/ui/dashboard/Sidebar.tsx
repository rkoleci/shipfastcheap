import Link from "next/link";

interface SidebarProps {
    classes?: string;
}

export default function Sidebar({ classes }: SidebarProps) {

    return (
        <ul className={`menu p-4 w-64 min-h-screen max-h-screen bg-base-100 ${classes} overflow-y-scroll fixed `}>
            <div className="mb-8">Shipfast</div>
            <li>
                    <details open>
                        <summary>
                            <Link href="/dashboard" className="flex justify-start items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                                </svg>
                                <p>Dashboard</p></Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/dashboard/products" className="flex justify-start items-center gap-3">
                                    <p>Products</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/customers" className="flex justify-start items-center gap-3">
                                    <p>Customers</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/subscriptions" className="flex justify-start items-center gap-3">
                                    <p>Subscriptions</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/prices" className="flex justify-start items-center gap-3">
                                    <p>Prices</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/users" className="flex justify-start items-center gap-3">
                                    <p>Users</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/customers" className="flex justify-start items-center gap-3">
                                    <p>Customers</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/waitlist" className="flex justify-start items-center gap-3">
                                    <p>Waitlist</p>
                                </Link>
                            </li>

                        </ul>
                    </details>
                </li>
        </ul>
    )
}