'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import shipfastUsersTable from '../../../../../public/shipfast-user-table.png'

export default function UseAuthenticationPage() {
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
                        <Link href="/docs/tutorials/user-auth" className="mb-8">User Authentication</Link>
                    </li>
                </div>
            </ul>


            <div className="docs-content">There are 2 built-in ways to authenticate users with ShipFast: Magic Links & <Link href="/docs/features/google-oauth" className="link link-primary">Google Oauth</Link>.</div>

            <div className="docs-content">Once you've completed at least one of the tutorials above, you send users to the signin/signup page like this:</div>



            <CopyBlock
                language={`tsx`}
                text={`"use client";

import Link from "next/link";

const SigninButton = () => {
    return (
    <Link className="btn btn-primary" href="/signin">
        Login
    </Link>
    );
};

export default SigninButton;`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            <div className="docs-hint mt-4">If the user has  <span className="docs-tag">role: admin</span> in database table <span>users</span>, he will be redirected to <span className="docs-tag">/dashboard</span></div>
            <div className="docs-hint">If the user has  <span className="docs-tag">role: user</span>, he will be redirected to <span className="docs-tag">/saas</span></div>

            <div className="docs-content">To create an admin (you), sign up and manually edit the user record in users table supabase by settings role: admin.</div>



            <div className="mb-4 relative w-full h-[250px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300"  >
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    
                </div>
            </div>

            <div className="docs-hint mt-4">All new users have <span className="docs-tag">role: user</span> by default. </div>


        </div>
    )
}