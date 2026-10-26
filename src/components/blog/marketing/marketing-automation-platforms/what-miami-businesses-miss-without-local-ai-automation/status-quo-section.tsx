import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manually running personalized email campaigns eats into your team’s time and leaves you exposed to errors
        that cost money and reputation. The price shows up in three places: wasted hours, avoidable mistakes, and
        missed opportunities. These costs do not just hit your marketing budget, they affect every part of your
        operation, from sales to customer service.</p>
      <p className="text-base text-white shadow-text pt-3">
        The hours lost are often hidden. Staff spend evenings or weekends segmenting spreadsheets, copying and
        pasting names into emails, and trying to remember which template was sent to which group. Repetitive manual
        work piles up fast. If you are handling new leads from your website or forms, someone needs to check for
        duplicates, update contact records, and send the right follow-up. When this coordination fails, leads get
        missed, or everyone gets the same bland introduction. The result is a funnel full of cold leads and no clear
        next step.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mistakes are just as common and more damaging. When you rely on manual processes, it is easy to send the
        wrong message to the wrong person, like a sales offer to someone who just bought, or a generic note to a
        high-value client expecting VIP treatment. <GlossaryLink slug="email-segmentation" className="text-[#0B162A] hover:underline">Segmentation</GlossaryLink> by
        hand leads to contacts with different needs being mixed together, so the same campaign goes to everyone
        regardless of their interest or stage. This is how people end up unsubscribing, flagging your emails as
        spam, or simply ignoring what you send. The more you try to keep track in your head or across scattered
        tools, the more likely you are to slip up.</p>
      <p className="text-base text-white shadow-text pt-3">
        The delays are real and have long-term effects. Every time a staff member has to remember to send a
        follow-up manually, there is a risk it will not happen on time, or at all. Opportunities slide by,
        especially when staff are busy or on vacation, and new leads cool off before anyone reaches out. If your
        team has to build each new campaign or <GlossaryLink slug="landing-page" className="text-[#0B162A] hover:underline">landing
        page</GlossaryLink> from scratch, staff will either rush the work or put it off, sending fewer messages and
        missing sales targets. The business absorbs the cost as missed revenue and lost customer relationships.</p>
      <p className="text-base text-white shadow-text pt-3">
        The person who absorbs these costs is usually the one least able to afford it: the owner, the office
        manager, or the one staff member who “knows the system.” When manual work piles up, they spend less time
        closing deals or serving customers. Burnout sets in, and errors multiply. In the end, the business pays
        twice, once in wasted labor, and again in lost sales. If you are not seeing clear, trackable results from
        your personalized email campaigns, the hidden cost of doing it by hand is the reason.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-doing-personalized-campaigns-by-hand-actually-costs-a-small-miami-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What doing personalized campaigns by hand actually costs a small Miami business
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
              <h2 id="what-doing-personalized-campaigns-by-hand-actually-costs-a-small-miami-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What doing personalized campaigns by hand actually costs a small Miami business
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
