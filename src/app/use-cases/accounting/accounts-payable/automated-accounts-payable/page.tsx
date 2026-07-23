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

export default async function Page(){
    const title = "Automated Accounts Payable";
    const heroSummary = "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy."
    const heroImage =""; 
    return (
        <>
        <SharedHeroSection
            title={title}
            summary={heroSummary}
            image={heroImage} />

        
        <OverviewSection />
        <IntroductionSection/>



        </>
    );
}