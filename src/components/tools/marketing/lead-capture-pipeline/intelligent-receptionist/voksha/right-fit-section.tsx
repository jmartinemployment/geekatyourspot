export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Voksha is built for small, service-based businesses that need every call answered but cannot justify
        hiring extra staff or paying enterprise software rates. The pricing, setup, and feature set are all
        aimed at teams who want to solve the missed-call problem without adding complexity or risk. If you are a
        law firm, dental practice, salon, real estate agency, restaurant, or HVAC company in South Florida,
        Voksha is designed with your workflow in mind. It covers the basics: taking calls, booking appointments,
        qualifying leads, and logging every interaction so nothing falls through the cracks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The businesses that see the most value from Voksha are those where a missed call is a missed sale, and
        where staff cannot afford to be pulled away from customers or urgent work. If your team is small, maybe
        just you and an assistant, or a handful of people who wear multiple hats, Voksha fills the front desk
        role reliably, day and night. You do not need to train anyone, manage schedules, or worry about sick
        days. The system is always on, always consistent, and always follows your script.</p>
      <p className="text-base text-white shadow-text pt-3">
        Voksha is also a fit for businesses with unpredictable or variable call volumes. Because the platform
        charges by the call, not by the minute, you are not penalized for busy weeks or left paying for unused
        capacity in slow months. There is no contract or minimum term, so you can scale up or down without risk.
        This is especially useful for seasonal businesses, or those that have growth spurts and do not want to
        renegotiate software licenses every quarter.</p>
      <p className="text-base text-white shadow-text pt-3">
        There are, however, situations where Voksha is not the right tool. If your business requires
        deep&nbsp;CRM&nbsp;integrations, highly customized workflows, or
        multi-channel engagement (chat, SMS, email, social) all in one platform, Voksha’s focused approach may
        feel limiting. The system is not built to replace a full-service call center or to handle complex
        customer journeys that span multiple channels and departments. For businesses that want advanced
        analytics, custom reporting, or integrations with industry-specific platforms beyond what Voksha
        currently offers, another tool may fit better.</p>
      <p className="text-base text-white shadow-text pt-3">
        Medical practices that need HIPAA-compliant handling for every call should note that Voksha’s HIPAA
        support is available only on the Enterprise plan. For most small clinics, the Starter or Premium plans
        will cover the basics, but if regulatory compliance is a non-negotiable, confirm the details before
        deploying. Similarly, if your business needs a receptionist who can handle sensitive, emotional, or
        highly nuanced conversations, where human judgment is required, then a live receptionist service,
        despite the higher cost, may be worth it.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are not sure whether Voksha fits your workflow, the next step is to look at your call volume, the
        types of calls you receive, and what happens when you miss a call. Compare your actual numbers against
        Voksha’s pricing and feature set, and weigh them against the alternatives. If your team spends more time
        dealing with missed calls, message pads, and lost leads than serving customers, Voksha can return those
        hours and keep your pipeline full. If your needs are more complex or specialized, it is better to
        identify that now and look for a tool that matches your requirements exactly, rather than stretching a
        platform beyond what it does well.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC works with businesses across Miami-Dade, Broward, and West Palm Beach to make sure the
        Intelligent Receptionist setup matches the real-world needs of each client. If Voksha is a fit, the
        deployment is fast and focused. If it is not, the right answer is to choose a tool that fits your
        business, not to force a mismatch. The cost of getting the decision wrong is not just wasted money, it
        is more missed calls, more lost leads, and more stress for a team that is already stretched thin. The
        best outcome is the one where your phones are answered, your team is free to do their real work, and
        your customers never know you were busy in the first place.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<button type="button" data-scheduler-link id={`tools-marketing-intelligent-receptionist-voksha-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">booking
        your free consultation</button>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How many phone calls do you currently miss or send to voicemail each week, both during business hours and after hours?</li>
        <li>When a prospect hangs up without leaving a voicemail, what is your current process for recapturing that lead?</li>
        <li>Do you experience sudden spikes in call volume (e.g., seasonal demands, ad campaigns) that temporarily overwhelm your current staff?</li>
        <li>What is the exact sequence of events that needs to happen when a new client calls to book an appointment or request a service?</li>
        <li>Which calendar or scheduling platform do you use, and do you require the AI to write appointments directly to it?</li>
        <li>What percentage of your inbound calls are just repetitive questions regarding your location, operating hours, pricing tier, or basic services?</li>
        <li>What Customer Relationship Management (CRM), billing, or field service management software does your business rely on daily?</li>
        <li>Are you looking to unify your voice calls with other communication channels, like SMS text messaging and website live chat, into one master dashboard?</li>
        <li>Does your business require automated text-backs during a call to send digital intake forms, payment links, or address locations?</li>
        <li>What is your target market&#39;s tolerance for interacting with automated voices? Do you cater to an elite or older demographic that demands a human touch?</li>
        <li>Are there strict industry compliance guardrails (like HIPAA for medical offices or trust account rules for lawyers) governing how client information is gathered?</li>
        <li>What specific criteria or emergency situations should trigger the AI to instantly transfer a live caller to your personal cell phone or an on-call team member?</li>
        <li>Do you prefer a predictable, fixed monthly software bill, or are you comfortable with a variable pay-per-minute or pay-per-call model as your business grows?</li>
        <li>How critical is total data ownership to your business? Do you prefer a turnkey cloud subscription, or do you want a proprietary system that your business fully owns and controls?</li>
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
              <h2 id="who-voksha-is-right-for-and-what-to-do-if-it-isn-t-a-fit" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Voksha Is Right For and What to Do If It Isn’t a Fit
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
              <h2 id="who-voksha-is-right-for-and-what-to-do-if-it-isn-t-a-fit-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Voksha Is Right For and What to Do If It Isn’t a Fit
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
