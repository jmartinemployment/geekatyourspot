import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business in Miami-Dade, Broward or Palm Beach should judge Plai on two main fronts: how well it fits your
        team&rsquo;s size, workflow, and technical skills, and whether its pricing model lines up with your budget and
        revenue goals. Plai is built for organizations that want to centralize ad management, automate the heavy lifting,
        and get clear, actionable reporting without hiring a full-time analyst.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit comes down to workflow and complexity. If your team is juggling Facebook, Google, and TikTok campaigns in
        separate dashboards, and you are losing track of which ad is driving results, Plai&rsquo;s unified dashboard and
        automation logic are a strong match. The platform is designed to be accessible for non-technical owners, no
        code, no custom scripting, just configuration of rules and templates. If you need deep customization, or have a
        complex stack of legacy systems to integrate, Plai&rsquo;s lack of an open API may be a limitation. But for most
        small teams, its out-of-the-box integrations and workspace structure will handle the majority of use cases.</p>
      <p className="text-base text-white shadow-text pt-3">
        The learning curve with Plai is low. Campaigns are set up using templates, audience packs are prebuilt, and
        reporting is visual and straightforward. This means your team can spend less time on training and more time on
        strategy and creative. For franchises or businesses with multiple brands, Plai&rsquo;s workspace model keeps
        everything siloed and organized, so you can manage many campaigns without confusion or data leaks between
        units.</p>
      <p className="text-base text-white shadow-text pt-3">
        On pricing, Plai offers flexible billing options. You can set up your own SaaS pricing plans, charge monthly
        subscriptions, or take a percentage of ad spend. Billing is automated through integrations like Stripe. There is
        no published price floor or tier in the research, so you will need to work with Geek @ Your Spot to model what
        your real costs would be based on your ad volume and preferred billing method. The key is that Plai&rsquo;s model
        lets you align costs with the way you actually generate revenue, if you want to pass costs through to clients or
        divisions, or keep margins tight on your own spend, the platform supports both.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main fit question is whether you value automation and centralization over deep, custom integrations. If your
        pain is lost time, manual reporting, and unclear <GlossaryLink slug="return-on-investment" className="text-[#0B162A] hover:underline">ROI</GlossaryLink>,
        Plai&rsquo;s strengths are in giving you a single source of truth and automating routine decisions. If you need
        to plug in custom data flows or extend the platform beyond what its integrations support, you may hit a wall. For
        most small businesses, though, the time and error savings from Plai&rsquo;s automation far outweigh the limits of
        its extension model.</p>
      <p className="text-base text-white shadow-text pt-3">
        When comparing Plai to other platforms, focus on the real outcomes: does it cut down on manual hours, reduce
        reporting errors, and help you move budget to where it actually drives sales? Does the dashboard show you what
        you need to see, without the need for a data analyst to explain it? If the answer is yes, and the pricing model
        fits your cash flow, Plai is a strong fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        One last point: Plai&rsquo;s value increases as you scale. The more campaigns, brands, or locations you manage,
        the more time you save by centralizing and automating routine work. For a single-location business with just one
        or two channels, the benefits are real but smaller. For a multi-location franchise or a team running a dozen
        campaigns, the cumulative savings in time and error reduction are substantial.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-plais-fit-and-pricing-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Plai&rsquo;s fit and pricing for your business
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
              <h2 id="how-to-judge-plais-fit-and-pricing-for-your-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to judge Plai&rsquo;s fit and pricing for your business
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
