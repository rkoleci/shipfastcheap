'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function UseAuthenticationPage() {
    return (
        <div>
            <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
                <ul>
                    <li>
                        <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
                    </li>
                    <li>
                        <Link href="/docs/tutorials/user-auth" className="mb-8">User Authentication</Link>
                    </li>
                </ul>
            </div>

            <div className="docs-content">There are 2 built-in ways to authenticate users with ShipFast: Magic Links & <Link href="/" className="link link-primary">Google Oauth</Link>.</div>

            <div className="docs-content">Once you've completed at least one of the tutorials above, you send users to the signin/signup page like this:</div>

            <div className="docs-content">A simple landing page can done like this:</div>


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
                
                export default SigninButton;
                `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            <div className="docs-hint">The callbackUrl variable in the <span className="docs-tag">config.js</span> file is used accross the app to redirect the user at the right place after a successfull sign-up/login. It's usually a private page like <span className="docs-tag">/dashboard</span></div>

        </div>
    )
}