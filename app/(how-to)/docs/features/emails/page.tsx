import Link from "next/link";

export default function Emails() {
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
                        <Link href="/docs/features/emails" className="mb-8">Emails</Link>
                    </li>
                </div>
            </ul>
            <div className="docs-content">You don't have to use Mailgun, but you'll need an email tool to to setup magic login links, abandoned carts emails, etc...</div>

            <div className="docs-hint">Mailgun silently removed their "pay-as-you-go" flex tier from their pricing page, but it's still there. Start a free trial for the 35$ tier, then cancel it. You'll be downgraded to the "pay as you go" free tier. If you send 1000 emails/mo you"ll pay 1$/mo.

                Prefer to use Resend? Here's an excellent tutorial made by our top community member, Bill.</div>


                <div className="docs-title flex flex-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Setup
            </div>

            <div className="docs-content">Create a new account on <Link href="https://www.mailgun.com/" className="link link-primary">Mailgun</Link></div>

            <div className="docs-content">In [Sending] click [Domains] then [Add New Domain]. It's recommended to add a subdomain like mail.yourdomain.com. </div>

            <div className="docs-hint"> If you pick the EU region, add the URL below to the Mailgun client setup in libs/mailgun.js right under username: "api":

                url: "https://api.eu.mailgun.net/"</div>

            <div className="docs-content">Do all the DNS verification steps. If you use a subdomain, make sure it's reflected in your DNS records</div>

            <div className="docs-content">Add extra DMARC for better deliverability: TXT | _dmarc.mail.yourdomain.com | v=DMARC1; p=none</div>

            <div className="docs-content">Go to [Domain Settings] then [SMTP Credentials] then [Reset Passsword], choose [Automatic] and then [Create Password]</div>

            <div className="docs-content">Click [Copy] at the bottom right of the modal. In .env.local, set EMAIL_SERVER to:
                smtp://postmaster@[mail.yourdomain.com]:[copied_password]@smtp.mailgun.org:587 (without the brackets)</div>

            <div className="docs-content">In [Sending API Keys] click [Create sending key] and add it to .env.local as MAILGUN_API_KEY</div>

            <div className="docs-content">(skip if do not need to receive emails) In [Receiving] click [Create Route].
                Select [Match Recipient] and add the email you want to send from. (i.e. name@mail.yourdomain.com). Make sure to match the email you set up at mailgun.supportEmail in the config.js file.
                Forward to https://[your-domain].com/api/webhook/mailgun. Click [Create Route].
                Then add your receiving email (I use my gmail for instance) in mailgun.forwardREpliesTo in config.js.</div>

            <div className="docs-hint">
                Check your records are valid on MxToolbox (enter your subdomain if you used one)
            </div>

            <div className="docs-divider"></div>

            <div className="docs-title">Sending emails</div>

            <div className="docs-content">There are 2 ways to send emails:</div>

            <div className="docs-content">1/ SMTP: Emails sent for magic login links will be sent using SMTP, for instance.</div>

            <div className="docs-content">2/ Mailgun API: To send any other emails, use the sendEmail() function in libs/mailgun.js.</div>

            <div className="docs-title">Receiving emails</div>

            <div className="docs-content">Mailgun doesn't forward emails automatically, nor store them.</div>

            <div className="docs-content">So we created a route that match emails sent to our support email (mailgun.supportEmail in config.js) and forward them to our API (your-domain.com/api/webhook/mailgun) which forwards them to our forwardRepliesTo email in config.js.</div>

            <div className="docs-content">It automatically adds the sender in reply-to so you can reply directly from your inbox.</div>

            <div className="relative w-full h-[250px]  mx-auto bg-cover bg-center bg-no-repeat rounded-lg border-[2px] border-dashed border-gray-300" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png')" }}>
                <div className="absolute inset-0 bg-base-100 opacity-60 rounded-lg"></div>
                <div className="relative p-6 flex items-center justify-center h-full">
                    <h1 className="text-white text-2xl font-bold">Your Text Here</h1>
                </div>
            </div>

        </div>
    )

}