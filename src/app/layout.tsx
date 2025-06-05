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


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gupta Switchgears: acb,mccb dealer",
  description: "Find MCCBs, ACBs, electric panels & automation " +
      "products from L&T, Polycab, Siemens at Gupta Associates. " +
      "Get expert electric servicing & fast delivery!",
  icons:"/favicon.ico",
  twitter: {
    images: "/logoOG.jpeg",
    title: "Gupta Switchgears: acb,mccb dealer",
    card: "summary_large_image",
  },
  openGraph: {
    images: "/src/app/opengraph-image.jpg",
    title: "Gupta Switchgears: acb,mccb Dealer",
    description: "Find MCCBs, ACBs, electric panels & automation " +
      "products from L&T, Polycab, Siemens at Gupta Associates. " +
      "Get expert electric servicing & fast delivery!",
    url: "https://guptaswitchgears.com",
    type: "website",
  },
  alternates: {
    canonical: "https://guptaswitchgears.com",
  },
  robots: {
    index: true, //
    follow: true,}
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

            <GlobalProvider>
              <Navbar />
              <CategoryBarServer />
              <ToastProvider />
              {children}
              <Footer />
            </GlobalProvider>

        </div >
      </body >
    </html >
  );
}
