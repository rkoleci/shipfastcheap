import Link from "next/link";

export default function Features() {
    return (
        <div>
              <ul>
                <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                    <li>
                        <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                        <path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                    <li>
                        <Link href="/docs/features/google-oauth" className="mb-8">Google OAuth</Link>
                    </li>
                </div>
            </ul>

            <div className="docs-title flex flex-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Setup
            </div>

            <div className="docs-content">1.Create a new project on Google Cloud</div>

            <div className="docs-content">2.Go to APIs & Services then Credentials</div>

            <div className="docs-content">3.Click [Configure Consent Screen]
</div>

            <div className="docs-content">4.Fill info. Use the ChatGPT prompts in pages /tos & /privacy-policy to generate yours automatically.
Add userinfo.email & userinfo.profile to scope.
Add yourself as a test user.
Submit.</div>

            <div className="docs-content">5.Go to Credentials and click [+ Create Credentials] then [Oauth Client ID]
</div>

            <div className="docs-content">6.Choose [Web Application].
Add http://localhost:3000 and https://your-project.supabase.co to Authorized JavaScript origins.
Add https://your-project.supabase.co/auth/v1/callback to Authorized redirect URIs (if you're using a subdomain like www, make sure to add it too).
Click [Create]</div>

            <div className="docs-content">7.Copy paste the Client ID in GOOGLE_ID and Client Secret in GOOGLE_SECRET to your Supabase dashboard (Authentication, Providers, Google)</div>
            <div className="docs-content">8.In Supabase, go to [Authentication] then [URL Configuration] and add http://localhost:3000 to [Site URL]. Then add http://localhost:3000/* to [Redirect URLs].</div>
            <div className="docs-content">9.Go to [Oauth Consent Screen] and click [Publish App] then submit for verification.
Click [Prepare for verification] and fill the missing information.
Google will email you and you will have to reply to start the process. You'll need to have your domain verified with Google Search Console. You can go ahead and do that now.
You can already login with Google on localhost. On production, it will work too but show a warning until you're verified (takes a few days).</div>
            <div className="docs-hint">Going to production?

In Supabase dashboard, go to [Authentication] then [URL Configuration] and add https://your-domain.com to [Site URL]. Then add https://your-domain.com/* to [Redirect URLs].</div>
        </div>
    )
}