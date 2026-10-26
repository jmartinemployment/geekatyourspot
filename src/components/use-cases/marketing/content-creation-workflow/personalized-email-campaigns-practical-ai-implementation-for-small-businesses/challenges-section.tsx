import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual email personalization fails for small businesses because it cannot keep up with the number of
        contacts, the variety of customer needs, or the pace of daily operations. The main problems are generic
        blasts that get ignored, inconsistent follow-up, and wasted effort on segmenting and writing emails by hand.
        Every operator breakdown listed for the leading platforms comes back to these same friction points: the
        wrong message sent at the wrong time, and too much work for too little result.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first place things go wrong is the generic send. When you blast the same offer or update to your whole
        list, most people ignore it or mark it as spam. This happens because the message is not relevant to their
        recent activity or interests. Brevo addresses this with behavioral grouping, so emails go out when each
        person is most likely to open them and with content keyed to their past engagement. Without this, your open
        rates drop, and customers tune you out. Segmentation by hand, meanwhile, is slow and error-prone, so most
        teams skip it or do it once and never update it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes the missed follow-up. Leads arrive from forms, chats, or sales calls, but they often enter a
        single catch-all list with no clear next step. <Link id={`use-cases-marketing-personalized-email-campaigns-challenges-getresponse${idSuffix}`} href="/tools/marketing/content-creation-workflow/personalized-email-campaigns/getresponse" className="text-[#C83803] hover:underline">GetResponse</Link> is
        built to fix this exact problem by linking forms and <GlossaryLink slug="landing-page">landing pages</GlossaryLink> straight
        to automated <GlossaryLink slug="lead-nurturing">nurture sequences</GlossaryLink>. When this step is handled
        manually, copying leads to a spreadsheet or sending one-off messages, people slip through the cracks. The
        first message may go out, but there is no timed follow-up, no next step if they do not reply, and no way to
        track who is ready to buy versus who needs more information.</p>
      <p className="text-base text-white shadow-text pt-3">
        List growth also brings in another layer of risk: contacts collected from different channels receive
        inconsistent outreach, or worse, nothing at all. <Link id={`use-cases-marketing-personalized-email-campaigns-challenges-mailerlite${idSuffix}`} href="/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite" className="text-[#C83803] hover:underline">MailerLite</Link> addresses
        this by tying every signup form or landing page to a defined workflow, so nobody gets lost between systems
        or teams. Without this, your list becomes a patchwork of old and new contacts, with interests mixed, and
        your branding and calls to action lose their impact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization at scale is almost impossible by hand. Staff are forced to copy and paste, update names, and
        try to remember who saw what last. <Link id={`use-cases-marketing-personalized-email-campaigns-challenges-moosend${idSuffix}`} href="/tools/marketing/content-creation-workflow/personalized-email-campaigns/moosend" className="text-[#C83803] hover:underline">Moosend</Link> and <Link id={`use-cases-marketing-personalized-email-campaigns-challenges-activecampaign${idSuffix}`} href="/tools/marketing/active-campaign" className="text-[#C83803] hover:underline">ActiveCampaign</Link> both
        automate these steps: Moosend uses <GlossaryLink slug="contact-tagging">tags</GlossaryLink> and segments to
        split contacts by interest or stage, and ActiveCampaign connects engagement data to sales pipelines for
        better targeting. When teams try to do this themselves, repetitive follow-ups get missed, and <GlossaryLink slug="qualified-lead">qualified
        leads</GlossaryLink> wait too long for a response.</p>
      <p className="text-base text-white shadow-text pt-3">
        As lists grow, the risk of sending the wrong message to the wrong person rises. Engaged and disengaged
        contacts are treated the same. Moosend solves this by targeting campaigns based on recent behavior, but a
        manual setup sends everyone the same message, increasing <GlossaryLink slug="opt-out">unsubscribes</GlossaryLink> and
        lowering <GlossaryLink slug="conversion-rate">conversion rates</GlossaryLink>. Staff time is burned chasing
        low-probability leads while high-intent prospects go cold waiting for a reply.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, teams waste hours rebuilding the same campaigns and templates from scratch because there is no
        system for tracking what worked or reusing assets. Moosend’s automation recipes and AI Writer are designed
        to fix this by allowing quick drafting and recycling of content for new campaigns. Manual processes lose
        these learnings and create more room for error and inconsistency.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`use-cases-marketing-personalized-email-campaigns-challenges-mailchimp${idSuffix}`} href="/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp" className="text-[#C83803] hover:underline">Mailchimp</Link>,
        designed for small businesses that need to scale from a handful of contacts to thousands, addresses the
        problem of outgrowing entry-level tools. Without automation, businesses face sudden price hikes and have to
        manage more features than they need or can use. Mailchimp’s tiered approach and AI-driven suggestions for
        subject lines and send times keep campaigns effective and affordable as needs change.</p>
      <p className="text-base text-white shadow-text pt-3">
        In each case, the core failures are the same: messages go out late, to the wrong people, or not at all, and
        the team spends too much time on work that does not move the business forward. Automation platforms like
        Brevo, GetResponse, MailerLite, Moosend, ActiveCampaign, and Mailchimp solve these by targeting, segmenting,
        and sending at the right time, with the right content, something manual processes cannot deliver as your
        business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="manual-personalization-breaks-down-as-lists-grow-and-follow-up-fails" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Manual Personalization Breaks Down as Lists Grow and Follow-Up Fails
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
              <h2 id="manual-personalization-breaks-down-as-lists-grow-and-follow-up-fails-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Manual Personalization Breaks Down as Lists Grow and Follow-Up Fails
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
