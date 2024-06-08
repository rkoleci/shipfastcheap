import Link from "next/link";

interface SidebarProps {
    classes?: string;
}

export default function Sidebar({ classes }: SidebarProps) {

    return (
        <ul className={`menu p-4 w-80 max-h-screen bg-base-200 ${classes} overflow-y-scroll fixed `}>
            {/* Sidebar content here */}
            <ul className="menu bg-base-200 w-56 rounded-box gap-3 ">
                <li><a>ShipFast</a></li>
                <Link href="/get-started" className="flex flex-start items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                    </svg>
                    <p>Get Started</p>
                </Link>

                <li>
                    <details open>
                        <summary>
                            <Link href="/docs" className="flex justify-start items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                                </svg>
                                <p>Tutorials</p></Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/docs/components" className="flex justify-start items-center gap-3">
                                    <p>Ship in 5 minutes</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                                    </svg>

                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Static page</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>User Authentication</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>API Call</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Private page</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Stripe Subscriptions</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Privacy policy with GPT</p>
                                </Link>
                            </li>

                        </ul>
                    </details>
                </li>

                <li>
                    <details open>
                        <summary>
                            <Link href="/" className="flex justify-start items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z" clip-rule="evenodd" />
                                </svg>
                                <p>Features</p></Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>SEO</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                                    </svg>

                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Database</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Emails</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Payments</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Google OAuth</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Customer support</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Error handling</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Analytics</p>
                                </Link>
                            </li>

                        </ul>
                    </details>
                </li>

                <li>
                    <details open>
                        <summary>
                            <Link href="/" className="flex justify-start items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                    <path fill-rule="evenodd" d="M.99 5.24A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25l.01 9.5A2.25 2.25 0 0 1 16.76 17H3.26A2.267 2.267 0 0 1 1 14.74l-.01-9.5Zm8.26 9.52v-.625a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 0 0 .627-.74Zm1.5 0a.75.75 0 0 0 .627.74h5.373a.75.75 0 0 0 .75-.75v-.615a.75.75 0 0 0-.75-.75H11.5a.75.75 0 0 0-.75.75v.625Zm6.75-3.63v-.625a.75.75 0 0 0-.75-.75H11.5a.75.75 0 0 0-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 0 0 .75-.75Zm-8.25 0v-.625a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 0 0 .75-.75ZM17.5 7.5v-.625a.75.75 0 0 0-.75-.75H11.5a.75.75 0 0 0-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 0 0 .75-.75Zm-8.25 0v-.625a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd" />
                                </svg>
                                <p>Components</p></Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Header</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                                        <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                                    </svg>

                                </Link>
                            </li>
                           
                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Hero</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/" className="flex justify-start items-center gap-3">
                                    <p>Problem</p>
                                </Link>
                            </li>
                           
                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>WithWithout</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Features Listicle</p>
                               </Link>
                           </li>
                           
                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Features Accordion</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Pricing</p>
                               </Link>
                           </li>
                           
                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Blog</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>FAQ</p>
                               </Link>
                           </li>
                           
                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Testimonial Small</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Testimonial Triple</p>
                               </Link>
                           </li>
                           
                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Footer</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Button Lead</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Button Checkout</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Button Sign-in</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Button Account</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Better Icon</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Rating</p>
                               </Link>
                           </li>

                           <li>
                               <Link href="/" className="flex justify-start items-center gap-3">
                                   <p>Modal</p>
                               </Link>
                           </li>
                           
                        </ul>
                    </details>
                </li>

                <li>
                    <Link href="/" className="flex justify-start items-center gap-3">
                        <p>Deployement</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                        </svg>

                    </Link>
                </li>

                <li>
                    <Link href="/" className="flex justify-start items-center gap-3">
                        <p>Extras</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                        </svg>

                    </Link>
                </li>

            </ul>
        </ul>
    )
}