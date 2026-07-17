const SITE_URL = "https://www.geekatyourspot.com";
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const SERVICE_ID = `${SITE_URL}/#ai-consulting`;
const HOME_WEBPAGE_ID = `${SITE_URL}/#webpage`;

const siteSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": BUSINESS_ID,
      name: "Geek at Your Spot",
      url: SITE_URL,
      logo: `${SITE_URL}/images/GeekAtYourSpot.svg`,
      description:
        "Enterprise AI implementation services, LLM integration, and autonomous agent deployment.",
      telephone: "+1-561-526-3512",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2025 NW 18th Street",
        addressLocality: "Delray Beach",
        addressRegion: "FL",
        postalCode: "33445",
        addressCountry: "US",
      },
      founder: { "@id": FOUNDER_ID },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.4616,
        longitude: -80.0728,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      openingHours: "Mo-Fr 09:00-17:00",
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Broward County",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "Palm Beach County",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "Miami-Dade County",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
      ],
      knowsAbout: [
        {
          "@type": "Thing",
          name: "Artificial Intelligence",
          sameAs: "https://en.wikipedia.org/wiki/Artificial_intelligence",
        },
        {
          "@type": "Thing",
          name: "Business Process Automation",
          sameAs: "https://en.wikipedia.org/wiki/Business_process_automation",
        },
        {
          "@type": "Thing",
          name: "Agentic AI",
          sameAs: "https://en.wikipedia.org/wiki/Intelligent_agent",
        },
      ],
      hasMap: "https://share.google/N5czXCIcHvptENeqr",
      sameAs: [
        "https://www.facebook.com/GeekAtYourSpot/",
        "https://www.linkedin.com/company/geekatyourspot",
        "https://share.google/2WOGINA7Cx35sdUjp",
      ],
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Consulting Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "AI for Accounting",
            description:
              "Implementing automated tools, pipelines, and dashboards to cut manual data entry.",
            url: `${SITE_URL}/use-cases/accounting`,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Automated Invoice Processing",
                  description:
                    "Captures vendor invoices, matches POs, and routes approvals so finance teams stop re-keying PDFs before month-end close.",
                  url: `${SITE_URL}/use-cases/accounting/automated-invoice-processing-accounts-payable`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Automated Bookkeeping & Data Entry",
                  description:
                    "Connect bank feeds, receipt OCR, and QuickBooks or Xero to auto-categorize transactions.",
                  url: `${SITE_URL}/use-cases/accounting/automated-bookkeeping-and-data-entry`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Intelligent Expense Management",
                  description:
                    "Captures employee receipts, enforces policy at submission, and syncs reimbursements to QuickBooks so finance audits exceptions, not every attachment.",
                  url: `${SITE_URL}/use-cases/accounting/expense-management-and-receipt-auditing`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Financial Forecasting & Reporting",
                  description:
                    "Pipe ledger data into forecasting models and board-ready React dashboards.",
                  url: `${SITE_URL}/use-cases/accounting/financial-forecasting-and-reporting`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Automated Bank Reconciliation",
                  description:
                    "Matches bank feeds to QuickBooks with ML-assisted rules so finance teams clear reconciliation exceptions before month-end close runs late.",
                  url: `${SITE_URL}/use-cases/accounting/smart-bank-reconciliation-and-ledger-coding`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Predictive Cash Flow Forecasting",
                  description:
                    "Predictive cash flow forecasting pipes QuickBooks or Xero history into rolling models so finance teams see runway risk weeks before close surprises.",
                  url: `${SITE_URL}/use-cases/accounting/predictive-cash-flow-forecasting`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Agentic AI in Accounting",
                  description:
                    "Autonomous software agents that can independently plan, execute, and complete complex, multi-step financial workflows.",
                  url: `${SITE_URL}/use-cases/accounting/emergence-of-agentic-ai`,
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI for Customer Service",
            description:
              "AI to automate, personalize, and accelerate customer support interactions.",
            url: `${SITE_URL}/use-cases/customer-service`,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Customer Support & Automation",
                  description:
                    "Use artificial intelligence to resolve customer inquiries independently and optimize support operations without manual effort.",
                  url: `${SITE_URL}/use-cases/customer-service/ai-for-customer-support-and-automation`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Agent Assist Tools",
                  description:
                    "Uses AI as digital co-pilots to help human customer support agents work faster and more accurately.",
                  url: `${SITE_URL}/use-cases/customer-service/agent-assist-tools`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Multilingual Support",
                  description:
                    "AI to translate, interpret, and resolve customer service inquiries across different languages instantly and accurately.",
                  url: `${SITE_URL}/use-cases/customer-service/multilingual-support`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Ticket Tagging & Routing",
                  description:
                    "AI to automatically categorize incoming support tickets and direct them to the right agent or department instantly.",
                  url: `${SITE_URL}/use-cases/customer-service/automated-ticket-tagging-and-routing`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Enhanced Customer Satisfaction (CSAT)",
                  description:
                    "AI and predictive analytics to measure, optimize, and elevate how customers feel about their service experiences.",
                  url: `${SITE_URL}/use-cases/customer-service/enhanced-customer-satisfaction-csat`,
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI for Human Resources",
            description:
              "AI to automate administrative tasks, and personalize employee experiences across the workplace lifecycle.",
            url: `${SITE_URL}/use-cases/human-resources`,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Employee Self-Service",
                  description:
                    "AI intelligent virtual assistants and automation to let workers find answers and complete HR, IT, and payroll tasks independently.",
                  url: `${SITE_URL}/use-cases/human-resources/employee-self-service`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Career Development",
                  description:
                    "AI and data analytics to analyze an individual's skills, performance, and goals to provide personalized pathways for professional growth and internal mobility.",
                  url: `${SITE_URL}/use-cases/human-resources/career-development`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Operations Management",
                  description:
                    "AI uses predictive analytics, and automation to design, analyze, and optimize business processes and supply chain workflows.",
                  url: `${SITE_URL}/use-cases/human-resources/operations-management`,
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI for Marketing",
            description:
              "AI to automate content creation, personalize customer journeys, and optimize advertising spend at scale.",
            url: `${SITE_URL}/use-cases/marketing`,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI for Multi-Channel Content Generation",
                  description:
                    "A governed workflow that turns one approved brief into channel-ready drafts for blog, email, social, and ads while maintaining human oversight.",
                  url: `${SITE_URL}/use-cases/marketing/ai-for-multi-channel-content-generation`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Personalized Email Marketing & Dynamic Content",
                  description:
                    "Uses CRM behavior and AI to tailor email journeys and dynamic modules so each subscriber gets relevant offers at send time.",
                  url: `${SITE_URL}/use-cases/marketing/personalized-email-marketing-and-dynamic-content`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO & Programmatic Keyword Research",
                  description:
                    "Uses automation to discover, cluster, and prioritize search demand so marketing teams publish for converting intents instead of guessing topics.",
                  url: `${SITE_URL}/use-cases/marketing/seo-and-programmatic-keyword-research`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Predictive Audience Segmentation & Targeting",
                  description:
                    "Uses AI and historical behavior to score and target audiences most likely to convert, expand, or churn.",
                  url: `${SITE_URL}/use-cases/marketing/predictive-audience-segmentation-and-targeting`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Automated Creative Asset Production",
                  description:
                    "Uses AI and brand kits to generate channel-ready images, video, and copy variants so marketing teams publish faster with human approval on claims.",
                  url: `${SITE_URL}/use-cases/marketing/automated-creative-asset-production`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Social Listening & Real-Time Sentiment Analysis",
                  description:
                    "Monitors brand and category conversations and scores sentiment so marketing teams respond to praise, risk, and demand shifts in hours, not after reviews tank.",
                  url: `${SITE_URL}/use-cases/marketing/social-listening-and-real-time-sentiment-analysis`,
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "AI for Sales",
            description:
              "AI to rank prospects and grow existing accounts.",
            url: `${SITE_URL}/use-cases/sales`,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Prospecting & Lead Intelligence",
                  description:
                    "Rank prospects from CRM data, surface context before outreach, and draft personalized sequences for reps.",
                  url: `${SITE_URL}/use-cases/sales/prospecting-and-lead-intelligence`,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Predictive Lead Scoring and Prioritization",
                  description:
                    "Rank high-volume inbound leads and outbound lists from CRM data so reps reduce wasted effort and focus on accounts most likely to close.",
                  url: `${SITE_URL}/use-cases/sales/predictive-lead-scoring-and-prioritization`,
                },
              },
            ],
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: "Jeff Martin",
      jobTitle: "Founder & Principal Consultant",
      worksFor: { "@id": BUSINESS_ID },
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/company/geekatyourspot",
        "https://www.facebook.com/GeekAtYourSpot/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Geek at Your Spot",
      url: SITE_URL,
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "WebPage",
      "@id": HOME_WEBPAGE_ID,
      name: "Geek at Your Spot | AI Consulting & Automation for Small Business",
      url: SITE_URL,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": BUSINESS_ID },
      mentions: { "@id": SERVICE_ID },
    },
    {
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "AI Strategy & Implementation Consulting",
      description:
        "Four-phase AI consulting for South Florida SMBs: define business objectives, assess data quality, select AI technologies, and build an implementation strategy.",
      provider: { "@id": BUSINESS_ID },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Broward County",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "Palm Beach County",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
        {
          "@type": "AdministrativeArea",
          name: "Miami-Dade County",
          containedInPlace: {
            "@type": "State",
            name: "Florida",
          },
        },
      ],
      serviceType: "IT Consulting",
    },
  ],
};
export { siteSchemaGraph };
