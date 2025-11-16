import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {try {const stored = localStorage.getItem('theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const theme = stored || (prefersDark ? 'dark' : 'light'); document.documentElement.classList.add(theme);} catch(_) {}})();`,
          }}
        />
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0a0a0a"
          media="(prefers-color-scheme: dark)"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tyler Sargent",
              url: "https://tylersargent.dev",
              sameAs: [
                "https://github.com/tsargent",
                "https://www.linkedin.com/in/tylersargent",
              ],
              jobTitle: "Staff Software Engineer",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
