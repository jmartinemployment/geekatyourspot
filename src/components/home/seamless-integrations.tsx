import { InfiniteMarquee } from "@/components/InfiniteMarquee";

export default function SeamlessIntegrationsSection() {
  const row1 = [
    "Google Analytics",
    "Shopify",
    "Snowflake",
    "Airtable",
    "Salesforce",
    "Zapier",
    "Google Analytics",
    "Shopify",
    "Snowflake",
    "Airtable",
    "Salesforce",
    "Zapier",
    "QuickBooks",
    "ChatGPT",
    "Persado",
    "Lex",
    "SEO.ai",
    "CoWrite",
    "Wordtune",
    "Grammarly",
    "NightCafe",
    "Craiyon",
    "Fetcher",
    "Paradox",
    "Workable",
    "Freshteam",
    "Bit.ai",
    "Otter",
    "Wingman",
    "Motion",
    "Akiflow",
    "Levity",
    "Docuf.AI",
    "HeyGen",
    "Leonardo",
    "Jasper",
    "Copy.ai",
    "Surfer SEO",
    "Canva AI",
    "Semrush ContentShake AI",
    "ElevenLabs",
    "Zapier",
    "Boomi ",
    "Mulesoft",
    "n8n",
    "Tray",
    "Microsoft Power Automate",
    "UiPath",
    "Gumloop",
    "Google Analytics",
    "Shopify",
    "Snowflake",
    "Airtable",
    "Salesforce",
    "Zapier",
    "QuickBooks",
  ];
  const row2 = [
    "Google Analytics",
    "Shopify",
    "Snowflake",
    "Airtable",
    "Salesforce",
    "Zapier",
    "QuickBooks",
    "Google Analytics",
    "Shopify",
    "Snowflake",
    "Airtable",
    "Salesforce",
    "Zapier",
    "QuickBooks",
    "Google Analytics",
    "Shopify",
    "Snowflake",
    "Airtable",
    "Salesforce",
    "Zapier",
    "QuickBooks",
  ];
  return (
    <>
      {/* <section>
    </section> */}
      <section className="w-full bg-[#8C4E2A] min-h-screen flex flex-col justify-center gap-12 py-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-white text-[5.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
            Seamless
            <br />
            <span className="text-[#023059]  text-[5.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text inline">
              Integrations
            </span>
          </h2>
          <p className="text-white text-2xl text-center shadow-text pt-5">
            Our AI solutions plug directly into the tools and platforms your
            team already uses every day. No disruption.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="flex flex-col gap-6">
          <InfiniteMarquee items={row1} direction="left" speed={180} />
          <InfiniteMarquee items={row2} direction="right" speed={180} />
        </div>
      </section>
    </>
  );
}
