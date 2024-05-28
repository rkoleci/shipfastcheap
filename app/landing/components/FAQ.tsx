"use client"
import { useState } from "react"

export default function FAQ() {
    const [active, setActive] = useState(0)

    return (
        <section className="w-full bg-base-400 flex justify-center">
            <div className="bg-base-400 flex flex-col lg:flex-row flex-between gap-8 max-w-7xl px-8 py-[80px]">
                <div className="flex flex-col   text-left basis-1/2">
                    <p className="text-accent-main sm:text-4xl text-3xl max-w-full lg:max-w-[70%] font-extrabold text-lg-content mb-8">Frequently Asked Questions</p>
                    <div className="text-lg-content/80">Have another question? Contact me on<a className="link text-lg-content" target="_blank" href="https://twitter.com/marc_louvion">Twitter</a> or by<a href="mailto:marc@shipfa.st" target="_blank" className="link text-lg-content">email</a>.</div></div>

                <div className=" basis-1/2">
                    <div className="collapse collapse-plus bg-base-400  border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active == 0} onChange={() => setActive(0)}  />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active == 0 ? 'text-primary': 'text-accent-main'}`}>What do I get exactly?</span>
                        </div>
                        <div className="collapse-content px-0">
                           <p className="leading-6 text-white font-medium text-accent-main">1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more. The repo is available in: - Javascript and Typescript - /app router and /pages router.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400  border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active == 1} onClick={() => setActive(1)}  />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active == 1 ? 'text-primary': 'text-accent-main'}`}>What do I get exactly?</span>
                        </div>
                        <div className="collapse-content px-0">
                           <p className="leading-6 text-white font-medium text-accent-main">1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more. The repo is available in: - Javascript and Typescript - /app router and /pages router.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400  border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active == 2} onClick={() => setActive(2)}  />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active == 2 ? 'text-primary': 'text-accent-main'}`}>What do I get exactly?</span>
                        </div>
                        <div className="collapse-content px-0">
                           <p className="leading-6 text-white font-medium text-accent-main">1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more. The repo is available in: - Javascript and Typescript - /app router and /pages router.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400  border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active == 3} onClick={() => setActive(3)}  />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active == 3 ? 'text-primary': 'text-accent-main'}`}>What do I get exactly?</span>
                        </div>
                        <div className="collapse-content px-0">
                           <p className="leading-6 text-white font-medium text-accent-main">1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more. The repo is available in: - Javascript and Typescript - /app router and /pages router.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-400  border-t border-t-[1px] border-gray-800 rounded-none py-1">
                        <input type="radio" name="my-accordion-3" checked={active == 4} onClick={() => setActive(4)}  />
                        <div className="collapse-title text-lg font-medium px-0">
                            <span className={`flex-1 font-bold leading-7 ${active == 4 ? 'text-primary': 'text-accent-main'}`}>What do I get exactly?</span>
                        </div>
                        <div className="collapse-content px-0">
                           <p className="leading-6 text-white font-medium text-accent-main">1/ The NextJS starter with all the boilerplate code you need to run an online business: a payment system, a database, login, a blog, UI components, and much more. The repo is available in: - Javascript and Typescript - /app router and /pages router.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}