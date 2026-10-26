import Link from "next/link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why are we still sending the same generic email to every lead, even when we know it is not working? When
        small businesses try to run <Link id={`tools-marketing-personalized-email-campaigns-getresponse-overview-personalized-email-campaigns${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">Personalized
        Email Campaigns</Link> by hand, each new lead brings more manual work: copying, pasting, tweaking, and
        sending. Leads come from website forms, ads, and social media, but everyone gets the same basic follow-up.
        That means a lot of missed chances. The real cost is time spent on repetitive tasks and sales lost because
        prospects never see a message that speaks directly to them.</p>
      <p className="text-base text-white shadow-text pt-3">
        The answer is to automate the process so each person gets a message matched to what they care about. An
        AI-powered approach makes it possible to segment your audience and send timely, relevant follow-ups at
        scale, without adding hours of work or extra staff. Instead of every prospect slipping into the same
        incomplete sequence, each contact gets a tailored journey, and the business can see real results: more
        opens, more replies, and more sales, all from the same team.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small teams in West Palm Beach, Broward, and Miami-Dade, the stakes are high. Manual personalization
        eats up hours you do not have, and generic email blasts get ignored. Competitors who automate can respond
        faster, nurture leads better, and close more business, often with fewer people. If you feel you are spending
        too much time on email but still not seeing enough sales, this is a problem you can solve now, not years
        from now.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for owners and teams who want to stop wasting time on email that does not convert. You will see
        how AI-driven personalized email campaigns work, what they really deliver, and how Geek @ Your Spot helps
        small businesses across South Florida get results right away, without hiring or retraining your whole team.</p>
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
