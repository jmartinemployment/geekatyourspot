import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why do our email campaigns get ignored no matter how often we send them, and is there a practical way for a
        small business in South Florida to make every email feel tailored without hiring a team? The answer is that
        generic emails miss the mark because they treat every contact the same, and local companies waste hours
        trying to fix this by hand. <Link id={`blog-marketing-personalized-email-campaigns-lede-personalized-email-campaigns${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">Personalized
        Email Campaigns</Link> use AI-driven tools to send the right message to the right person at the right time,
        without extra headcount, without manual list work, and with results you can track. Businesses that adopt
        local <GlossaryLink slug="marketing-automation">marketing automation</GlossaryLink> see higher <GlossaryLink slug="open-rate">open
        rates</GlossaryLink>, more replies, and more sales, all while freeing up staff for work that actually grows
        the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Sticking with a mass-blast approach costs more than missed clicks. It means you work harder for every sale,
        lose track of warm leads, and let your competition look sharper and faster in every inbox. If you are still
        segmenting lists or writing variations by hand, you are paying for manual work that an AI-enabled platform
        can do in minutes, and doing it with less accuracy and a higher risk of mistakes. When your best customers
        get the same pitch as your coldest prospects, your emails land in spam or get ignored, and your marketing
        budget goes further for your competitors instead.</p>
      <p className="text-base text-white shadow-text pt-3">
        This matters most for small and mid-sized businesses in Miami-Dade, Broward, and Palm Beach counties that
        rely on direct customer relationships to win and keep business. If your team is already stretched, you do
        not have time for trial and error. By aligning your business goals, cleaning up your contact data, choosing
        the right automation platform, and starting with a local pilot, our proven four-phase approach, you can move
        from hit-or-miss email blasts to a repeatable, data-driven system that delivers results and fits the way you
        already work. You save time, cut costs, and keep your customers coming back.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for owners and managers of Miami-area small businesses who want better results from their email
        marketing without hiring extra staff or getting lost in technical details. If you want your emails to
        matter, if you want to stop losing sales to generic outreach, this is what local, AI-powered Personalized
        Email Campaigns can deliver for you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-generic-emails-cost-miami-small-businesses-more-than-they-think" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why generic emails cost Miami small businesses more than they think
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
              <h2 id="why-generic-emails-cost-miami-small-businesses-more-than-they-think-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why generic emails cost Miami small businesses more than they think
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
