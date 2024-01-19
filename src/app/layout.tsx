import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopify App with Next.js",
  description: "Generated by create next app for shopify app store",
};

type RootLayoutProps = {
  children: ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout


