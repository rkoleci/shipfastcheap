import Link from "next/link";

export default function Docs() {
    return (
        <div>
            <div className="max-w-xs  text-5xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs">Docs</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-title">Hey maker, welcome to ShipFast 👋</div>




            {/* 

            <div className="docs-title">Hey maker, welcome to ShipFast 👋</div>
            <div className="docs-content">Here's a quick overview of the boilerplate. Follow along to get your app up and running.</div>

            <div className="docs-content">Once you're done, start with <Link className="link link-primary" href="/docs/tutorials/ship-in-5-minutes">this tutorial</Link> to launch your project in 5 minutes. Let's build that startup, FAST ⚡️</div>

            <div className="docs-hint">You're browsing the /app router documentation. To use the /pages router, <a className="link" href="/docs-old">see here</a></div>

            <h2 className="docs-title-xl">Start a local server</h2>

            <div className="docs-content">1. In your terminal, run the following commands <span className="docs-content font-semibold">one-by-one</span>: </div>

            <h2 className="text-xl font-bold mb-6 text-base-content">.env file</h2>

            <div className="mockup-code bg-base-800">
                <pre data-prefix="$"><code>npm i daisyui</code></pre>
            </div>

            <div className="docs-hint">You're browsing the /app router documentation. To use the /pages router, <a className="link" href="/docs-old">see here</a></div>

            <h2 className="docs-title-xl">NextJS project structure</h2>

            <ul className="space-y-2 leading-relaxed"><li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/app</span> → Pages (1 folder + page.js = 1 page)</span></li><li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/app/api</span> → API calls (1 file = 1 API endpoint)</span></li><li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/components</span> → React components</span></li><li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/libs</span> → Libraries helper functions (Stripe &amp; Mailgun, auth etc.)</span></li></ul>

            <div className="docs-content">It is where you configure your app. Each key is documented to know how and why it's used. Have a thorough look at it: it is the backbone of the app.</div>

            <div className="docs-content">Now go ahead and follow <Link href="/" className="link link-primary">this tutorial</Link> to get your startup live within 5 minutes!</div>

            <div className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-accent/80"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                <p className="docs-title-xl mb-0">Setup</p>
            </div>

            <div className="docs-content">sdsids dsidnsudns <span className="docs-tag">{`<ButtonContent />`}</span> idsduns d</div>
            
            <div className="relative w-full h-[250px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png')" }}>
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    <h1 className="text-white text-2xl font-bold">Your Text Here</h1>
                </div>
            </div> */}


        </div>
    )
}