import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wask is best for small businesses in Miami-Dade, Broward, and Palm Beach that manage their own Google and Meta
        ad accounts and want automation without losing oversight. If your team spends more than five hours a week on
        campaign reviews, or your ad budget tops $5,000 a month, Wask&rsquo;s automation can return hours to your week
        and cut wasted spend before it grows (<a id={`tools-marketing-precision-lead-acquisition-wask-right-fit-source-ad-automation${idSuffix}`} href="https://www.wask.co/digital-advertising/ad-automation" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wask</a>,
        as of Oct 29, 2026). The tool is designed for teams that need to see exactly what budget is doing, catch issues
        early, and make changes fast, without hiring more staff or signing agency retainers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask&rsquo;s automation works best when you have enough data for its rules and AI to make confident decisions.
        For Google Ads, this means campaigns with at least 30 conversions per month; for Meta, ad sets should see at
        least 50 optimization events per week. If your campaigns are too small or too new to hit these numbers, the
        tool&rsquo;s recommendations and automated actions may not be as reliable. In these cases, a hands-on approach or
        a specialist&rsquo;s guidance may be a better fit until your volume grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business runs only a handful of campaigns with simple targeting, or if you rarely adjust bids, budgets,
        or creatives, Wask&rsquo;s level of automation may be more than you need. The platform shines in environments
        where complexity, multiple campaigns, ad sets, creative variants, and shifting goals, makes manual oversight a
        bottleneck. If you are happy with your current results and spend little time on routine campaign management, you
        may not see a dramatic return from automation right away.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that rely on cross-channel attribution, <GlossaryLink slug="offline-conversions">offline
        conversions</GlossaryLink>, or custom integrations beyond Google and Meta, Wask may not cover every reporting or
        optimization need. The platform&rsquo;s strength is in direct, persistent optimization of Google Ads and Meta
        Ads; if your team needs to coordinate spend across TikTok, LinkedIn, or non-digital channels, you may need to
        supplement Wask with other tools or processes. Similarly, if you require deep integrations with CRM or inventory
        systems, check that your core workflows are supported before committing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wask is not a replacement for strategy, creative development, or high-level marketing planning. The platform
        automates routine optimization and surfaces actionable insights, but it does not invent new campaigns or set
        business goals. Teams still need to review strategy, refresh creative, and adjust for business changes.
        Wask&rsquo;s audit visibility and approval workflows make it easy to see what is happening and why, but the tool
        relies on your team to set the right rules and thresholds at the start.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where Wask fits best is when your business has outgrown manual ad management but is not ready, or does not want,
        to hand over control to an agency. The platform&rsquo;s automation engine and unified dashboard give you the
        tools to run a weekly review process, catch wasted spend early, and keep budget tied to what works. For owners
        and managers who want to move fast, reduce errors, and keep marketing spend accountable, Wask is a strong
        fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business needs hands-on creative help, custom analytics, or support for channels outside Google and
        Meta, Wask should be part of a broader toolset, not the whole solution. For most small businesses in South
        Florida, the next step is to map your current campaigns, check your data volume, and decide if automation will
        return more time and budget than it costs. Where Wask fits, it delivers. Where it does not, the right move is to
        keep your options open and revisit automation when your complexity or spend justifies it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a id={`tools-marketing-precision-lead-acquisition-wask-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What do you sell, and what action should an ad produce, a phone call, appointment, quote request, store visit, or online purchase?</li>
        <li>What is the biggest problem today: not knowing what works, spending too much for results, getting poor-quality leads, or not having time to manage campaigns?</li>
        <li>Can you trace a lead from the original ad through to a booked job or completed sale?</li>
        <li>Are phone calls, website forms, bookings, and purchases tracked separately?</li>
        <li>Who changes your bids and budgets today, how often, and based on what information?</li>
        <li>Over the last three months, how many inquiries, qualified leads, customers, and sales dollars came from paid advertising?</li>
        <li>Where do you record whether an inquiry became qualified, booked, won, or lost?</li>
        <li>Do your ad platforms and sales records disagree? Can you show an example?</li>
        <li>Should software only recommend changes, make changes after approval, or operate automatically within limits?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="which-businesses-benefit-most-from-wask-and-when-to-look-elsewhere" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Businesses Benefit Most from Wask and When to Look Elsewhere
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
              <h2 id="which-businesses-benefit-most-from-wask-and-when-to-look-elsewhere-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Businesses Benefit Most from Wask and When to Look Elsewhere
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
