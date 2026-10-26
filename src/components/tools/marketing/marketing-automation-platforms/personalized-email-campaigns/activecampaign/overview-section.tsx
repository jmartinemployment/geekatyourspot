import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why do so many small businesses in South Florida struggle to make their emails stand out, despite their best
        intentions and all the tools at hand? The real issue is not a lack of effort or creativity, it’s that <Link id={`tools-marketing-personalized-email-campaigns-activecampaign-overview-personalized-email-campaigns${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">Personalized
        Email Campaigns</Link> demand more time and data coordination than most teams can manage. When sales,
        customer data and marketing messages live in separate places, leads slip through the cracks. Manual
        personalization is out of reach for a small team already stretched thin, so most emails end up feeling
        generic. The result: prospects ignore the messages, existing customers drift away, and the business misses
        out on easy wins it should have had.</p>
      <p className="text-base text-white shadow-text pt-3">
        An AI-assisted approach changes this by making it practical for even a lean team to deliver targeted,
        relevant emails at scale. Instead of picking through lists and handcrafting messages, modern <GlossaryLink slug="marketing-automation">marketing
        automation</GlossaryLink> connects your <GlossaryLink slug="crm">CRM</GlossaryLink>, e-commerce, and <GlossaryLink slug="customer-engagement">customer
        engagement</GlossaryLink> data. It automatically segments your audience, scores leads by intent, and sends
        the right message at the right time, without anyone on your staff having to juggle multiple spreadsheets or
        chase down last week’s activity. These systems do the heavy lifting, so your team can focus on closing sales
        and building relationships, not just wrangling data.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is a turning point for small businesses in Miami-Dade, Broward, and Palm Beach counties who want to
        work smarter, not harder. If you are tired of sending emails that get ignored or losing leads because your
        follow-up is slow or inconsistent, it is time to rethink your approach. With the right automation, you can
        make every contact feel like a one-on-one conversation, no matter how many prospects you have or how small
        your team is. Personalized Email Campaigns are finally within reach, and they deliver more sales, happier
        customers, and hours back in your week.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot specializes in helping local businesses put these systems in place, so you stop missing out
        on deals and start seeing results you can measure. The rest of this page walks through how it works, what
        you save, and what to expect when you move from manual effort to a connected, automated campaign workflow.</p>
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
