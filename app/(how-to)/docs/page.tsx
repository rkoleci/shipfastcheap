'use client'
import { appName } from "@/utils/config";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Docs() {
    return (
        <div>
            <div className="max-w-xs  text-5xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs" className="mb-8">Get Started</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-title">Hey maker, welcome to {appName} 👋</div>

            <div className="docs-content">Here's a quick overview of the boilerplate. Follow along to get your app up and running.</div>

            <div className="docs-content">Once you're done, start with <Link className="link link-primary" href="/docs/tutorials/ship-in-five">this tutorial</Link> to launch your project in 5 minutes. Let's build that startup, FAST ⚡️</div>

            <div className="docs-hint mb-10">This boilerplate uses <span className="docs-tag">app router</span> and Nextjs 14.</div>

            <h2 className="docs-title-xl">Start a local server</h2>




            <div className="docs-content">1. In your terminal, run the following commands <span className="docs-content font-semibold">one-by-one</span>: </div>

            <CopyBlock
                language={'bash'}
                text={`git clone https://github.com/Marc-Lou-Org/ship-fast-ts.git  [YOUR_APP_NAME]
                cd [YOUR_APP_NAME]
                npm install
                git remote remove origin
                npm run dev`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            <div className="docs-hint mb-10 mt-4">{appName} requires Node 18.17 or greater. Type <span className="docs-tag">node -v</span> in your terminal to check version.</div>

            <div className="docs-content">2. Rename <span className="docs-tag" >.env.example</span> to <span className="docs-tag">.env.local</span></div>

            <CopyBlock
                language={'bash'}
                text={`mv .env.example .env.local`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />


            <div className="docs-content mt-4">3. Go to the Supabase dashboard, create a new project and paste your 2 Supabase environment variables <span className="docs-tag">NEXT_PUBLIC_SUPABASE_URL</span> <span className="docs-tag">NEXT_PUBLIC_SUPABASE_ANON_KEY</span> in <span className="docs-tag">.env.local</span></div>

            <div className="docs-content">4. Open <span className="docs-tag">http://localhost:3000 </span>to see your site. And voila!</div>

            <div className="docs-hint mb-10">You will see errors in the console but nothing important.</div>


            <h2 className="docs-title-xl">NextJS project structure</h2>

            <ul className="space-y-2 leading-relaxed mb-4">
                <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/app</span> → Pages (1 folder + page.js = 1 page)</span></li>
                <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/app/api</span> → API calls (1 file = 1 API endpoint)</span></li>
                <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/components</span> → React components</span></li>
                <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/libs</span> → Libraries helper functions (Stripe &amp; Mailgun, auth etc.)</span></li>

                <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/app/(home)</span> → Landing page</span></li>
                <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/app/dashboard</span> → Admin space</span></li>
                <li className="flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="opacity-80 shrink-0"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg><span><span className="text-base-content font-medium">/app/(how-to)</span> → These docs (remove if you don't need them))</span></li>
            </ul>

            <h2 className="docs-title-xl">config.js</h2>

            <div className="docs-content">It is where you configure your app. Each key is documented to know how and why it's used. Have a thorough look at it: it is the backbone of the app.</div>

            <h2 className="docs-title-xl">.env file</h2>





            <div className="docs-content mb-4">Rename the .env.example file to <span>.env.local</span>. Change <span>NEXTAUTH_SECRET</span> to anything else. The file content should look like this:</div>
            <CopyBlock
                language={'bash'}
                text={`NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_BACKUP_CODE=
NEXT_PUBLIC_GOOGLE_CLIENT_ID=
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=
MAILGUN_API_KEY=
MAILGUN_DOMAIN=
NEXT_PUBLIC_MAILGUN_SUPPORT_EMAIL=`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
            <div className="docs-content mt-4">Now go ahead and follow <Link href='/docs/tutorials/ship-in-five' className="link link-primary">this tutorial</Link> to get your startup live within 5 minutes!</div>


            <h2 className="docs-title-xl">Database setup</h2>

<ul className="list-inside list-disc  leading-relaxed ml-4 mb-4">
  <li className="list-item docs-content">In your [Supabase] go to [Database]</li>
  <li className="list-item  docs-content">Go to [Functions] on the left panel</li>
  <li className="list-item  docs-content">Click [Create new function]</li>
  <li className="list-item  docs-content">Name the function <span className="docs-tag">handle_new_user</span></li>
  <li className="list-item  docs-content">Paste below code</li>
  <CopyBlock
  language={`tsx`}
  text={`begin
  insert into public.users (id, full_name, avatar_url, role)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', 'user');
  return new;
end;`}
  showLineNumbers
  theme={dracula}
  codeBlock
/>
  <li className="list-item  docs-content mt-4">Hit [Confirm]</li>
</ul>
<div className="docs-hint">Now, everytime a new user logs in, a new record will be stores in table <span className="docs-tag">users</span>.</div>

        </div>
    )
}