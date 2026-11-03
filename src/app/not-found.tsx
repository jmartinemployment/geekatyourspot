import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import NotFoundHero from "@/components/shared/not-found-hero";

/**
 * Next adds the noindex tag to every 404 response. The page sets no robots of its own; the site
 * layout's index, follow belongs to the pages that exist.
 */
export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you asked for does not exist on geekatyourspot.com.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <NotFoundHero />
      </main>
      <Footer />
    </>
  );
}
