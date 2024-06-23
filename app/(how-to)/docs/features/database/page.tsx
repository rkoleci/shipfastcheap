'use client'
import Image from "next/image";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";
import shipfastAvatar from '../../../../../public/shipfast_avatar.webp'
import shipfastAvatar2 from '../../../../../public/shipfast_avatar_2.webp'

export default function Database() {
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
                        <Link href="/docs/features/database" className="mb-8">Database</Link>
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

            <div className="docs-content mt-4">Go to the new profiles table and add 2 RLS policies:
                - Enable read access for authenticated users only
                - Enable insert access for authenticated users only</div>


            <div className="docs-content mt-4">
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