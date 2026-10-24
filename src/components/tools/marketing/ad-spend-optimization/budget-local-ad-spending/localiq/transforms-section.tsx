import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ strips out the guesswork, manual labor, and wasted spend that come with running local ad campaigns
        on a tight budget. Its platform uses AI and real-time optimization to make every dollar count, so small
        businesses in South Florida can stop worrying about the details and focus on the leads that actually matter.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first change is in keyword and audience targeting. LocaliQ’s proprietary <GlossaryLink slug="machine-learning" className="text-[#0B162A] hover:underline">machine
        learning</GlossaryLink> automatically adjusts keyword match types and focuses spend on high-intent, local
        search terms. This means campaigns avoid the trap of paying for generic, broad-match clicks from people who
        will never buy. Instead, the budget is steered toward searches that signal real buying intent, like
        “emergency plumber in Fort Lauderdale”, so every click is more likely to become a customer. The platform’s
        AI learns from actual customer data, refining its targeting with each campaign, so the system adapts as the
        market shifts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Tracking and reporting are unified into a single dashboard. LocaliQ connects calls, form fills, web chats,
        and digital touches so that every lead is visible and attributable to the campaign and channel that drove
        it. A business owner can see at a glance which ads are generating real customers, not just clicks or
        impressions. This removes hours of manual reconciliation each week, no more digging through spreadsheets or
        trying to match phone numbers to ad platforms. The reporting is clear, real-time, and actionable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geofencing and smart-radius targeting are built in. LocaliQ locks down ad delivery to exact service zones,
        ensuring that impressions and clicks come only from the neighborhoods a business serves. This eliminates the
        bleed of budget on out-of-area clicks, so every dollar is spent reaching people who can actually become
        customers. For a business with a strict delivery or service radius, this is the difference between a
        campaign that works and one that wastes half its budget on the wrong audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad copy and creative optimization happen automatically. LocaliQ’s algorithms run continuous <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        tests</GlossaryLink> on headlines, images, and offers, shifting spend to the combinations that drive the
        best results. Underperforming banners and stale copy are quickly identified and replaced, so campaigns are
        always running the most effective messages. The business no longer has to find time to test new ideas,
        LocaliQ does it in the background, every day, with no manual intervention needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead management is centralized and automated. LocaliQ captures every inquiry from search and social
        campaigns, storing them in a single, easy-to-review database. Automated follow-up tools engage leads
        instantly, whether they come from a web form, a call, or a chat. This means hot leads are never lost or left
        waiting, and the business can respond faster than competitors who still rely on manual tracking. The
        platform can also summarize communications and triage incoming messages, so the owner sees what is most
        urgent without sorting through a pile of notifications.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget optimization is handled by the system, not by hand. LocaliQ reallocates spend in real time, moving
        dollars from underperforming ad sets to those that are driving leads and sales. Whether the campaign is
        running on search, social, or display, the platform’s AI ensures that every cent is working toward the
        business’s actual goals. There is no need to monitor campaigns daily or worry about missing an opportunity,
        the system does it automatically, so the owner can focus on running the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a week with fewer headaches, fewer wasted hours, and more leads turning into real sales. The
        business owner no longer has to play detective, chasing down which ad worked or why the phone isn’t ringing.
        Instead, there is a clear, automated process that protects the budget, validates every message, and ensures
        that only the most effective ads run. LocaliQ is not just a set of features, it is a system that returns
        control, time, and results to small businesses that cannot afford to waste a single dollar.</p>
      <blockquote cite="https://localiq.com/products/search-ads/?itm_source=localiq&amp;itm_medium=product_overview" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        LocaliQ has the power to optimize your budget in real-time for maximum performance across all top search
        engines.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-localiq-removes-manual-work-from-budget-ad-copy-message-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ removes manual work from Budget Ad Copy &amp; Message Validation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-localiq-removes-manual-work-from-budget-ad-copy-message-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How LocaliQ removes manual work from Budget Ad Copy &amp; Message Validation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
