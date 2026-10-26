import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { LinkTapToggle } from "@/components/shared/link-tap-toggle";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SITE_GRAPH } from "@/lib/seo/organization";

/**
 * Robots for every page that exists. It lives here rather than in the root layout so the 404,
 * which renders under the root layout alone, carries only the noindex Next adds to it.
 */
export const metadata: Metadata = {
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
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(SITE_GRAPH) }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <LinkTapToggle />
    </>
  );
}
