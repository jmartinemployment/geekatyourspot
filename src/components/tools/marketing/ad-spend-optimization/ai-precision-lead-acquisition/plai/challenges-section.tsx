import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad spend management drains hours from small teams in Miami-Dade, Broward and Palm Beach. The main cost
        comes from a lack of real visibility into what is working and what is not. When each ad platform splits its data
        and reporting, you are left guessing which campaigns drive sales and which just burn budget. That means money
        goes to underperforming ads simply because there is no fast way to see or act on the results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses pay for this in more than just lost ad dollars. Every week, someone spends hours pulling reports
        from Facebook, Google, TikTok and other platforms, trying to match up numbers that never quite line up with
        actual revenue. Even after that work, it is hard to know if a spike in clicks means more customers or just more
        wasted spend. The time spent on reporting is time not spent on strategy, customer follow-up or new creative.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pain gets worse when you try to scale. Adding new channels or clients multiplies the complexity. Each
        platform has its own rules for targeting, budgeting and tracking conversions. If you do not have the analytical
        skills to set up conversion tracking or build custom budget rules, your campaigns run on autopilot, but not the
        kind that optimizes for results. Budgets get split evenly across channels regardless of what is working, and
        underperforming ads keep running for days before anyone notices.</p>
      <p className="text-base text-white shadow-text pt-3">
        Failures stack up in five ways. First, launching campaigns without correct conversion tracking leaves you blind
        to what is driving sales. Second, splitting budgets evenly across channels means you miss chances to double down
        on what works. Third, broad targeting wastes spend on people who are never going to buy. Fourth, complex metrics
        like ROAS (<GlossaryLink slug="return-on-ad-spend">return on ad spend</GlossaryLink>) or <GlossaryLink slug="impression-share">impression
        share</GlossaryLink> are hard to interpret without a background in analytics, leading to poor decisions. Fifth,
        ignoring patterns in when your customers actually buy, like which days of the week matter, leaves money on the
        table.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a cycle of wasted time and money. Teams spend their week on &ldquo;busy work&rdquo;, pulling
        numbers, cleaning data, answering client questions, rather than making decisions that improve performance.
        Reporting delays mean budget adjustments come too late to save a campaign. Without a clear, unified dashboard,
        you cannot see which ads are working across all your platforms, so you keep spending on what feels safe rather
        than what actually delivers.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, these problems make it nearly impossible to compete with larger teams or
        more sophisticated advertisers. Every hour spent on manual reporting is an hour not spent closing sales or
        serving customers. Every dollar wasted on the wrong audience is a dollar you cannot put toward growth. Without
        the right tools, ad spend optimization remains a guessing game, one that gets more expensive the longer you play
        it.</p>
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
