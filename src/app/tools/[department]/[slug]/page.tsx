import SharedHeroSection from "@/components/shared/shared-hero-section";
import ContentSection from "@/components/use-cases/content-section";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { getToolContent } from "@/lib/tools-mapper";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ department: string; slug: string }>;
}) {
  const { slug } = await params;
  const content = getToolContent(slug);

  if (!content) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <SharedHeroSection
        title={content.title}
        summary={content.heroSummary}
        image={content.image}
      />

      {content.sections.map((section, idx) => (
        <ContentSection
          key={idx}
          section={{
            title: section.title,
            description: section.description,
            subsections: section.subsections,
          }}
        />
      ))}
      <Footer />
    </>
  );
}
