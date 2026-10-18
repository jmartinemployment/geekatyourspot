import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { LinkTapToggle } from "@/components/shared/link-tap-toggle";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <LinkTapToggle />
    </>
  );
}
