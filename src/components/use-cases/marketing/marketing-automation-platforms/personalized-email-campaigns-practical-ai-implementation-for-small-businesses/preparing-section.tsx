import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The next step after deciding that personalized email automation fits your business is a structured
        assessment and rollout process. This is not a leap into the unknown, you should expect a clear, phased plan
        that starts with business objectives, checks your data readiness, selects the right tools, and only then
        moves to a pilot rollout. If you have read through the earlier sections, you know what breaks when this is
        skipped: projects stall, lists stay underused, and the &quot;automation&quot; becomes another manual chore.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, expect to define what success means for you. This could be more booked appointments, faster sales
        cycles, or fewer missed follow-ups. The business objectives inform every technical and process decision that
        follows. Next, your data gets a hard look, are your contacts accurate, do you have the fields you need to
        segment properly, is your list clean and free of old, inactive subscribers? This step cannot be glossed
        over: poor data kills automation projects before they start.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the groundwork is there, the right platform is chosen, not just for features, but for fit with your
        existing stack, staff capabilities, and budget. Brevo, for example, is strong for businesses needing to
        coordinate follow-up across email and text; GetResponse connects forms and landing pages to nurturing
        automations so no inquiry gets lost; MailerLite is a solid fit for teams wanting professional follow-up
        without the overhead of a full marketing suite; Moosend helps businesses turn a static list into a
        sequenced, always-on system; ActiveCampaign pulls your sales and marketing data into one place so nothing
        falls through the cracks; Mailchimp is a starter-to-advanced platform that grows with your team, offering
        AI-driven segmentation and send-time optimization to keep engagement high as you scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        Expect a pilot rollout, not a big-bang launch. A small, well-defined sequence, say, a welcome series for new
        leads or a follow-up for recent purchasers, is built and tested. The point is to see real results quickly,
        spot data issues, and refine before scaling to the whole list. This is where you measure the time saved, the
        increase in engagement, and the reduction in manual errors. All six partner tools mentioned above are
        designed to support incremental, low-risk rollouts, so you can validate the benefits before committing to a
        broader deployment.</p>
      <p className="text-base text-white shadow-text pt-3">
        You should also expect your team’s daily work to change. The manual grind of chasing leads, copying emails,
        and tracking replies by hand is replaced by reviewing dashboards, adjusting sequences, and focusing on the
        conversations that actually move the needle. The right automation does not replace your staff, it frees them
        to work on higher-value tasks, such as closing sales or handling exceptions that the system flags.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, expect that the process is not &quot;set and forget.&quot; The best results come from regular
        reviews, checking which messages are converting, which segments are engaging, and where drop-offs happen.
        Every tool above offers reporting and analytics to guide these reviews. You should plan for quarterly
        check-ins to review the data, tweak your workflows, and keep your campaigns in line with your business as it
        evolves. This is where the real payoff comes: a system that keeps getting smarter, more efficient, and more
        aligned with your business goals as you grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`use-cases-marketing-personalized-email-campaigns-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What is the main result you want: more appointments, more completed purchases, repeat business, or
          reactivating past customers?</li>
        <li>Who would receive these emails, new inquiries, subscribers, existing customers, inactive customers, or
          people who have never contacted you?</li>
        <li>Where are you losing opportunities today, after an inquiry, after a quote, before checkout, or after the
          first purchase?</li>
        <li>What do you want someone to do after reading the email?</li>
        <li>What follow-up do you send now, and where does it stop?</li>
        <li>How many contacts do you have, and where did they come from?</li>
        <li>How are subscription permissions, unsubscribes, and do-not-contact records documented?</li>
        <li>Besides names and email addresses, what do you know about each contact?</li>
        <li>Is that information stored in one system or spread across spreadsheets, inboxes, and other applications?</li>
        <li>Do different customers need different offers or messages? Give me two examples.</li>
        <li>Which customer details should never be sent to an AI service or included in an email?</li>
        <li>What should start an <GlossaryLink slug="email-sequence">email sequence</GlossaryLink>, a form submission,
          appointment, quote request, purchase, or period of inactivity?</li>
        <li>Should everyone receive the same sequence, or should it change based on their interests and actions?</li>
        <li>What should stop the emails, a reply, booking, purchase, unsubscribe, or staff intervention?</li>
        <li>What email, CRM, website, booking, and online-store systems do you already use?</li>
        <li>Do you need only email, or also landing pages, forms, <GlossaryLink slug="sms-marketing">SMS</GlossaryLink>,
          or other channels?</li>
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
              <h2 id="your-next-steps" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Your Next Steps
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
              <h2 id="your-next-steps-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Your Next Steps
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
