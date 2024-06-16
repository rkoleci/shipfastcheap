'use client';
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function PrivatePage() {
  return (
    <div>
      <ul>
        <div className="text-3xl text-accent-main font-bold flex flex-row justify-start items-center gap-1 mb-10">
          <li>
            <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
          <li>
            <Link href="/docs/tutorials/private-page" className="mb-8">Private page</Link>
          </li>
        </div>
      </ul>

      <div className="docs-content">Once <Link href="/docs/tutorials/user-auth" className="link link-primary">user is authenticated</Link>, you can build private routes like a user dashboard, account, etc.</div>

      <div className="docs-hint">If you want to make protected API calls, follow <Link href="/docs/tutorials/api-call" className="link link-primary">this tutorial</Link>.</div>

      <div className="docs-content">The <span className="docs-tag">middleware.ts</span> ensures any pages & subpages are private. If the user is not authenticated, he'll be redirected to the login page.</div>

      <div className="docs-content">Here's an example of a simple user dashboard showing private user data in a server component:</div>

      <CopyBlock
        language="tsx"
        text={`import { createClient } from "@/utils/supabase/server";
import UsersTable from "@/components/ui/dashboard/UsersTable";

export default async function Users() {
    const supabase = createClient();

    const { data, error } = await supabase.from('users').select("*");

    if (error) {
        throw new Error(error.message);
    }

    return (
        <UsersTable data={data} />
    );
}`}
        showLineNumbers
        theme={dracula}
        codeBlock
      />
    </div>
  );
}
