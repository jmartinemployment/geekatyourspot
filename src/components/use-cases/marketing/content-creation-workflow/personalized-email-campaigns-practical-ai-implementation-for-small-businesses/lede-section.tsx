import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why are Personalized Email Campaigns so hard to get right for a small business in South Florida? The core
        issue: you need emails to be relevant and timely, but manual personalization is slow, inconsistent, and
        often ends up skipped. Most teams settle for one-size-fits-all blasts that get ignored, or burn hours
        segmenting, writing, and tracking replies by hand, only to see weak engagement and lost sales. What changes
        this is an automation platform that <GlossaryLink slug="trigger">triggers</GlossaryLink> the right message
        for each contact based on real behavior, not just a name in a spreadsheet. You get relevant content and
        consistent follow-up, all without the manual grind, so more leads turn into actual conversations,
        appointments, or purchases.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are like most small businesses in Miami-Dade, Broward, or Palm Beach, you already know the pain: a
        list of leads that looks good on paper, but little to show for it. Manual processes break down as soon as
        your list grows. Each week, you or your team are forced to choose between blasting everyone with the same
        message (and getting ignored), or spending hours customizing and sending emails one by one. Neither scales,
        and neither gives you the consistent pipeline you need. The cost is real: missed follow-ups, lost
        appointments, and prospects you never see again.</p>
      <p className="text-base text-white shadow-text pt-3">
        An automated, AI-assisted approach changes this for good. Instead of treating every contact the same, you
        send the right message at the right time, automatically. Triggers fire based on actions, interests, or
        timing, and content is tailored to what each person actually cares about. The result is not just higher <GlossaryLink slug="open-rate">open
        rates</GlossaryLink> and more replies. It is a system that works even when you are not at your desk, keeps
        your list warm, and makes sure no lead goes cold for want of a follow-up. You get the benefits of true
        personalization, but at the speed and scale your business demands.</p>
      <p className="text-base text-white shadow-text pt-3">
        This page is for small business owners and marketing leads in South Florida who are tired of the old way:
        too much manual work, not enough results. You will see exactly what is costing you time and sales today, and
        how a well-built <GlossaryLink slug="email-automation">email automation</GlossaryLink> platform can change
        it, without adding headcount, breaking your existing systems, or handing your brand to a black box. If you
        want more conversations from the leads you already have, and to do it with less effort, you are in the right
        place.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward, and Palm Beach counties struggle with the same marketing
        bottleneck: the gap between what your leads want to receive and what your current process can deliver. When
        every email looks the same, people tune out. When follow-up is inconsistent, even hot leads slip away. This
        is not a problem of creativity or effort, it is a problem of scale and process. Manual personalization
        cannot keep up as your contact list grows, and so the risk is always the same: wasted hours, lost revenue,
        and a brand that feels generic instead of trusted.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot has seen this firsthand across dozens of local implementations. We meet teams who know the
        right answer is to segment, personalize, and keep a steady follow-up cadence, but the tools and hours just
        will not stretch that far. The result is a cycle of abandoned lists, sporadic campaigns, and too many leads
        dropping off after the first touch. Compliance issues and data privacy risks only add to the headache,
        especially when staff are forced to copy, paste, and track details manually.</p>
      <p className="text-base text-white shadow-text pt-3">
        Switching to an AI-assisted, rules-based automation platform rewrites the workflow. You set the logic once,
        who gets what, when, and why, and let the platform handle delivery, tracking, and even content suggestions.
        No more guessing when to send or who needs a nudge. Triggers fire automatically based on real engagement, so
        your best leads get the right follow-up without anyone having to remember. You see results in more replies,
        more booked appointments, and a sales pipeline that moves itself forward, not just when someone has time to
        chase it.</p>
      <p className="text-base text-white shadow-text pt-3">
        We structure every project around four phases: first, align on the business outcome you need, whether it’s
        more sales, fewer no-shows, or a higher response rate. Next, assess your data: does your <GlossaryLink slug="crm">CRM</GlossaryLink> or
        lead list have the fields and structure to support smart <GlossaryLink slug="email-segmentation">segmentation</GlossaryLink>,
        and is it clean enough for automation? Then, select and architect the right platform, not just the tool with
        the flashiest AI, but the one that fits your stack and lets you start small. Finally, we run a pilot: a real
        campaign, measured in real bookings or conversions, before you roll out at scale. Throughout, we keep your
        systems and branding intact, so you get the benefit of automation without the risk of disruption.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a shorter overview, read <Link id={`use-cases-marketing-personalized-email-campaigns-lede-blog${idSuffix}`} href="/blog/marketing/content-creation-workflow/what-miami-businesses-miss-without-local-ai-automation" className="text-[#C83803] hover:underline">What
        Miami Businesses Miss Without Local AI Automation</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-manual-personalization-fails-and-how-smarter-email-campaigns-fix-it" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Manual Personalization Fails and How Smarter Email Campaigns Fix It
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
              <h2 id="why-manual-personalization-fails-and-how-smarter-email-campaigns-fix-it-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Manual Personalization Fails and How Smarter Email Campaigns Fix It
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
