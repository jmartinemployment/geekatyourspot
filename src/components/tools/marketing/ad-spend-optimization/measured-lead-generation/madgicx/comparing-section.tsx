export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx stands apart from agency services, native ad platforms, and other automation tools by delivering
        AI-powered lead generation and ad spend optimization that small teams can actually control. Where agencies
        introduce communication delays and rigid reporting, and native ad managers overwhelm with manual tasks,
        Madgicx automates the routine work and keeps your team focused on strategy and growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida looking to scale lead generation often compare three main approaches:
        hiring a marketing agency, managing campaigns directly in platforms like Meta Ads Manager or Google Ads, or
        adopting an automation platform like Madgicx. Each path brings its own trade-offs in cost, control, and
        speed of execution.</p>
      <p className="text-base text-white shadow-text pt-3">
        Agencies promise a hands-off experience but come with their own set of problems. Relying on an outside
        provider means waiting for responses, dealing with profit margins that eat into your budget, and accepting
        generic reporting that may not match your business needs. The risk of giving an agency direct access to your
        ad accounts also introduces concerns about data privacy and client poaching. These drawbacks are especially
        acute for small businesses that need fast answers and flexible control over their campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Native ad platforms like Meta Ads Manager or Google Ads give you full control and direct access to powerful
        features, but they demand hours of manual work every week. Creating and testing multiple ad variations,
        managing bidding strategies, and analyzing performance data quickly becomes overwhelming for a small team.
        The platforms are built for scale, not simplicity. For a business spending $500 to $1,500 a month, the
        learning curve and time investment can outweigh the benefits of granular control.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx&apos;s automation bridges this gap. It is not an agency, and it does not replace your team’s
        judgment with black-box decisions. Instead, Madgicx automates the repetitive, error-prone parts of campaign
        management, like creative rotation, audience targeting, and budget allocation, while surfacing actionable
        insights your team can use. The platform is built for small businesses that want to scale without hiring a
        full marketing department or outsourcing control.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where other automation tools may offer basic rule-based triggers or bulk scheduling, Madgicx goes deeper
        with predictive analytics and AI-driven creative generation. Its Audience Launcher and Audience Studio let
        you test and deploy over 100 pre-built and AI-generated audiences, each mapped to different stages of your
        sales funnel (<a id={`tools-marketing-measured-lead-generation-madgicx-comparing-source-madgicx-com${idSuffix}`} href="https://madgicx.com/blog/how-to-scale-facebook-ads" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Madgicx</a>,
        as of Oct 24, 2026). This means you avoid the common pitfalls of bidding against yourself, targeting too
        broadly, or showing the wrong message to the wrong person. The platform’s automation logic is designed to
        eliminate cross-audience overlaps, enforce strict exclusions for past buyers, and pause underperforming
        demographic groups instantly, tasks that would take hours to manage by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative bottlenecks are another area where Madgicx outperforms both agencies and manual workflows. The AI
        Ad Generator produces dozens of ad variations in minutes, using your product images or proven ads as input.
        This solves the problem of ad fatigue and keeps your campaigns fresh without the need for constant designer
        involvement. Agencies may promise creative support, but they cannot match the speed or volume of AI-driven
        asset generation, especially at a price point that fits a small business budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx also stands out for its cross-channel reporting and integration capabilities. Unlike native
        platforms, which silo your data, Madgicx pulls in performance data from Meta, Google, Shopify, and more,
        giving you a unified dashboard to monitor results and make informed decisions. The integration with Google
        Sheets means you can bring in custom data points and create unique metrics without building complex scripts
        or hiring a data analyst.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget optimization is another area where Madgicx’s approach differs from both agencies and simpler
        automation tools. With features like the Autonomous Budget Optimizer and AI-powered budget reallocation,
        Madgicx continuously shifts spend toward the highest-performing campaigns and audiences. This keeps your
        cost-per-lead stable as you scale, avoiding the spike in acquisition costs that typically comes when you try
        to grow beyond a basic ad spend. Agencies may monitor budgets, but they cannot react in real time to
        performance shifts across dozens of campaigns and audience segments.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses with limited marketing expertise, Madgicx levels the playing field. The platform’s
        automation and AI-driven insights mean you do not need to be a data scientist or a full-time marketer to
        compete with larger brands. Agencies and native platforms both require you to trust someone else’s process
        or master a complex toolset. Madgicx puts advanced optimization within reach, but keeps your team in
        control.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Madgicx sits between the hands-off approach of hiring an agency and the labor-intensive demands
        of managing campaigns directly in ad platforms. It delivers more automation, deeper insights, and faster
        creative production than most other tools, all while giving your team the control and flexibility needed to
        respond to changing market conditions. For small businesses in Miami-Dade, Broward, and West Palm Beach,
        Madgicx is built to solve the scaling and creative bottlenecks that come with growing your measured lead
        generation beyond the basics.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-madgicx-compares-to-agencies-native-ad-platforms-and-other-automation-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Madgicx compares to agencies, native ad platforms, and other automation tools
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-madgicx-compares-to-agencies-native-ad-platforms-and-other-automation-tools-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Madgicx compares to agencies, native ad platforms, and other automation tools
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
