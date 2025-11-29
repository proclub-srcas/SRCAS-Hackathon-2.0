import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import InteractiveBackground from "@/components/dotbg";
import ClientLayout from "@/components/ClientLayout";

import localFont from "next/font/local";

export const metadata = {
  title: "SRCAS Hackathon 2.0",
  description: "A thrilling 24-hour coding marathon where teams collaborate, innovate, and build amazing solutions from scratch. Registration is now open!",
  keywords: "SRCAS, Hackathon, SRCAS Hackathon, Coding, Innovation, Technology",
  openGraph: {
    title: "SRCAS Hackathon 2.0",
    description: "Expected Outcome: ... A thrilling 24-hour coding marathon where teams collaborate, innovate, and build amazing solutions from scratch. ... Registration is now open!",
    url: "https://srcashackathon.web.app",
    images: "/favicon.ico",
    siteName: "SRCAS Hackathon 2.0",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Bold.otf",
      weight: "bold",
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Gotham-Black.otf",
      weight: "900",
    },
    {
      path: "../public/fonts/Gotham-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Gotham-Book.otf",
      weight: "normal",
    },
  ],
  variable: "--font-gotham",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotham.variable} font-sans`}>
      <body>
        <InteractiveBackground>
          <ClientLayout />
          {children}
          <Footer />
          <Toaster />
        </InteractiveBackground>
      </body>
    </html>
  );
}
