import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Optmyzr";
const PAGE_TITLE = "Optmyzr for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with Optmyzr links your ad budget to sales, automates waste checks, and helps small businesses in South Florida cut wasted spend fast.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Optmyzr, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.optmyzr.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Will Rule Engine take any actions on my accounts without my approval?", "acceptedAnswer": {"@type": "Answer", "text": "No. The Rule Engine only acts on the instructions you or your team set up. You can choose to let it apply changes automatically for rules you’ve defined, or keep full control by approving each action yourself."}},
                {"@type": "Question", "name": "Can I duplicate my Rule Engine strategies and automate them for multiple accounts?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can easily copy and automate your strategies across several accounts, which saves time and keeps your approach consistent."}},
                {"@type": "Question", "name": "How will I know if Rule Engine has any suggestions for me?", "acceptedAnswer": {"@type": "Answer", "text": "If your strategy is not automated, you’ll need to check for suggestions manually. If you automate it, you can get notifications by email, inside the tool, or through Slack or Teams, so you never miss an update."}},
                {"@type": "Question", "name": "What are the benefits of using Optmyzr’s Rule Engine over Google Ads automated rules/scripts?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr’s Rule Engine gives you more control and flexibility than Google Ads rules or scripts. It’s designed for complex accounts and lets you create custom strategies that fit your business goals. It also scales easily, so you can handle large amounts of data without slowing down."}},
                {"@type": "Question", "name": "How deep can I go with performance breakdowns?", "acceptedAnswer": {"@type": "Answer", "text": "You can break down your results by campaign, ad set, and ad. This helps you see exactly what’s working and what needs improvement."}},
                {"@type": "Question", "name": "Is it possible to compare creative types across campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Optmyzr lets you compare how different creative types perform across your campaigns. This helps you spot trends and focus on formats that deliver the best results."}},
                {"@type": "Question", "name": "Is there a way to see how much we’re spending on each platform?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Optmyzr shows you exactly how your budget is split by platform and campaign. You can see where your money goes and if it’s delivering value."}},
                {"@type": "Question", "name": "Can I analyze both Meta and LinkedIn data in one view?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Optmyzr brings together performance data from Meta and LinkedIn in a single dashboard, so you can compare results and make decisions without switching between tools."}},
                {"@type": "Question", "name": "What if I want to isolate trends over time?", "acceptedAnswer": {"@type": "Answer", "text": "You can use custom time ranges, filters, and visualizations to dig into spikes, drops, or seasonal changes. This helps you connect results to changes in budget, creative, or targeting."}},
                {"@type": "Question", "name": "Can Optmyzr tell me why my Meta campaign performance dropped?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The PPC Investigator tool helps you find the root cause of performance changes in Meta Ads. It shows which metric changed first and how it led to the outcome you see, so you can fix issues without pulling separate reports."}},
                {"@type": "Question", "name": "How to decrease ACoS on Amazon?", "acceptedAnswer": {"@type": "Answer", "text": "Start by checking your search term report. Block terms that spend but don’t convert. Move your best search terms into exact match campaigns for tighter control. Also, make sure your main image and price are competitive, since weak listings hurt conversion rates and push ACoS up."}},
                {"@type": "Question", "name": "What is a good ACoS percentage on Amazon?", "acceptedAnswer": {"@type": "Answer", "text": "A good ACoS depends on your profit margin and goals. As a rule of thumb, your break-even ACoS matches your profit margin. Staying below that means your ads are profitable. If you’re launching a new product, a higher ACoS can be acceptable to build momentum, but track TACoS to see if organic sales are also growing."}},
                {"@type": "Question", "name": "Do you want ACoS to be high or low?", "acceptedAnswer": {"@type": "Answer", "text": "Lower ACoS is better for profitability. But if you focus only on lowering ACoS, you might cut ad spend that helps your product rank. It’s smarter to track TACoS over time. If your organic sales are rising while running ads, the ads are working even if ACoS looks high."}},
                {"@type": "Question", "name": "Why am I getting clicks but no conversions on my Amazon ads?", "acceptedAnswer": {"@type": "Answer", "text": "You might be attracting the wrong audience or your listing isn’t convincing enough. Check your search term report to see if the clicks are from relevant searches. If so, review your listing details like price, main image, and reviews to find where you’re losing buyers."}},
                {"@type": "Question", "name": "What are the common mistakes in Amazon PPC?", "acceptedAnswer": {"@type": "Answer", "text": "Common mistakes include not checking the search term report often enough, waiting too long to add negative keywords, setting bids once and never updating them, mixing auto and manual campaigns without a clear plan, running ads on listings with weak images or few reviews, and focusing only on ACoS instead of the metrics that drive it, like impressions, CTR, clicks, and conversion rate."}},
                {"@type": "Question", "name": "How to optimize an ad group with high spend and low sales?", "acceptedAnswer": {"@type": "Answer", "text": "Don’t just cut bids across the board. First, find out where the problem is. If you have lots of impressions but a low click-through rate, the issue might be relevance."}},
                {"@type": "Question", "name": "Can I set up rules for both Meta and LinkedIn ads?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can create and apply automation rules for Meta and LinkedIn separately. This lets you customize logic for each platform’s unique setup and goals, all from one place."}},
                {"@type": "Question", "name": "Can rules make automatic changes?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You decide if rules should make changes automatically, like pausing ads or adjusting budgets, or if you want to review changes before they go live. This gives you control over how much automation you use."}},
                {"@type": "Question", "name": "Can I apply the same rule across multiple campaigns?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Within Meta or LinkedIn, you can use one rule to update several campaigns, ad sets, or ads at once. This is helpful for saving time and keeping things consistent."}},
                {"@type": "Question", "name": "Can I run rules on a schedule?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. You can schedule rules to run daily, weekly, or at custom times. This keeps your accounts optimized automatically, even outside business hours."}},
                {"@type": "Question", "name": "Can rules be duplicated between Meta and LinkedIn?", "acceptedAnswer": {"@type": "Answer", "text": "You need to set up rules separately for each platform, but you can reuse the same logic. For example, a rule to lower budget when ROAS drops can be built for both Meta and LinkedIn with similar settings."}},
                {"@type": "Question", "name": "What types of actions can rules take?", "acceptedAnswer": {"@type": "Answer", "text": "Rules can pause underperforming ads, change campaign or ad set budgets, modify statuses, and send alerts when certain thresholds are met. You set the logic, so you control how automation works for your business."}},
                {"@type": "Question", "name": "Is there a template library to help me get started?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Optmyzr offers a library of pre-built rule templates for common needs like pausing low-performing ads or adjusting bids. You can use these as they are or tweak them to fit your goals."}},
                {"@type": "Question", "name": "Can Optmyzr replace Adalysis entirely?", "acceptedAnswer": {"@type": "Answer", "text": "For most teams, Optmyzr covers the main needs: account audits, KPI monitoring, budget pacing, and ad copy management. Adalysis is stronger for deep ad testing at scale. If you need multi-platform automation, Amazon or Meta management, or structured reporting, Optmyzr does all of that while Adalysis does not."}},
                {"@type": "Question", "name": "Does Adalysis support Amazon Ads?", "acceptedAnswer": {"@type": "Answer", "text": "No. Adalysis works with Google Ads and Microsoft Ads only. Optmyzr supports Amazon Ads, so you can automate, report, and audit your Amazon campaigns alongside your other channels."}},
                {"@type": "Question", "name": "Both tools have budget management. What’s actually different?", "acceptedAnswer": {"@type": "Answer", "text": "Both tools are strong in budget management. Adalysis offers features like intraday campaign pausing and budget rollover for Google and Microsoft. Optmyzr’s Budget Monitor works across all supported platforms, lets you adjust budgets weekly, monthly, or quarterly, and includes a simulation tool to test changes before they go live. If you manage spend across more than two platforms, Optmyzr’s cross-platform support is the main difference."}},
                {"@type": "Question", "name": "What is the Optmyzr MCP and does Adalysis have anything like it?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr MCP connects AI tools like ChatGPT and Claude to your live account data. You can ask questions, build Rule Engine strategies, and get reports right from your AI interface. Adalysis does not offer this kind of AI-on-data feature."}},
                {"@type": "Question", "name": "Adalysis runs continuous daily audits. Does Optmyzr do the same?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr’s PPC Policy and Audit Tool runs on demand or on a schedule and gives you a scored health report. Ongoing monitoring is handled with Account Alerts for KPIs and budgets. Adalysis’s daily audit engine is more focused on continuous compliance. If you need to catch account drift as soon as it happens, Adalysis is built for that. Optmyzr is better if you want scheduled or on-demand audits with flexible alerting."}},
                {"@type": "Question", "name": "What is Optmyzr?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr is a paid-media management and automation platform. It helps advertisers keep track of campaigns, spot ways to improve, manage bids and budgets, check accounts, and automate reports while keeping control over all changes."}},
                {"@type": "Question", "name": "Who is Optmyzr designed for?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr is built for PPC and digital agencies, freelancers, consultants, in-house marketing teams, and enterprise advertisers. Its tools work for both single accounts and for managing groups of client accounts."}},
                {"@type": "Question", "name": "Which advertising platforms does Optmyzr support?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr supports Google Ads, Microsoft Ads, Amazon Ads, Meta Ads, LinkedIn Ads, and Yahoo! Japan Ads. The homepage also mentions TikTok Ads, but the pricing FAQ does not confirm details, so check with Optmyzr about TikTok features. The tools and level of support can differ by platform."}},
                {"@type": "Question", "name": "What tasks can Optmyzr automate?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr can automate keyword and search-query optimization, bid and budget management, performance alerts, account audits, reporting, and custom optimization rules. Depending on your plan, it also covers Shopping and Performance Max campaign management, feed-based campaign updates, and cross-account workflows."}},
                {"@type": "Question", "name": "What is the Rule Engine?", "acceptedAnswer": {"@type": "Answer", "text": "The Rule Engine lets users set up custom optimization strategies using if/then logic based on campaign metrics. These strategies can find opportunities or run scheduled actions. Automation frequency depends on your plan: Essentials allows weekly or monthly schedules, while Premium adds daily scheduling."}},
                {"@type": "Question", "name": "Does Optmyzr use AI?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. AI features include Sidekick (a natural-language PPC assistant), ad-copy suggestions, performance insights, and AI-generated performance summaries. Its MCP connection also lets tools like Claude and ChatGPT work with Optmyzr account data, with access and features depending on your plan."}},
                {"@type": "Question", "name": "Will Optmyzr change campaigns without my approval?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr says that changes need your approval and only you or authorized users can make them. You can also set up scheduled automation, so your approval includes choosing which rules run automatically."}},
                {"@type": "Question", "name": "Can it help prevent wasted advertising spend?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr offers budget pacing, spend projections, KPI alerts, placement exclusions, search-query analysis, and bid-management tools to help find waste and improve efficiency. These are tools for optimization and monitoring, not a guarantee of a specific advertising result."}},
                {"@type": "Question", "name": "Can Optmyzr explain why campaign performance changed?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Optmyzr’s PPC Investigator uses a Cause Chart and Root Cause Analysis to help users see what drove changes in their campaign metrics. It highlights which campaigns, ad groups, keywords, devices, or networks contributed to the shift."}},
                {"@type": "Question", "name": "How do I get started?", "acceptedAnswer": {"@type": "Answer", "text": "To get started, sign up for Optmyzr, authorize access to your advertising account, and connect it. The company suggests beginning with an account audit, then moving on to the Rule Engine or other optimization tools."}},
                {"@type": "Question", "name": "How much historical data is required?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr requires at least 30 days of historical performance data from your connected account to complete setup. If your account already has enough history, recommendations can be available within minutes. There is no extra warm-up period."}},
                {"@type": "Question", "name": "Is account data updated in real time?", "acceptedAnswer": {"@type": "Answer", "text": "Most data in Optmyzr is retrieved in real time, but some overview pages use cached data. When you approve changes, they are sent to the advertising platforms right away. How quickly those changes go live depends on the platform’s API."}},
                {"@type": "Question", "name": "Can I automate client reporting and use my own branding?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Optmyzr offers white-labeled reports, shareable dashboards, report templates, and automated report delivery. Premium and Enterprise plans add cross-platform and multi-account reporting. Reporting frequency and other features depend on your plan."}},
                {"@type": "Question", "name": "Does Optmyzr integrate with other business tools?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr lists integrations with Slack, Microsoft Teams, Zapier, and Google Sheets. Custom integrations with Salesforce, HubSpot, Shopify, APIs, or other data sources may depend on your plan or need a custom setup."}},
                {"@type": "Question", "name": "How does Optmyzr protect account data?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr uses encryption and two-factor authentication. It states that it does not share personal or account data with advertising platforms for their own marketing. Users keep control over campaign changes. These are the vendor’s published security statements, not an independent assessment."}},
                {"@type": "Question", "name": "How much does Optmyzr cost?", "acceptedAnswer": {"@type": "Answer", "text": "Optmyzr’s pricing page shows a starting price of $209 per month. The actual price depends on your plan, ad spend, and billing cycle. The available plans are Essentials, Premium, and Enterprise. Enterprise pricing is customized."}},
                {"@type": "Question", "name": "What are the main differences between Essentials, Premium, and Enterprise?", "acceptedAnswer": {"@type": "Answer", "text": "Essentials covers up to 25 accounts and includes core optimization tools, audits, budget monitoring, reporting, Rule Engine, and Sidekick. Premium allows unlimited advertising accounts (with fair usage), adds broader Shopping and Performance Max management, cross-account budgets and reports, portfolio-level social tools, and enhanced onboarding. Enterprise includes everything in Premium plus custom integrations, a dedicated account manager, extra training, and enterprise access options like Okta SSO."}},
                {"@type": "Question", "name": "Is there a free trial?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Optmyzr offers a 14-day free trial. No credit card is required to start."}},
                {"@type": "Question", "name": "Are Amazon, Meta, and LinkedIn tools included, or do they require separate subscriptions?", "acceptedAnswer": {"@type": "Answer", "text": "Amazon and social advertising tools for Meta and LinkedIn are included in all Optmyzr plans. Essentials gives you single-account social tools. Premium and Enterprise give you portfolio-level access. Optmyzr also offers a standalone Amazon solution starting at $66 per month."}},
                {"@type": "Question", "name": "Are discounts available?", "acceptedAnswer": {"@type": "Answer", "text": "Annual prepaid subscriptions get a 30% discount compared with monthly billing. Businesses and agencies less than three years old may qualify for a special discount. Nonprofits, including some Google Grants accounts, may get discounted or free subscriptions after an eligibility review."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Optmyzr", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
        authors: [{ name: 'Jeff Martin' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek @ Your Spot LLC' },
    };
};

export default async function Page() {
    const heroSummary =
        "Optmyzr simplifies Ad Spend Optimization for Miami-area small businesses by connecting ad data to real sales and automating waste detection. Get clearer insights and make every dollar count.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
            <OverviewSection />
            <ChallengesSection />
            <TransformsSection />
            <HowItWorksSection />
            <ArchitectureSection />
            <ImplementingSection />
            <DataMappingSection />
            <ConfiguringSection />
            <EvaluatingSection />
            <ComparingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
