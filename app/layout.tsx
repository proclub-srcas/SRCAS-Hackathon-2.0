import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import InteractiveBackground from "@/components/dotbg";
import ClientLayout from "@/components/ClientLayout";

import localFont from "next/font/local";


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
