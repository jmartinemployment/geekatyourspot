import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A small business owner in Miami-Dade stares at a blank document, knowing today’s the day to update the
        company blog and send out a fresh email campaign. But the phone rings, a client walks in, and the
        spreadsheet of overdue invoices flashes on another screen. The clock ticks by. By late afternoon, the
        screen is still empty. The pressure to keep up with competitors through regular content isn’t just a
        nice-to-have, it’s the only way to stay visible and trusted in the local market. But each attempt to
        write something new eats into hours meant for billing, customer calls, or simply closing the office on
        time. Every blank page becomes a bottleneck, and the longer content sits unwritten, the less likely it
        is to bring in new business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Outsourcing isn’t much better. The first invoice from a local agency lands with a number that makes
        you wince, thousands each month for blog posts and social updates, often written by someone who barely
        knows your business. For many small teams in Broward or West Palm Beach, the cost is impossible to
        justify, so content creation drops to the bottom of the list. Social profiles go quiet. The website
        gathers dust. New leads slow to a crawl, and the business starts to disappear from local searches and
        conversations. No matter how hard you work, the digital silence grows louder, and bigger competitors
        with deeper pockets take over your share of the local market.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the real cost of trying to handle content manually: wasted hours, missed sales, and a pipeline
        that dries up because there aren’t enough hands to keep it moving.&nbsp;<Link id={`tools-marketing-intelligent-content-generation-copy-overview-intelligent-content-generation${idSuffix}`} href="/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses" className="text-[#C83803] hover:underline">Intelligent Content Generation</Link>&nbsp;is
        the way out. With a repeatable, AI-powered workflow, a small team can turn ideas, customer questions,
        and source material into publishable marketing assets in minutes, then repurpose them across every
        channel, from SEO articles to personalized email campaigns. This system doesn’t just save time and
        money; it gives you a consistent digital presence that attracts and converts local leads, all without
        hiring extra staff or burning out the team you have.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, Intelligent Content Generation levels the playing field. It
        strips away the headaches of writing from scratch and the sticker shock of agency retainers. Instead,
        you get a workflow that fits your scale, builds trust in your market, and keeps your sales pipeline
        moving, without ever having to stare down another blank page.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
