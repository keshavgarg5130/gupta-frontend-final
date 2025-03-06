import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./ui/Footer";
import { Inter } from "next/font/google";
import CategoryBar from "./ui/CategoryBar";
import { GlobalProvider } from "@/app/GlobalProvider";
import ToastProvider from "@/app/providers/toast-provider";
import CategoryBarServer from "./ui/CategoryBarServer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "\n" +
      "Buy Electrical Switchgears & Panels | MCB, MCCB, ACB Distributor | Gupta Switchgears",
  description: "Gupta Switchgears is a trusted distributor of MCB, MCCB," +
      " ACB, and other electrical switchgear products of top brands like L&K, Polycab , Seimens & Havells. We also manufacture " +
      "top-quality electrical panels and provide expe" +
      "rt electrical servicing. Contact Gupta switchgear for reliable electrical solutions.",
  icons:"/favicon.ico",
  twitter: {
    images: "/logoOG.jpeg",
    title: "Buy Electrical Switchgears & Panels | MCB, MCCB, ACB Distributor | Gupta Switchgears",
    card: "summary_large_image",
  },
  openGraph: {
    images: "/src/app/opengraph-image.png",
    title: "Buy Electrical Switchgears & Panels | MCB, MCCB, ACB Distributor | Gupta Switchgear",
    description: "Find MCCBs, ACBs, electric panels & automation " +
      "products from L&T, Polycab, Siemens at Gupta Associates. " +
      "Get expert electric servicing & fast delivery!",
    url: "https://guptaassociates.com",
    type: "website",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png+xml" sizes="90x90" href="/logoOG.jpeg" />
      </head>
      <body className="overflow-x-hidden">
        <div>
          <ClerkProvider>
            <GlobalProvider>
              <Navbar />
              <CategoryBarServer />
              <ToastProvider />
              {children}
              <Footer />
            </GlobalProvider>
          </ClerkProvider>
        </div >
      </body >
    </html >
  );
}
