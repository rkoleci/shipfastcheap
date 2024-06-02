import { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google'
import Footer from '@/components/ui/Footer';
import Navbar from '@/app/(home)/landing/components/Navbar';
import { Toaster } from '@/components/ui/Toasts/toaster';
import { PropsWithChildren, Suspense, useState } from 'react';
import { getURL } from '@/utils/helpers';
import UserProvider from '@/components/context/UserProvider';
import SupabaseClientProvider from '@/components/context/SupabaseClient';
import NameForm from '@/components/ui/AccountForms/NameForm';
import '../../globals.css'
const meta = {
  title: 'Next.js Subscription Starter',
  description: 'Brought to you by Vercel, Stripe, and Supabase.',
  cardImage: '/og.png',
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
    }
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  
  return (
    <html lang="en" data-theme="shipfast"> 
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
