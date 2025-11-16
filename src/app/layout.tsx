import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tyler Sargent",
    template: "%s | Tyler Sargent",
  },
  description: "Personal website of Tyler Sargent",
  keywords: ["Tyler Sargent", "Developer", "Engineer"],
  authors: [{ name: "Tyler Sargent" }],
  creator: "Tyler Sargent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tylersargent.dev",
    title: "Tyler Sargent",
    description: "Personal website of Tyler Sargent",
    siteName: "Tyler Sargent",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Sargent",
    description: "Personal website of Tyler Sargent",
  },
  metadataBase: new URL("https://tylersargent.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
