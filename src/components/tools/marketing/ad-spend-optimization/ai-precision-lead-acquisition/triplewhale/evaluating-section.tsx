import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale is best judged by how well it fits your business&rsquo;s size, marketing complexity, and the level
        of clarity you need from your ad spend. The platform was built for Shopify brands and direct-to-consumer
        operators who want to connect ad visibility to real revenue, not just clicks or impressions. If you are a small
        business in Miami-Dade, Broward, or Palm Beach counties, the right fit comes down to whether you want one clear
        answer about which ads drive actual sales, and whether your team has the time or skill to configure that answer
        themselves.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start by looking at how Triplewhale handles attribution and reporting compared to what you run today. Most small
        businesses rely on Google or Meta dashboards, which split credit and double-count conversions. Triplewhale solves
        this by centralizing all your marketing data and applying first-party tracking with the Triple Pixel. This means
        you get a single, trusted number for each campaign, mapped to real revenue. If your current process leaves you
        guessing or spending hours reconciling reports, Triplewhale is a strong fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s pricing structure is straightforward. It offers a free plan that includes AI Visibility,
        making it one of the only no-cost entry points in this category. Paid tiers scale based on your gross merchandise
        value (GMV), so you only pay more as your business grows. For small teams, this means you can start optimizing
        your ad spend without a big upfront commitment, and only invest further when you see value. The free plan gives
        access to core analytics and visibility features, while higher tiers unlock advanced segmentation, product
        analytics, and deeper creative analysis.</p>
      <p className="text-base text-white shadow-text pt-3">
        When evaluating fit, consider your team&rsquo;s ability to act on insights. Triplewhale&rsquo;s dashboards are
        designed to be client-friendly and easy to use, with pre-built reports and visualizations that make the data
        accessible even to non-technical users. If you have a lean team or limited in-house analytics skill, this is a
        major advantage. The platform&rsquo;s automation and recommendation features (like Moby AI) reduce the time
        needed to spot and act on performance shifts, saving hours each week that would otherwise be spent in
        spreadsheets or manual analysis.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real test of fit is how well Triplewhale&rsquo;s attribution models match your business&rsquo;s sales cycle
        and marketing mix. The platform offers a range of models, first-click, last-click, linear, total impact, and
        more, so you can tailor the logic to your actual customer journeys. If your sales happen across multiple
        channels (Meta, Google, TikTok, email, and SMS), or if you want to know exactly which creative or campaign
        closed the sale, Triplewhale&rsquo;s flexibility stands out. Geek @ Your Spot helps you choose and configure the
        right model, so you are not forced into a one-size-fits-all approach.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s approach to creative analysis is another factor. For businesses that run many ad variations,
        the ability to quickly identify winning creative and cut losers is critical. The platform&rsquo;s Moby Agents
        and Creative Cockpit automate this process, analyzing hundreds of ad variations and surfacing what actually
        drives revenue. If your team struggles to keep creative fresh or wastes budget on tired ads, this feature can
        return hours each week and improve your <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost
        per acquisition</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the downside, Triplewhale is strongest for Shopify-based, DTC, and ecommerce businesses. If you run a service
        business that does not use Shopify, or if your sales are mostly offline, you may find the platform less tailored
        to your needs. Its integrations and reporting are built around ecommerce data and digital ad platforms, not
        brick-and-mortar or high-touch B2B sales. If your business is outside these lines, another tool may fit
        better.</p>
      <p className="text-base text-white shadow-text pt-3">
        To sum up, judge Triplewhale on three points: whether it gives you a single, reliable answer to where your ad
        dollars go; whether its automation and reporting save you real time each week; and whether its pricing matches
        your current scale without locking you into a long contract. For small teams in South Florida looking to stop
        wasting ad spend and start growing on trusted data, Triplewhale&rsquo;s fit is strongest where clarity and speed
        matter most. Geek @ Your Spot&rsquo;s implementation closes the technical gap, so you get the benefits without
        the setup headaches.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-triplewhale-fits-your-business-and-what-its-pricing-model-means-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge if Triplewhale fits your business and what its pricing model means for small teams
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-triplewhale-fits-your-business-and-what-its-pricing-model-means-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge if Triplewhale fits your business and what its pricing model means for small teams
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
