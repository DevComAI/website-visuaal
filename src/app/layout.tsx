import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConditionalDecorativeElements from '@/components/ui/ConditionalDecorativeElements';
import ServiceWorkerProvider from '@/components/providers/ServiceWorkerProvider';
import { PageReadyProvider } from '@/components/providers/PageReadyProvider';


export const metadata: Metadata = {
  title: {
    default: "Visuaal - Digital Signage & Visual Solutions",
    template: "%s | Visuaal"
  },
  description: "Leading provider of innovative digital signage solutions including DOOH advertising, LED screens, and holographic displays. Transform your brand with cutting-edge visual technology.",
  keywords: ["digital signage", "DOOH", "LED screens", "holographic displays", "visual solutions", "digital advertising", "interactive displays"],
  authors: [{ name: "Visuaal" }],
  creator: "Visuaal",
  publisher: "Visuaal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://visuaal.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: "Visuaal - Digital Signage & Visual Solutions",
    description: "Leading provider of innovative digital signage solutions including DOOH advertising, LED screens, and holographic displays.",
    siteName: 'Visuaal',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Visuaal - Digital Signage & Visual Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Visuaal - Digital Signage & Visual Solutions",
    description: "Leading provider of innovative digital signage solutions including DOOH advertising, LED screens, and holographic displays.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.ico',
    shortcut: '/icon.ico',
    apple: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Spline CDN for faster loading */}
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
      </head>
      <body
        className="antialiased font-sans relative"
      >
        <ServiceWorkerProvider />
        <PageReadyProvider>
          <ConditionalDecorativeElements />
          <Header />
          <main>{children}</main>
          <Footer />
        </PageReadyProvider>
      </body>
    </html>
  );
}
