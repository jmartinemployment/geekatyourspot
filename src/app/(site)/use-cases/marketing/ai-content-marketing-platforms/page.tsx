import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/lede-section";
import FourJobsSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/four-jobs-section";
import ContentPlanningSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/content-planning-section";
import ContentGenerationSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/content-generation-section";
import EmailCampaignsSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/email-campaigns-section";
import LeadScoringSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/lead-scoring-section";
import ChoosingSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/choosing-section";
import PaaSection from "@/components/use-cases/marketing/marketing-automation-platforms/ai-marketing-automation-platforms/paa-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "AI Marketing Automation Platforms";
const DESCRIPTION =
    "Marketing Automation Platforms (MAP) tie content planning, content generation, personalized email, and lead scoring to one set of contact records. See how the four jobs fit together and which tools a South Florida small business should weigh.";
const CANONICAL = "/use-cases/marketing/ai-content-marketing-platforms";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": TITLE,
            "description": DESCRIPTION,
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-08-18T11:42:58.9278075Z",
            "dateModified": "2026-10-26T00:00:00.0000000Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Marketing Automation Platforms, MAP for small businesses, AI marketing automation, AI content planning, AI content generation, personalized email campaigns, lead enrichment and predictive scoring, Miami-Dade marketing automation, Broward marketing automation, Palm Beach marketing automation",
            "hasPart": [
                { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-content-planning" },
                { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" },
                { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" },
                { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring" }
            ],
            "mentions": [
                { "@type": "Thing", "name": "Semrush", "url": "https://www.semrush.com/" },
                { "@type": "Thing", "name": "MarketMuse", "url": "https://www.marketmuse.com/" },
                { "@type": "Thing", "name": "Scalenut", "url": "https://www.scalenut.com/" },
                { "@type": "Thing", "name": "HyperWrite", "url": "https://www.hyperwriteai.com/" },
                { "@type": "Thing", "name": "Hootsuite", "url": "https://www.hootsuite.com/" },
                { "@type": "Thing", "name": "Jasper", "url": "https://www.jasper.ai/" },
                { "@type": "Thing", "name": "Copy.ai", "url": "https://www.copy.ai/" },
                { "@type": "Thing", "name": "Writesonic", "url": "https://writesonic.com/" },
                { "@type": "Thing", "name": "Anyword", "url": "https://www.anyword.com/" },
                { "@type": "Thing", "name": "Rytr", "url": "https://rytr.me/" },
                { "@type": "Thing", "name": "Koala", "url": "https://koala.sh/" },
                { "@type": "Thing", "name": "Frase", "url": "https://www.frase.io/" },
                { "@type": "Thing", "name": "Castmagic", "url": "https://www.castmagic.io/" },
                { "@type": "Thing", "name": "ImagineArt", "url": "https://www.imagine.art/" },
                { "@type": "Thing", "name": "GetResponse", "url": "https://www.getresponse.com/" },
                { "@type": "Thing", "name": "Mailchimp", "url": "https://mailchimp.com/" },
                { "@type": "Thing", "name": "MailerLite", "url": "https://www.mailerlite.com/" },
                { "@type": "Thing", "name": "Moosend", "url": "https://moosend.com/" },
                { "@type": "Thing", "name": "ActiveCampaign", "url": "https://www.activecampaign.com/" },
                { "@type": "Thing", "name": "Brevo", "url": "https://www.brevo.com/" },
                { "@type": "Thing", "name": "Apollo", "url": "https://www.apollo.io/" },
                { "@type": "Thing", "name": "Lusha", "url": "https://www.lusha.com/" },
                { "@type": "Thing", "name": "Leadfeeder", "url": "https://www.leadfeeder.com/" },
                { "@type": "Thing", "name": "Snitcher", "url": "https://www.snitcher.com/" },
                { "@type": "Thing", "name": "Factors", "url": "https://www.factors.ai/" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is the difference between marketing automation and email marketing?", "acceptedAnswer": {"@type": "Answer", "text": "Email marketing is one channel. A marketing automation platform runs the content plan, the drafts, the email sends, and the lead scores from one set of contact records, so each job can use what the others learn. The line blurs because email tools such as Mailchimp, GetResponse, ActiveCampaign, and Brevo grow into platforms once they add automation rules, a contact list that carries scores, and connections to a CRM."}},
                {"@type": "Question", "name": "What is a marketing automation platform?", "acceptedAnswer": {"@type": "Answer", "text": "A marketing automation platform is software that automates, streamlines, and measures repetitive marketing work such as multi-channel campaigns and customer workflows. For a small business it means the content plan, the drafts, the email sends, and the lead list all work from one set of contact records, so each job can use what the others learn."}},
                {"@type": "Question", "name": "Which of the four jobs should a small business start with?", "acceptedAnswer": {"@type": "Answer", "text": "Start with content planning. It costs the least, needs the least data, and produces the calendar and briefs the other three jobs depend on. Email is usually the first job to show a measurable result, because it works from contacts you already have. Lead scoring comes last, because a score needs email and website activity to score."}},
                {"@type": "Question", "name": "Do I need one platform or several tools?", "acceptedAnswer": {"@type": "Answer", "text": "Either can work. One platform is simpler and cheaper to start, and ActiveCampaign, GetResponse, and Mailchimp each cover email, basic automation, and a contact list that can carry scores. Several specialist tools do each job better but need integrations that move contact fields both ways, and someone has to own those. The deciding factors are your contact count, what your CRM holds, and who approves sends."}},
                {"@type": "Question", "name": "Where does AI actually do the work in a marketing automation platform?", "acceptedAnswer": {"@type": "Answer", "text": "In three places. It drafts the content a rule will send, it suggests when to send and to whom from past behavior, and it ranks leads by how likely they are to buy. A person still sets the rules, approves the drafts, and decides what a score is worth. Nothing on these pages recommends publishing or sending anything a person has not reviewed."}},
                {"@type": "Question", "name": "What does the platform need from my CRM?", "acceptedAnswer": {"@type": "Answer", "text": "Filled-in fields. Personalization can only use what a record holds, and a score can only rank activity the platform can see. A list with names and addresses and nothing else supports a newsletter and not much more. Our assessment reads the CRM export field by field before recommending a tool, and says plainly what the data can and cannot support."}},
                {"@type": "Question", "name": "Can a marketing automation platform work with the CRM I already use?", "acceptedAnswer": {"@type": "Answer", "text": "It can when the connection moves contact fields both ways, so a page visit or an email click reaches the CRM and a purchase or a closed deal reaches the platform. That two-way flow is the first thing our assessment tests, because a connection that only pushes contacts one way leaves the platform scoring on stale data. Some all-in-one platforms carry their own CRM instead, which is simpler to run and worth weighing against the CRM you have."}},
                {"@type": "Question", "name": "How much does a marketing automation platform cost for a small business?", "acceptedAnswer": {"@type": "Answer", "text": "Every platform on these pages prices on the number of contacts and the tier of features, and several have free plans to start on. The all-in-one tiers climb quickly as a list grows, and the specialist tools add their own subscriptions. A real figure comes only after reading your contact count and the features you will actually use, which is why the assessment comes before any quote."}},
                {"@type": "Question", "name": "Will the platform write and send emails without anyone checking them?", "acceptedAnswer": {"@type": "Answer", "text": "Not on any setup we build. A model drafts the content a rule will send, and a person reads it before it goes anywhere, with the review step set up as a real gate in the platform rather than a checkbox. The rules that decide who gets what and when are set by a person too. Automation removes the manual sending and the forgotten follow-ups, not the judgment about what your business says."}},
                {"@type": "Question", "name": "Where do the leads a platform scores come from?", "acceptedAnswer": {"@type": "Answer", "text": "From the contacts you already hold, the forms on your site, and the companies that tools such as Leadfeeder and Snitcher identify behind anonymous website visits. Enrichment fills in company, role, and size for each of them, and the score ranks them by the pages they read, the emails they opened, and what the enrichment says about their business. A score built on a form submission alone is a guess with a number on it."}},
                {"@type": "Question", "name": "How are the tools on this site chosen and reviewed?", "acceptedAnswer": {"@type": "Answer", "text": "They are the tools a South Florida small business is most likely to be quoted for in each of the four jobs. Each review checks the vendor's own claims against what the product does at the plan that business would buy, and says where the claim stops applying. The reviews are not rankings and the site does not sell any of the tools."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Marketing Automation Platforms", "MAP for small businesses", "AI marketing automation", "AI content planning", "AI content generation", "personalized email campaigns", "lead enrichment and predictive scoring", "Miami-Dade marketing automation", "Broward marketing automation", "Palm Beach marketing automation"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: CANONICAL,
        },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const heroSummary = "One set of contact records, four jobs: plan the content, write it, send the right email, and score the leads it brings in.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection
                title={TITLE}
                summary={heroSummary}
                image=""
                imgAlt="" />
            <article>
                <LedeSection />
                <FourJobsSection />
                <ContentPlanningSection />
                <ContentGenerationSection />
                <EmailCampaignsSection />
                <LeadScoringSection />
                <ChoosingSection />
                <PaaSection />
                <SchedulerShell />
            </article>
        </>
    );
}
