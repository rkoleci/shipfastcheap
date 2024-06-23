"use client"
import { adminEmail, appName, twitterHandle } from "@/utils/config"
import Link from "next/link"
import { useState } from "react"

export default function FAQ() {
    const [active, setActive] = useState(0)

    return (
        <section className="w-full bg-base-400 flex justify-center">
            <div className="bg-base-400 flex flex-col lg:flex-row flex-between gap-8 max-w-7xl px-8 py-16">
                <div className="flex flex-col text-left basis-1/2">
                    <p className="text-accent-main sm:text-4xl text-3xl max-w-full lg:max-w-[70%] font-extrabold text-lg-content mb-8 leading-none">Frequently Asked Questions</p>
                    <div className="text-accent-main text-lg-content/80">
                        Have another question? Contact me on <a className="link text-lg-content" target="_blank" href="https://x.com/reikoleci">Twitter</a> or by <a href="mailto:rkoleci14@gmail.com" target="_blank" className="link text-lg-content">email</a>.
                    </div>
                </div>

                <div className="basis-1/2">
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 0} onChange={() => setActive(0)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 0 ? 'text-primary' : 'text-accent-main'}`}>What do I get exactly?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                You get access to the full source code repository, along with comprehensive documentation.
                                <br />2/ The documentation helps you set up your app from scratch, write copy that sells, and ship fast.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 1} onChange={() => setActive(1)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 1 ? 'text-primary' : 'text-accent-main'}`}>JavaScript or TypeScript?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">This boilerplate is written in TypeScript.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 2} onChange={() => setActive(2)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 2 ? 'text-primary' : 'text-accent-main'}`}>/app router or /pages router?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">This boilerplate is built with Next.js 14 and uses the latest app router version.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 3} onChange={() => setActive(3)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 3 ? 'text-primary' : 'text-accent-main'}`}>My tech stack is different, can I still use it?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                Yes, as long as you're comfortable with React & Next.js.
                                <br />
                                Libraries are independent. You can use SendGrid instead of Mailgun, LemonSqueezy instead of Stripe, or Postgres instead of MongoDB, for instance.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 4} onChange={() => setActive(4)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 4 ? 'text-primary' : 'text-accent-main'}`}>Is it a website template?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                It's more than just a template. You can copy/paste sections to build your site quickly, like a pricing section, an FAQ, and even an entire blog. You also get a bunch of UI components like buttons, modals, popovers, etc.
                                <br />
                                The Next.js starter also comes with handy tools you need to run an online business—payment processing, emails, SEO, etc.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 5} onChange={() => setActive(5)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 5 ? 'text-primary' : 'text-accent-main'}`}>How is {appName} better than other boilerplates?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                Customers do NOT buy code.
                                <br />
                                Customers buy a life transformation.
                                <br />
                                They ship startups. Every week. And they make $ from it.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 6} onChange={() => setActive(6)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 6 ? 'text-primary' : 'text-accent-main'}`}>Are there any other costs associated?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                Many hosting platforms, like Vercel, let you host a project for free (front-end + back-end) and MongoDB/Supabase have free tiers — so you can launch your first app for $0/month.
                                <br />
                                If you use Magic Link sign-ups, you'll spend $1 per 1,000 users.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 7} onChange={() => setActive(7)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 7 ? 'text-primary' : 'text-accent-main'}`}>How often is {appName} updated?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                I'm building small micro SaaS projects all the time, so I update the boilerplate with every new component I build. So it's under constant update.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 8} onChange={() => setActive(8)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 8 ? 'text-primary' : 'text-accent-main'}`}>Can I get a refund?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                After you've got access to the repo, ShipFast is yours forever, so it can't be refunded.
                                <br />
                                But rest assured, users of ShipFast ship startups in 7 days on average and make their first $ online in record time.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400 border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active === 9} onChange={() => setActive(9)} />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active === 9 ? 'text-primary' : 'text-accent-main'}`}>How do I get access after purchase?</span>
                        </div>
                        <div className="collapse-content px-0">
                            <p className="leading-6 font-medium text-accent-main">
                                Once you have completed the checkout <Link href={`mailto:${adminEmail}`} className="link link-primary">email me</Link> -- {adminEmail} your GitHub username so I can give you access to the repo.
                                <br />
                                Or reach out on Twitter {twitterHandle}
                                <br />
                                Please allow a few hours to get access.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
