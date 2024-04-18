import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ogImage from "../../public/preview.jpg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Title",
  description: "Description of the app",
  authors: [{ name: "eunju" }],
  referrer: "origin-when-cross-origin",
  creator: "eunju",
  publisher: "eunju",
  openGraph: {
    title: "App Title",
    description: "Description of the app",
    type: "website",
    locale: "ko_KR",
    url: "https://nextjs14-test-nine.vercel.app",
    images: {
      // url: "/openGraph-img.jpeg",
      // url: "/preview.jpg",
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
    },
  },
  twitter: {
    title: "App Title",
    description: "Description of the app",
    images: {
      // url: "/openGraph-img.jpeg",
      // url: "/preview.jpg",
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nextjs14-test-nine.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "/favicon.ico",
      url: "/favicon.ico",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
