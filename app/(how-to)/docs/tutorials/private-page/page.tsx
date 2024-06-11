import Link from "next/link";

export default function StaticPage() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
                    </li>
                    <li>
                        <Link href="/docs/tutorials/private-page" className="mb-8">Private page</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-content">Once <Link href="/" className="link link-primary">user is authentified</Link>, you can build private routes like a user dashboard, account, etc.</div>

            <div className="docs-hint">If you want to make protected API calls, follow <Link href="" className="link link-primary">this tutorial</Link>.</div>

            <div className="docs-content">The <span className="docs-tag">layout.js</span> in <span className="docs-tag">/dashboard</span> ensures any pages & subpages are private. If the user is not authenticated, he'll be redirected to the login page (see <span className="docs-tag">auth</span> in <span className="docs-tag">config.js</span>.)</div>

            <div className="docs-content">Here's an example of a simple user dashboard showing private user data in a server component:</div>

            <div className="mockup-code bg-base-800  mb-6">
                <pre data-prefix="$"><code>{`import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("todos").select();

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Private Page</h1>

        {/* You will only see something if you create an SQL table called todos with at least 1 row */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    </main>
  );
}
`}</code></pre>
            </div>

        </div>
    )
}