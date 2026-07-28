import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono, Figtree, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geekatyourspot.com"),
  title: {
    default: "Geek @ Your Spot | AI Consultancy for South Florida Small Businesses",
    template: "%s | Geek @ Your Spot",
  },
  description:
    "Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.",
  openGraph: {
    title: "AI Consultancy for South Florida Small Businesses | Geek @ Your Spot",
    description:
      "Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.",
    url: "https://www.geekatyourspot.com",
    siteName: "Geek at Your Spot",
    images: [
      {
        url: "https://www.geekatyourspot.com/images/action-figure.jpeg",
        width: 1024,
        height: 1536,
        alt: "Geek at Your Spot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultancy for South Florida Small Businesses | Geek @ Your Spot",
    description:
      "Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.",
    images: ["https://www.geekatyourspot.com/images/action-figure.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        geistSans.variable,
        geistMono.variable,
        figtree.variable,
        sora.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        {/* Google Tag Manager (noscript) — required by GTM install checks; @next/third-parties only injects the head script */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K5CXSQRP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <GoogleTagManager gtmId="GTM-K5CXSQRP" />
      </body>
    </html>
  );
}
