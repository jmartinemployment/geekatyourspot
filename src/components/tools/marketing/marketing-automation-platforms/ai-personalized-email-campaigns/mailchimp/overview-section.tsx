import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        How do small businesses in Miami-Dade, Broward, and Palm Beach keep their <Link id={`tools-marketing-personalized-email-campaigns-mailchimp-overview-personalized-email-campaigns${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">personalized
        email campaigns</Link> relevant and personal without losing hours each week or hiring a full-time marketer?
        Most teams find that personalizing every message by hand is not just tedious, it quickly becomes impossible
        as their list grows. Even the best intentions fall flat when every campaign starts to look the same, and the
        people you want to reach start tuning out. The result is wasted effort: emails get ignored, customers drift,
        and the sales you counted on never materialize.</p>
      <p className="text-base text-white shadow-text pt-3">
        An AI-assisted approach to Personalized Email Campaigns solves this by taking the manual grind out of the
        process. With the right tool, like Mailchimp, you can segment your audience, automate timing, and tailor
        subject lines and content for every group, without writing every message from scratch. These platforms are
        built for non-experts: drag-and-drop editors, guided flows, and free plans let you test what works before
        you ever pay. As you grow, you scale up features instead of starting over or facing a shock jump in price.</p>
      <p className="text-base text-white shadow-text pt-3">
        What is at stake for your team is not just time. If your emails are generic, you lose trust and miss out on
        sales. Personalization is proven to drive more clicks and purchases, but doing it by hand is simply not
        practical for a small business with real limits on staff and hours. Even with only a few hundred contacts,
        manual efforts break down: mistakes creep in, and campaigns go out late or not at all. AI-powered automation
        means you deliver the right message, to the right person, at the right time, consistently.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is for small businesses in South Florida who need to save hours each week, make every email count, and
        grow without hiring or burning out. You get results that matter: higher <GlossaryLink slug="open-rate">open
        rates</GlossaryLink>, more sales, and fewer errors, all while keeping control and oversight. Personalized
        Email Campaigns are not just for big brands, they are now practical for your twelve-person team or even your
        two-person shop, if you use the right approach from the start.</p>
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
