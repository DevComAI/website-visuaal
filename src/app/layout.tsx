import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConditionalDecorativeElements from '@/components/ui/ConditionalDecorativeElements';


export const metadata: Metadata = {
  title: {
    default: "Visuaal - Agence Digitale Créative",
    template: "%s | Visuaal"
  },
  description: "Agence digitale spécialisée dans la création de sites web, le design UX/UI et le marketing digital. Transformez votre vision en réalité digitale avec Visuaal.",
  keywords: ["agence digitale", "création site web", "design UX/UI", "marketing digital", "développement web", "identité visuelle"],
  authors: [{ name: "Visuaal" }],
  creator: "Visuaal",
  publisher: "Visuaal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://visuaal.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: "Visuaal - Agence Digitale Créative",
    description: "Agence digitale spécialisée dans la création de sites web, le design UX/UI et le marketing digital.",
    siteName: 'Visuaal',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Visuaal - Agence Digitale Créative",
    description: "Agence digitale spécialisée dans la création de sites web, le design UX/UI et le marketing digital.",
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
  verification: {
    google: 'your-google-site-verification',
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
    <html lang="fr">
      <body
        className="antialiased font-sans relative"
      >
        <ConditionalDecorativeElements />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
