import { appName } from "@/utils/config";
import Link from "next/link";

interface SidebarProps {
    classes?: string;
}

export default function Sidebar({ classes }: SidebarProps) {

    return (
        <ul className={`menu p-4 w-64  max-h-screen bg-base-100 ${classes} overflow-y-scroll fixed `}>
            {/* Sidebar content here */}
            <ul className="menu bg-base-100 w-56 rounded-box gap-3 ">
                <li>
                    <Link href="/">{appName}</Link>
                </li>
                <Link href='/docs' className="flex justify-start items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-accent-main size-5">
                        <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
                    </svg>
                    <p className="text-accent-main/80 font-medium leading-relaxed">Get Started</p>

                </Link>
                <li>
                    <details open>
                        <summary>
                            <Link href="/docs" className="flex justify-start items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-accent-main size-5">
                                    <path fill-rule="evenodd" d="M2 4.25A2.25 2.25 0 0 1 4.25 2h11.5A2.25 2.25 0 0 1 18 4.25v8.5A2.25 2.25 0 0 1 15.75 15h-3.105a3.501 3.501 0 0 0 1.1 1.677A.75.75 0 0 1 13.26 18H6.74a.75.75 0 0 1-.484-1.323A3.501 3.501 0 0 0 7.355 15H4.25A2.25 2.25 0 0 1 2 12.75v-8.5Zm1.5 0a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75v-7.5Z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-accent-main/80 font-medium leading-relaxed">Tutorials</p></Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/docs/tutorials/ship-in-five" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Ship in 5 minutes</p>
                                

                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/tutorials/static-page" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Static page</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/tutorials/user-auth" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">User Authentication</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/tutorials/api-call" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">API Call</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/tutorials/private-page" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Private page</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/tutorials/stripe" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Stripe Subscriptions</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/tutorials/privacy-policy" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Privacy policy with GPT</p>
                                </Link>
                            </li>

                        </ul>
                    </details>
                </li>

                <li>
                    <details open>
                        <summary>
                            <Link href="/" className="flex justify-start items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-accent-main size-5">
                                    <path fill-rule="evenodd" d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-accent-main/80 font-medium leading-relaxed">Features</p></Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/docs/features/seo" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">SEO</p>
                                  

                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/features/database" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Database</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/features/emails" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Emails</p>
                                </Link>
                            </li> 
                            <li>
                                <Link href="/docs/features/google-oauth" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Google OAuth</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/features/magic-links" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Magic Links</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/features/error-handling" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Error handling</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/features/analytics" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Analytics</p>
                                </Link>
                            </li>

                        </ul>
                    </details>
                </li>

                <li>
                    <details open>
                        <summary>
                            <Link href="/" className="flex justify-start items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-accent-main size-5">
                                    <path fill-rule="evenodd" d="M.99 5.24A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25l.01 9.5A2.25 2.25 0 0 1 16.76 17H3.26A2.267 2.267 0 0 1 1 14.74l-.01-9.5Zm8.26 9.52v-.625a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 0 0 .627-.74Zm1.5 0a.75.75 0 0 0 .627.74h5.373a.75.75 0 0 0 .75-.75v-.615a.75.75 0 0 0-.75-.75H11.5a.75.75 0 0 0-.75.75v.625Zm6.75-3.63v-.625a.75.75 0 0 0-.75-.75H11.5a.75.75 0 0 0-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 0 0 .75-.75Zm-8.25 0v-.625a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 0 0 .75-.75ZM17.5 7.5v-.625a.75.75 0 0 0-.75-.75H11.5a.75.75 0 0 0-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 0 0 .75-.75Zm-8.25 0v-.625a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 0 0 .75-.75Z" clip-rule="evenodd" />
                                </svg>
                                <p className="text-accent-main/80 font-medium leading-relaxed">Components</p></Link>
                        </summary>
                        <ul>
                            <li>
                                <Link href="/docs/components/header" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Header</p>
                                 

                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/hero" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Hero</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/problem" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Problem</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/withwithout" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">WithWithout</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/features-listicle" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Features Listicle</p>
                                </Link>
                            </li>

                         

                            <li>
                                <Link href="/docs/components/pricing" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Pricing</p>
                                </Link>
                            </li>

                          

                            <li>
                                <Link href="/docs/components/faq" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">FAQ</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/testimonial-small" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Testimonial Small</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/testimonial-triple" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Testimonial Triple</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/footer" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Footer</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/button-lead" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Button Lead</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/button-checkout" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Button Checkout</p>
                                </Link>
                            </li>

                        

                            <li>
                                <Link href="/docs/components/button-account" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Button Account</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/better-icon" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Better Icon</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/rating" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Rating</p>
                                </Link>
                            </li>

                            <li>
                                <Link href="/docs/components/modal" className="flex justify-start items-center gap-3">
                                    <p className="text-accent-main/80 font-medium leading-relaxed">Modal</p>
                                </Link>
                            </li>

                        </ul>
                    </details>
                </li>

                <li>
                    <Link href="/docs/deployments" className="flex justify-start items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-accent-main size-5">
  <path fill-rule="evenodd" d="M4.606 12.97a.75.75 0 0 1-.134 1.051 2.494 2.494 0 0 0-.93 2.437 2.494 2.494 0 0 0 2.437-.93.75.75 0 1 1 1.186.918 3.995 3.995 0 0 1-4.482 1.332.75.75 0 0 1-.461-.461 3.994 3.994 0 0 1 1.332-4.482.75.75 0 0 1 1.052.134Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M5.752 12A13.07 13.07 0 0 0 8 14.248v4.002c0 .414.336.75.75.75a5 5 0 0 0 4.797-6.414 12.984 12.984 0 0 0 5.45-10.848.75.75 0 0 0-.735-.735 12.984 12.984 0 0 0-10.849 5.45A5 5 0 0 0 1 11.25c.001.414.337.75.751.75h4.002ZM13 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clip-rule="evenodd" />
</svg>
                        <p className="text-accent-main/80 font-medium leading-relaxed">Deployments</p>


                    </Link>
                </li>

                <li>
                    <Link href="/docs/extras" className="flex justify-start items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-accent-main size-5">
  <path fill-rule="evenodd" d="M14.5 10a4.5 4.5 0 0 0 4.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 0 1-.493.11 3.01 3.01 0 0 1-1.618-1.616.455.455 0 0 1 .11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 0 0-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 1 0 3.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01ZM5 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd" />
  <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 0 1-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012ZM6 4.586l2.33 2.33a.452.452 0 0 1-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 0 1-.447-.276l-1.7-3.402a.5.5 0 0 1 .093-.577l.49-.49a.5.5 0 0 1 .577-.094l3.402 1.7A.5.5 0 0 1 6 3.31v1.277Z" />
</svg>
                        <p className="text-accent-main/80 font-medium leading-relaxed">Extras</p>


                    </Link>
                </li>

            </ul>
        </ul>
    )
}