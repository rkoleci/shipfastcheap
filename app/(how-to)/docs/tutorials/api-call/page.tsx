'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function StaticPage() {
  return (
    <div>
      <div className="text-3xl text-accent-main font-bold leading-[3rem] breadcrumbs ">
        <ul>
          <li>
            <Link href="/docs/tutorials" className="mb-8">Tutorials</Link>
          </li>
          <li>
            <Link href="/docs/tutorials/api-call" className="mb-8">API Call</Link>
          </li>
        </ul>
      </div>

      <div className="docs-content">Any file named route.js in the /app/api folder is an API endpoint. Use the helper /libs/api.js (axios instance with interceptors) to simplify API calls:</div>

      <ul className="list-inside list-disc space-y-1 leading-relaxed ml-4"><li className="list-item">Automatically display error messages</li><li className="list-item">Redirect to login page upon error 401</li><li className="list-item">Add <code className="text-sm bg-base-100 font-mono rounded px-1.5 py-1 text-base-content select-all break-words ">/api</code> as a base URL: <span className="line-through">/api/user/posts</span> → <span>/user/posts</span></li></ul>

      <div className="docs-title">Protected API calls</div>

      <div className="docs-content">Supabase automatically handles the authentication with cookies. Just make a normal API call on the front-end like this:</div>

      <div className="docs-content">A simple landing page can done like this:</div>


      <CopyBlock
                language={`tsx`}
                text={`"use client"

                import { useState } from "react";
                import apiClient from "@/libs/api";
                
                const UserProfile = () => {
                  const [isLoading, setIsLoading] = useState(false);
                
                  const saveUser = async () => {
                    setIsLoading(true);
                
                    try {
                      const { data } = await apiClient.post("/user", {
                        email: "new@gmail.com",
                      });
                
                      console.log(data);
                    } catch (e) {
                      console.error(e?.message);
                    } finally {
                      setIsLoading(false);
                    }
                  };
                
                  return (
                    <button className="btn btn-primary" onClick={() => saveUser()}>
                      {isLoading && (
                        <span className="loading loading-spinner loading-sm"></span>
                      )}
                      Save
                    </button>
                  );
                };
                
                export default UserProfile;`}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
 
      

      <div className="docs-content">In the backend, we get the session and we can use it to retrieve the user from the database. You have to configure the database first. The API file should look like this:</div>


      <CopyBlock
        language={'tsx'}
        text={`import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
                import { NextResponse } from "next/server";
                import { cookies } from "next/headers";
                
                export const dynamic = "force-dynamic";
                
                export async function POST(req) {
                  const supabase = createRouteHandlerClient({ cookies });
                  const { data } = await supabase.auth.getSession();
                  const { session } = data;
                
                  if (session) {
                    const body = await req.json();
                
                    if (!body.email) {
                      return NextResponse.json({ error: "Email is required" }, { status: 400 });
                    }
                
                    try {
                      // This call will fail if you haven't created a table named "users" in your database
                      const { data } = await supabase
                        .from("users")
                        .insert({ email: body.email })
                        .select();
                
                      return NextResponse.json({ data }, { status: 200 });
                    } catch (e) {
                      console.error(e);
                      return NextResponse.json(
                        { error: "Something went wrong" },
                        { status: 500 }
                      );
                    }
                  } else {
                    // Not Signed in
                    NextResponse.json({ error: "Not signed in" }, { status: 401 });
                  }
                }
                `}
        showLineNumbers
        theme={dracula}
        codeBlock
      />




    </div>
  )
}