import type { Metadata } from "next";
import Script from "next/script";
import { Figtree, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleTagManager } from '@next/third-parties/google'
import { VisitorPulse } from "@/components/analytics/visitor-pulse";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://geekatyourspot.com"),
  title: {
    default: "Geek @ Your Spot LLC | AI Consultancy for South Florida Business",
    template: "%s | Geek @ Your Spot LLC",
  },
  description:
    "Ready to put AI to work? Geek @ Your Spot LLC implementing practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.",
  verification: {
    google: "_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI",
  },
  openGraph: {
    title: "AI Consultancy for South Florida Business | Geek @ Your Spot LLC",
    description:
      "Ready to put AI to work? Geek @ Your Spot LLC implementing practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.",
    url: "https://geekatyourspot.com",
    siteName: "Geek @ Your Spot LLC",
    images: [SHARE_IMAGE],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultancy for South Florida Business | Geek @ Your Spot LLC",
    description:
      "Ready to put AI to work? Geek @ Your Spot LLC implementing practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.",
    images: [SHARE_IMAGE],
  },
  category: "technology",
  icons: {
    icon: { url: "/favicon.gif", type: "image/gif" },
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full w-full antialiased font-sans",
        figtree.variable,
        sora.variable,
      )} >
      <body className="flex min-h-full flex-col">
        {children}
        <GoogleTagManager gtmId="GTM-K5CXSQRP" />
        <VisitorPulse />
      </body>
    </html>
  );
}
