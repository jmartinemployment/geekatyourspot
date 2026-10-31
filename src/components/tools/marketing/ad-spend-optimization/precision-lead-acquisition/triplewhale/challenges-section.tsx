import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Relying on manual processes and platform dashboards for ad spend leaves small businesses in Miami-Dade, Broward
        and Palm Beach with incomplete answers, wasted budget, and missed growth. The real cost is not just money spent
        on the wrong ads, but hours lost each week to reconciling conflicting numbers, chasing down what actually drove a
        sale, and second-guessing every decision about where to put the next dollar. Without a unified, accurate view,
        you risk paying twice for the same lead or letting high-potential campaigns stall because the data is too noisy
        or too late to act on.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first place things go wrong is in the data itself. Platform dashboards like Google Ads and Meta each claim
        their own slice of credit for conversions, but their numbers rarely match what hits your bank account. A single
        sale might show up as two or three conversions across different dashboards, inflating your sense of success and
        making it impossible to know which campaign actually brought in the customer. That means you can end up doubling
        down on ads that only look good because of duplicate reporting, not because they work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Standard <GlossaryLink slug="tracking-pixel">tracking pixels</GlossaryLink> add another layer of confusion. When
        you use browser-based pixels, ad blockers and privacy settings can break the chain between an ad click and the
        actual sale. This leaves gaps in your reporting, some sales are never attributed back to the campaign that earned
        them. For a small business where every dollar counts, missing even a handful of conversions can mean pulling
        budget from a channel that is actually working, or worse, keeping spend on a channel that is not.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual reporting compounds these issues. Many small teams still export campaign data into spreadsheets once a
        week, then spend hours trying to align numbers from different sources. That delay means budget shifts and
        optimization decisions are always a week behind the market. In fast-moving retail or service businesses, that
        lag can turn a minor performance dip into a lost month of sales. The time spent reconciling reports is time not
        spent acting on insights, testing new creative, or following up with leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative waste is another hidden cost. When you rely on surface metrics like impressions or clicks, you end up
        keeping high-cost ad variations running simply because they look active. Without a way to tie each creative asset
        directly to real sales, you risk burning budget on ads that do not convert. That money could be going to the
        creative that actually brings in new customers, but the signal is lost in the noise. Over time, this can lock you
        into a cycle of repeating what is easy to measure, not what actually works.</p>
      <p className="text-base text-white shadow-text pt-3">
        Overlapping attribution is the final trap. Two platforms may both claim they drove the same sale, especially in
        local booking or high-touch service businesses. When there is no system to deduplicate those interactions, you
        end up paying for the same lead twice. This inflates your <GlossaryLink slug="cost-per-acquisition">cost per
        acquisition</GlossaryLink>, hides the true winners in your campaign mix, and makes it nearly impossible to scale
        your marketing with confidence. You are left making budget decisions on numbers that simply do not add up.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result of all this is a marketing budget that works half as hard as it should. Dollars are tied up in
        underperforming campaigns, the team loses hours every week to manual work, and there is no clear way to prove
        what is working to your accountant or your team. For a small business, those missed signals are not just an
        annoyance, they are the difference between growth and stagnation. Without a system that brings clean, trusted
        numbers to the surface, every decision is a guess, and the cost of guessing wrong adds up fast.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
