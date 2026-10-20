import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import WhoWeAreSection from "@/components/privacy-policy/who-we-are-section";
import InformationWeCollectSection from "@/components/privacy-policy/information-we-collect-section";
import CookiesSection from "@/components/privacy-policy/cookies-section";
import HowWeUseSection from "@/components/privacy-policy/how-we-use-section";
import WhoWeShareWithSection from "@/components/privacy-policy/who-we-share-with-section";
import RetentionSecuritySection from "@/components/privacy-policy/retention-security-section";
import YourRightsSection from "@/components/privacy-policy/your-rights-section";
import ContactSection from "@/components/privacy-policy/contact-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Privacy Policy";
const DESCRIPTION =
    "How Geek @ Your Spot LLC collects, uses, shares, and protects the information you give us when you visit our site or book a consultation.";
const CANONICAL = "/privacy-policy";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        robots: { index: true, follow: true },
    };
};

export default async function Page() {
    const heroSummary =
        "We collect only what we need to book your consultation and improve this site. This policy explains what that is, who helps us handle it, and how you stay in control of it.";
    return (
        <>
            <SharedHeroSection title={TITLE} summary={heroSummary} image="" imgAlt="" />
            <article>
                <WhoWeAreSection />
                <InformationWeCollectSection />
                <CookiesSection />
                <HowWeUseSection />
                <WhoWeShareWithSection />
                <RetentionSecuritySection />
                <YourRightsSection />
                <ContactSection />
                <SchedulerShell />
            </article>
        </>
    );
}
