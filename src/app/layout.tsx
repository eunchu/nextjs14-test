import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ogImage from "./openGraph-img.jpeg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Title",
  description: "Description of the app",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://nextjs14-test-nine.vercel.app/",
    images: {
      url: ogImage.src,
      width: ogImage.width,
      height: ogImage.height,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "/favicon.ico",
      url: "/favicon.ico",
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
