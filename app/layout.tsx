import type { Metadata } from 'next';
import { Geist, Geist_Mono, Numans, EB_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import SmoothScrolling from './components/animations/SmoothScrolling';
import Head from 'next/head';
import ReduxProvider from './lib/ReduxProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const numans = Numans({
  variable: '--font-numans',
  subsets: ['latin'],
  weight: '400',
});

const eb_Garamond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Treate Coding test',
  description: 'A sleek page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Your Website Title</title>
        <meta
          name="description"
          content="Treate Empowers businesses using the power of blockchain to provide solution to businesses."
        />
        <meta name="keywords" content="Treate, Treate.ng, Treate ng" />
        <meta name="author" content="Falomo Mayowa" />
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="Treate Empowers businesses using the power of blockchain to provide solution to businesses."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsghy4siv/image/upload/v1740200880/Screenshot_449_cnm32q.png"
        />
        <meta
          property="og:url"
          content="https://res.cloudinary.com/dsghy4siv/image/upload/v1740200880/Screenshot_449_cnm32q.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta
          name="twitter:description"
          content="Treate Empowers businesses using the power of blockchain to provide solution to businesses."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dsghy4siv/image/upload/v1740200880/Screenshot_449_cnm32q.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://treate.ng" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${numans.variable} ${eb_Garamond} antialiased`}
      >
        <ReduxProvider>
          <SmoothScrolling>
            <Navbar />
            {children}
          </SmoothScrolling>
        </ReduxProvider>
      </body>
    </html>
  );
}
