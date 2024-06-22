// app/layout.js
import Link from 'next/link';
import '../../globals.css'
import { getURL } from '@/utils/helpers';
import { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google'
import getSEOTags from '@/utils/seo';
import Sidebar from '@/components/ui/dashboard/Sidebar';

const seoTags = getSEOTags()

const meta = {
  title: `${seoTags.appName} Docs`,
  description: `It is where you configure your app. Each key is documented to know how and why it's used. Have a thorough look at it: it is the backbone of the app.`,
  cardImage: '/hero.webp',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: getURL()
};

const font = Bricolage_Grotesque({
  subsets: ['latin'],
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Vercel', 'Supabase', 'Next.js', 'Stripe', 'Subscription'],
    authors: [{ name: 'Rei Koleci', url: 'https://github.com/rkoleci' }],
    creator: 'Vercel',
    publisher: 'Vercel',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Vercel',
      creator: '@Vercel',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" data-theme="shipfast">
      <body className={`flex justify-start ${font.className}`}>

        <div className="drawer lg:hidden">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col overflow-y-scroll">
            {/* Navbar */}
            <div className="w-full navbar bg-base-300">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2">Docs</div>
            </div>
            {/* Page content here */}
            <div className='p-8'>{children}</div>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <Sidebar classes=' lg:hidden' />
          </div>
        </div>

        <Sidebar classes='hidden lg:block' />

        <div className='hidden lg:block overflow-y-auto ml-64 p-8 md:p-12 w-full'>
          {children}
        </div>

      </body>
    </html>
  );
}
