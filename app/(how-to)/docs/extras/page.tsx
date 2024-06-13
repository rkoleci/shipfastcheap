'use client'
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function DocsPage() {
    return (
        <div>

            <ul>
                <div className="text-3xl text-accent-main font-bold  flex flex-row justify-start items-center gap-1 mb-10">
                    <li>
                        <Link href="/docs/extras" className="mb-8">Extras</Link>
                    </li>

                </div>
            </ul>

            <div className="docs-content">You don't have to use Mailgun, but you'll need an email tool to to setup magic login links, abandoned carts emails, etc...</div>

            <div className="docs-hint">Mailgun silently removed their "pay-as-you-go" flex tier from their pricing page, but it's still there. Start a free trial for the 35$ tier, then cancel it. You'll be downgraded to the "pay as you go" free tier. If you send 1000 emails/mo you"ll pay 1$/mo.

                Prefer to use Resend? Here's an excellent tutorial made by our top community member, Bill.</div>

            <CopyBlock
                language={'sql'}
                text={`create table public.leads (
                    id uuid default gen_random_uuid(),
                    email text,
                    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
                  
                    primary key (id)
                  );
                  
                  alter table public.leads enable row level security;
                  `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />

            <div className="docs-content">Go to the new profiles table and add 2 RLS policies:
                - Enable read access for authenticated users only
                - Enable insert access for authenticated users only</div>

            <div className="relative w-full h-[250px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png')" }}>
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    <h1 className="text-white text-2xl font-bold">Your Text Here</h1>
                </div>
            </div>

            <div className="docs-content">
                (Optional )If you want to collect leads with ButtonLead, create a new table called leads and add a RLS policy with insert access for anyone:
            </div>

            <CopyBlock
                language={'sql'}
                text={`create table public.leads (
                    id uuid default gen_random_uuid(),
                    email text,
                    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
                  
                    primary key (id)
                  );
                  
                  alter table public.leads enable row level security;
                  `}
                showLineNumbers
                theme={dracula}
                codeBlock
            />
        </div>
    )

}