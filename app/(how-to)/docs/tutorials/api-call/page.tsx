'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function StaticPage() {
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
            <Link href="/docs/tutorials/api-call" className="mb-8">API Call</Link>
          </li>
        </div>
      </ul>

      <div className="docs-content">Any file named route.js in the /app/api folder is an API endpoint. Use the helper /libs/api.js (axios instance with interceptors) to simplify API calls:</div>

      <ul className="list-inside list-disc space-y-1 leading-relaxed ml-4"><li className="list-item">Automatically display error messages</li>
      <li className="list-item">Redirect to login page upon error 401</li>
      </ul>

      <div className="docs-title">Protected API calls</div>

      <div className="docs-content">1. API call:</div>

      <CopyBlock
        language={`tsx`}
        text={`"use client"
  import { useState } from "react";
  
  const UserProfile = () => {
    const [isLoading, setIsLoading] = useState(false);
  
    const remindUser = async (to: string, subject: string, text: string) => {
      setIsLoading(true);
  
      try {
        const { data } = await fetch('/send-email', { to, subject, text }));
        console.log(data);
      } catch (e) {
        console.error(e?.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <button className="btn btn-primary" onClick={() => remindUser('john@gmail.com', 'Hello', 'This email is ...')}>
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

      

      <div className="docs-content">2 In the backend, we get the session and we can use it to retrieve the user from the database. You have to configure the database first. The API file should look like this:</div>


      <CopyBlock
        language={'tsx'}
        text={`import { sendEmail } from '@/utils/mailgun';
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    try {
      const result = await sendEmail(to, subject, text);
      res.status(200).json({ success: true, result });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
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