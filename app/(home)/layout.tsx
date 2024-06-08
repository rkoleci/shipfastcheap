import { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google'
import Footer from '@/components/ui/Footer';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense, useState } from 'react';
import { getURL } from '@/utils/helpers';
import UserProvider from '@/components/context/UserProvider';
import SupabaseClientProvider from '@/components/context/SupabaseClient';
import '../../globals.css'
import Navbar from '@/components/ui/Navbar';
import PlausibleProvider from 'next-plausible'
import getSeoTags from '@utils/config'

const seoTags = getSeoTags()

const meta = {
  title: seoTags.title,
  description: seoTags.appDescription,
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: getURL(),
  canonicalUrlRelative: '/'
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
    authors: [{ name: 'Vercel', url: 'https://vercel.com/' }],
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
    },
    alternates: {
      canonical: meta.canonicalUrlRelative
    }
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {

  return (
    <html lang="en" data-theme="shipfast">
      <head>
        <PlausibleProvider domain="yourdomain.com" />
      </head>
      <link rel="canonical" href={`https://www.shipfast.com${meta.canonicalUrlRelative}`} />
      <body>
        <SupabaseClientProvider>
          <UserProvider>
            <Navbar />
            <main
              id="skip"
              className={`min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)] ${font.className}`}
            >
              {children}
            </main>
            <Suspense>
              <Toaster />
            </Suspense>
          </UserProvider>
        </SupabaseClientProvider>
      </body>
    </html>
  );
}
