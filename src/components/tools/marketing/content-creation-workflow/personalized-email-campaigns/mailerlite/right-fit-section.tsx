import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite is a strong fit for small businesses in South Florida that want to run professional, personalized
        email campaigns without hiring a full-time marketing manager or buying into a complex enterprise platform.
        It is built for teams that need automation, segmentation, and branded templates, but do not want to spend
        weeks on setup or rely on outside developers to make changes. If your goal is to send timely, relevant
        messages that convert leads and keep customers engaged, MailerLite delivers the tools to do that
        efficiently.</p>
      <p className="text-base text-white shadow-text pt-3">
        Businesses that benefit most from MailerLite are those with a clear need for automation and segmentation,
        but limited in-house marketing resources. If you are running a retail shop, local service, nonprofit, or
        professional practice and your email list is growing past what you can manage by hand, MailerLite lets you
        scale up without adding complexity. It is also suitable for teams that want to test and optimize their
        campaigns over time, using built-in reporting to track what works, so you can improve results without
        guessing.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, MailerLite is not the right platform for every business. If you need deep CRM
        integration, advanced SMS or multi-channel automation, or highly customized workflows that span multiple
        business units, MailerLite’s focus on simplicity may feel limiting. Larger organizations or those with
        complex sales cycles might find its automation builder less flexible than the top-end enterprise suites. And
        if your team already relies on a platform that combines email, CRM, SMS, and web chat in one, MailerLite’s
        email-first approach may not replace that stack.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that want to move forward with MailerLite, the next step is a focused implementation. This
        means starting with a clear objective, such as increasing lead follow-up, reducing manual workload, or
        improving campaign relevance, and mapping your existing contact data to MailerLite’s segmentation and
        automation structure. Geek @ Your Spot works with local teams to make this transition smooth: defining
        segments, setting up branded templates, configuring triggers, and integrating forms and ecommerce platforms
        where needed. The goal is to get you sending your first personalized email campaigns quickly, with all the
        reporting and automation in place to measure success.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are still weighing options, compare MailerLite directly to what you use now and what you are
        considering. Look at how each platform handles segmentation, automation, template management, and reporting,
        these are the areas where manual work and errors pile up fast. A good fit means your team spends less time
        managing lists and building emails, and more time acting on what your data tells you. If that is what you
        want from your email marketing, MailerLite is built for your scale and your week, not for an enterprise with
        a dedicated IT staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        The decision comes down to what matters most for your business: if you need simple, reliable automation and
        personalization that fits your team and your budget, MailerLite is worth serious consideration. For South
        Florida small businesses ready to step up from generic batch emails to campaigns that actually drive
        results, it is a platform that delivers what it promises, without a learning curve that gets in the way.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-personalized-email-campaigns-mailerlite-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
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
        <li>Do you need only email, or also landing pages, forms, SMS, or other channels?</li>
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
              <h2 id="who-mailerlite-is-right-for-who-it-is-not-and-how-to-move-forward" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who MailerLite is right for, who it is not, and how to move forward
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
              <h2 id="who-mailerlite-is-right-for-who-it-is-not-and-how-to-move-forward-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who MailerLite is right for, who it is not, and how to move forward
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
