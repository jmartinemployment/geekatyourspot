import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk is built for small businesses that need to capture every lead and keep their calendar
        full without hiring a full-time receptionist. The first thing to judge is fit: does the way My AI Front
        Desk works match the way your business operates, and does its cost structure actually save you money
        compared to the alternatives?</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with who it is for. My AI Front Desk is not a generic call center platform. Its own documentation
        makes clear it was designed for solo operators, micro-teams, and small businesses, especially those who
        cannot justify the cost of a live answering service or a dedicated front desk hire. If you are a
        one-person business, a contractor juggling jobs, or a small clinic that cannot miss a call, this is the
        target use case. The platform is not built for high-volume enterprise call centers or companies with
        complex,
        multi-layered&nbsp;<GlossaryLink slug="call-routing" className="text-[#0B162A] hover:underline">call
        routing</GlossaryLink>&nbsp;needs. Its sweet spot is the small business that wants to automate the front
        desk without sacrificing professionalism or missing out on after-hours leads.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model is transparent and designed for predictability. My AI Front Desk offers a free plan
        with limited minutes and no credit card required, so you can evaluate fit without risk. Paid plans start
        at $99 per month (or $79 per month billed annually) and include 200 voice minutes, with overage billed
        as usage grows. There is no contract, no hardware, and no per-seat charge, unlimited users can access
        the dashboard and reporting. For businesses that rely heavily on SMS, the Business-in-a-Box plan adds
        400 messages per month alongside voice, chat,
        and&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;features.
        If you have higher call volume or multiple locations, an enterprise plan is available with custom
        pricing. All plans come with a 7-day free trial.</p>
      <p className="text-md text-white shadow-text pt-3">
        What you are buying is not just call coverage, but a reduction in missed opportunities. My AI Front Desk
        replaces the cost and unpredictability of per-minute live answering services with a flat monthly fee and
        a self-service model. The cost covers instant call answering, lead qualification, appointment
        booking,&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;integration,
        and multilingual support. For most small businesses, the savings come from eliminating the need for a
        full-time receptionist or expensive after-hours coverage. The platform is designed to make sure every
        call is answered, every lead is logged, and no opportunity is lost to a competitor who picks up first.</p>
      <p className="text-md text-white shadow-text pt-3">
        To judge fit, weigh these factors:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Does your business lose revenue to missed calls, after-hours inquiries, or slow response times?</li>
        <li>Do you want to automate routine questions, bookings, and lead capture without adding more staff?</li>
        <li>Are you comfortable with a self-service setup, or do you need a partner like Geek @ Your Spot LLC to configure and maintain the system for you?</li>
        <li>Does your workflow depend on integration with Google Calendar, Outlook, Calendly, HubSpot, Salesforce, Pipedrive, Zoho, or Shopify?</li>
        <li>Is your client base multilingual, or do you want to serve callers in Spanish, French, Portuguese, or Mandarin without hiring bilingual staff?</li>
        <li>Is a predictable, flat monthly cost preferable to unpredictable per-call or per-minute billing?</li>
        <li>Do you want unlimited dashboard users, so your whole team can access call logs and reporting without extra cost?</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The real cost is not just the monthly fee, but the time and revenue returned to your business when you
        stop missing calls and chasing voicemails. My AI Front Desk&#39;s reporting lets you see call volume,
        missed calls, peak hours, and conversion outcomes, so you can measure the impact directly. For most
        small businesses, the cost is covered by the first lead that would have otherwise gone to voicemail or a
        competitor.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are comparing My AI Front Desk to traditional answering services, look at the total cost of
        ownership. Live services often charge per minute, add fees for after-hours coverage, and cap the number
        of calls or users. My AI Front Desk runs 24/7, handles unlimited concurrent calls, and never puts a
        caller on hold. The cost does not increase when your business grows, and there is no penalty for scaling
        up during peak season.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where Geek @ Your Spot LLC adds value is in making sure you get the fit right from the start. They help you
        clarify your business objectives, assess your call and lead data, and choose the plan that matches your
        real-world usage. They handle the setup, integration, and ongoing tuning, so you do not pay for features
        you do not need or miss out on automation that could save you hours every week. The fit is not just
        about software, it is about how the platform fits into your business, your team, and your growth plan.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-my-ai-front-desk-fit-for-your-business-and-the-real-cost-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge My AI Front Desk: Fit for Your Business and the Real Cost Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-my-ai-front-desk-fit-for-your-business-and-the-real-cost-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge My AI Front Desk: Fit for Your Business and the Real Cost Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
