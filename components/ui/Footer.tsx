'use client'

import Link from "next/link";

export default function Footer() {

    return (
        <section className="bg-base-400 border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-8 py-24  ">
                <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <Link
                            aria-current="page"
                            className="flex gap-2 justify-center md:justify-start items-center"
                            href="/#"
                        >
                            <img
                                alt="ShipFast logo"
                                fetchPriority="high"
                                width="24"
                                height="24"
                                decoding="async"
                                data-nimg="1"
                                className="w-6 h-6"
                                style={{ color: 'transparent' }}
                                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_transparent.2aa1e5a5.png&w=32&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_transparent.2aa1e5a5.png&w=48&q=75 2x"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_transparent.2aa1e5a5.png&w=48&q=75"
                            />
                            <strong className="font-extrabold tracking-tight text-base md:text-lg text-accent-main">
                                ShipFast
                            </strong>
                        </Link>
                        <p className="mt-3 text-sm text-accent-main/80 leading-relaxed text-accent-main">
                            Ship your startup in days, not weeks
                            <br />
                            Copyright © 2024 - All rights reserved
                        </p>
                        <Link
                            className="inline-block mt-4 text-sm border border-base-content/20 hover:border-base-content/40 hover:text-accent-main/90 hover:bg-base-300 duration-200 cursor-pointer rounded text-accent-main/80 px-2 py-1"
                            href="/"
                        >
                            <div className="flex gap-1 items-center">
                                <span className="text-accent-main">Built with</span>
                                <span className="font-bold text-accent-main flex gap-0.5 items-center tracking-tight">
                                    <img
                                        alt="ShipFast logo"
                                        fetchPriority="high"
                                        width="20"
                                        height="20"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-5 h-5 text-accent-main"
                                        style={{ color: 'transparent' }}
                                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_transparent.2aa1e5a5.png&w=32&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_transparent.2aa1e5a5.png&w=48&q=75 2x"
                                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_transparent.2aa1e5a5.png&w=48&q=75"
                                    />
                                    ShipFast
                                </span>
                            </div>
                        </Link>
                        <div className="mt-8 space-y-2 md:hidden">
                            <p className="font-medium text-sm">We build together on Discord!</p>
                            <div>
                                <button
                                    className="btn text-white border-[#7289da] bg-[#7289da] hover:bg-[#596dac] active:bg-[#596dac] hover:border-[#596dac] active:border-[#596dac] btn-sm"
                                    title="Join Discord community"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 w-[16px] h-[16px]"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                                    </svg>
                                    Join us
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-accent-main tracking-widest text-sm md:text-left mb-3">
                                LINKS
                            </div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link className="link link-hover text-accent-main text-accent-main" href="#pricing">Pricing</Link>
                                <Link className="link link-hover text-accent-main text-accent-main" href="/leaderboard">Leaderboard</Link>
                                <Link className="link link-hover text-accent-main text-accent-main" href="/docs">Documentation</Link>
                                <a href={`mailto:${process.env.NEXT_PUBLIC_MAILGUN_SUPPORT_EMAIL}`}  target="_blank" className="link link-hove text-accent-main">Support</a>
                                <Link className="link link-hover text-accent-main text-accent-main" href="/affiliates">Affiliates — Earn up to $99 per sale</Link>
                                <div>
                                    <button
                                        className="btn text-white border-[#7289da] bg-[#7289da] hover:bg-[#596dac] active:bg-[#596dac] hover:border-[#596dac] active:border-[#596dac] btn-sm max-md:hidden"
                                        title="Join Discord community"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 w-[16px] h-[16px]"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                                        </svg>
                                        Join us
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-accent-main tracking-widest text-sm md:text-left mb-3">
                                LEGAL
                            </div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link className="link link-hover text-accent-main" href="/tos">Terms of services</Link>
                                <Link className="link link-hover text-accent-main" href="/privacy-policy">Privacy policy</Link>
                                <Link className="link link-hover text-accent-main" href="/license">Licenses</Link>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-accent-main tracking-widest text-sm md:text-left mb-3">
                                TEMPLATES
                            </div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link
                                    href="https://launchvir.al/template"
                                    target="_blank"
                                    className="link link-hover text-accent-main"
                                    rel="noopener noreferrer"
                                >
                                    Course
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <div className="footer-title font-semibold text-accent-main tracking-widest text-sm md:text-left mb-3">
                                MORE
                            </div>
                            <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                                <Link
                                    href="https://marclou.beehiiv.com/"
                                    target="_blank"
                                    className="link link-hover text-accent-main"
                                    rel="noopener noreferrer"
                                >
                                    Newsletter for makers
                                </Link>
                                <Link
                                    href="https://byedispute.com/"
                                    target="_blank"
                                    className="link link-hover text-accent-main"
                                    rel="noopener noreferrer"
                                >
                                    ByeDispute
                                </Link>
                                <Link
                                    href="https://indiepa.ge/"
                                    target="_blank"
                                    className="link link-hover text-accent-main"
                                    rel="noopener noreferrer"
                                >
                                    IndiePage
                                </Link>
                                <Link
                                    href="https://zenvoice.io/"
                                    target="_blank"
                                    className="link link-hover text-accent-main"
                                    rel="noopener noreferrer"
                                >
                                    ZenVoice
                                </Link>
                                <Link
                                    href="https://gamifylist.com/"
                                    target="_blank"
                                    className="link link-hover text-accent-main"
                                    rel="noopener noreferrer"
                                >
                                    GamifyList
                                </Link>
                                <Link
                                    href="https://poopup.co/"
                                    target="_blank"
                                    className="link link-hover text-accent-main"
                                    rel="noopener noreferrer"
                                >
                                    PoopUp
                                </Link>
                                <Link className="link link-hover text-accent-main" href="/tools/fake-it-till-you-make-it">
                                    Fake It Till You Make It
                                </Link>
                                <Link className="link link-hover text-accent-main" href="/tools/logo-fast">
                                    LogoFast
                                </Link>
                                <Link className="link link-hover text-accent-main" href="/logo-idea">
                                    Logo inspiration
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}