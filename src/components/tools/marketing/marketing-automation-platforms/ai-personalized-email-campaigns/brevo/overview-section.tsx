import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        How do small businesses in Miami-Dade, Broward and Palm Beach counties keep customer communication on track
        when emails, texts and staff all work in silos, and generic blasts get ignored? The truth is, scattered
        outreach leaves prospects cold and makes timely follow-up nearly impossible. <Link id={`tools-marketing-personalized-email-campaigns-brevo-overview-personalized-email-campaigns${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">Personalized
        Email Campaigns</Link> work, but hand-crafting every message is not realistic for a small team with limited
        hours. Juggling lists, segmenting contacts and trying to send the right note at the right time eats up
        resources, lets leads fall through the cracks and costs real sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        An AI-assisted approach fixes this by tailoring messages for each audience segment automatically, using
        tools that fit right into your daily workflow. Instead of sending the same email to everyone or risking that
        no one follows up, you group contacts by behavior and automate the send so each person gets content relevant
        to them, when they are most likely to read it. Teams that switch to automation see more opens, more clicks,
        and fewer missed opportunities without hiring extra staff or burning out the ones they have.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost of sticking with manual processes or one-size-fits-all blasts is more than wasted time. It means
        losing leads to faster competitors and failing to build trust with the people most likely to buy again. For
        a small business, every touchpoint counts. If your team struggles to keep up, or your emails sound like
        everyone else’s, you are paying in lost revenue and missed relationships.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for small businesses in South Florida who want to save time, increase sales, and finally make
        their email marketing work. You will see how personalized, automated campaigns solve real pain points for
        teams like yours, so you can focus on running your business, not chasing replies. The approach here is
        practical, affordable, and built for local teams ready to compete.</p>
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
