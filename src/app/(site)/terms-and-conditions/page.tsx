import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import AgreementSection from "@/components/terms-and-conditions/agreement-section";
import NotAdviceSection from "@/components/terms-and-conditions/not-advice-section";
import ToolsAndLinksSection from "@/components/terms-and-conditions/tools-and-links-section";
import ConsultationsSection from "@/components/terms-and-conditions/consultations-section";
import UsingTheSiteSection from "@/components/terms-and-conditions/using-the-site-section";
import LiabilitySection from "@/components/terms-and-conditions/liability-section";
import GoverningLawSection from "@/components/terms-and-conditions/governing-law-section";
import ContactSection from "@/components/terms-and-conditions/contact-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const TITLE = "Terms of Service";
const DESCRIPTION =
    "The terms that govern your use of the Geek at Your Spot website, our free consultations, and the information we publish.";
const CANONICAL = "/terms-and-conditions";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        robots: { index: true, follow: true },
    };
};

export default async function Page() {
    const heroSummary =
        "These terms explain how you may use this site, what our guides can and cannot do for you, and how consultations and paid work are handled.";
    return (
        <>
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <AgreementSection />
                <NotAdviceSection />
                <ToolsAndLinksSection />
                <ConsultationsSection />
                <UsingTheSiteSection />
                <LiabilitySection />
                <GoverningLawSection />
                <ContactSection />
                <SchedulerShell />
            </article>
        </>
    );
}
