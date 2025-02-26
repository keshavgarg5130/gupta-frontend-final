//import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./ui/Footer";
import CategoryBar from "./ui/CategoryBar";
import { GlobalProvider } from "@/app/GlobalProvider";
import ToastProvider from "@/app/providers/toast-provider";
import CategoryBarServer from "./ui/CategoryBarServer";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from 'next'
import Header from "@/components/header";

export const metadata: Metadata = {
  title: {
    template: '%s | Gupta Switchgears',
    default: 'Gupta Switchgears - Premium Electrical Components & Panels'
  },
  description: 'Leading supplier of electrical components, switchgears, panels, and industrial solutions. Browse our wide range of ACB, MCB, MCCB, RCCB, and electrical panels.',
  keywords: 'electrical components, switchgears, electrical panels, ACB, MCB, MCCB, RCCB, industrial electrical solutions',
  robots: 'index, follow',
  openGraph: {
    title: 'Gupta Switchgears',
    description: 'Premium Electrical Components & Industrial Solutions',
    url: 'https://guptaswitchgears.com',
    siteName: 'Gupta Switchgears',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
}
import SchemaOrg from './components/SchemaOrg'
import CanonicalUrl from './components/CanonicalUrl'
import SocialMeta from './components/SocialMeta'

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { path: string }
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png+xml" sizes="90x90" href="/logo.png" />
        <CanonicalUrl path={params.path} />
        <SocialMeta
          title="Gupta Switchgears"
          description="Premium Electrical Components & Solutions"
          image="/og-image.jpg"
        />
        <SchemaOrg />
      </head>
      <body className="overflow-x-hidden">
        <div>
          <ClerkProvider>
            <GlobalProvider>
              <Header />

              <ToastProvider />
              {children}
              <Footer />
            </GlobalProvider>
          </ClerkProvider>
        </div>
      </body>
    </html>
  );
}