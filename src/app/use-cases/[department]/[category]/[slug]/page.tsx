import SharedHeroSection from "@/components/shared/shared-hero-section";
import ContentSection from "@/components/use-cases/content-section";
import ToolCard from "@/components/use-cases/tool-card";
import FAQSection from "@/components/use-cases/faq-section";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { automatedAccountsPayableContent } from "@/data/use-cases/automated-accounts-payable";
import  BenefitsSection  from '@/components/use-cases/sections/benefits-section'
import  EvaluatingROISection  from '@/components/use-cases/sections/evaluating-roi-section'
import  FAQSectionUseCases  from '@/components/use-cases/sections/faq-section-use-cases'
import  FutureTrendsSection  from '@/components/use-cases/sections/future-trends-section'
import  ImplementationSection  from '@/components/use-cases/sections/implementation-section'
import  IntroductionSection  from '@/components/use-cases/sections/introduction-section'
import  OverviewSection  from '@/components/use-cases/sections/overview-section'
import  ToolsSection  from '@/components/use-cases/sections/tools-section'

export default async function Page({
  params,
}: {
  params: Promise<{ department: string; category: string; slug: string }>;
}) {
  // TODO: Map slug to content dynamically
  const content = automatedAccountsPayableContent;

  return (
    <>
      <Navbar />
      <SharedHeroSection
        title={content.title}
        summary={content.heroSummary}
        image={content.image}
      />
      <OverviewSection />
      <IntroductionSection/>


      {content.tools && content.tools.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-4xl font-bold mb-8">Top AI Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.tools.map((tool, idx) => (
                <ToolCard key={idx} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {content.faq && content.faq.length > 0 && (
        <FAQSection items={content.faq} />
      )}
      <Footer />
    </>
  );
}
