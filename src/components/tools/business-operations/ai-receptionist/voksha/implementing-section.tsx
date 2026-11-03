import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Voksha is not the drawn-out, IT-heavy project that comes with most enterprise
        receptionist systems. For small businesses in Miami-Dade, Broward, and West Palm Beach, the process is
        designed to be fast, low-risk, and specific to the way local teams actually work. The entire setup can
        be completed in minutes for basic call handling, with more advanced features and integrations added as
        needed. There is no need to wait for a deployment window or block off a week for training: the system is
        built for owners and managers who want to see results by the end of the day, not by the end of the
        quarter.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is simple: decide which phone number will forward to Voksha. There is no need to change
        your business number or print new cards. Calls route to Voksha behind the scenes, so your team and your
        customers use the same contact details as always. For many businesses, this means setting up conditional
        forwarding, Voksha only picks up when the line is busy or after-hours, so your front desk stays in
        control during the day and nothing is missed when the team is tied up or out of office. This approach is
        especially common in medical clinics and salons, where staff need to focus on in-person customers but
        cannot afford to miss a new booking or urgent inquiry.</p>
      <p className="text-base text-white shadow-text pt-3">
        Voksha’s onboarding relies on plain-language scripts, not technical logic trees. You describe what your
        business does, the questions you want asked, and how you want urgent calls handled. Voksha then uses
        these details to greet callers, answer FAQs, and qualify leads. On the Premium plan, it can also book
        appointments directly into your connected calendar, Google, Outlook, or Apple iCloud, without manual
        intervention. For dental practices, a Dentrix integration is available through Voksha support. This
        means that even if your business has never used an automated receptionist before, you do not need an IT
        background or a dedicated admin to get started.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is structured for phased rollout. Start with basic call answering: every call gets picked
        up, details are captured, and summaries are sent to you by email or SMS. As the team gets comfortable,
        you can add lead qualification flows, appointment booking, and
        custom&nbsp;<GlossaryLink slug="call-routing">call routing</GlossaryLink>&nbsp;for urgent or complex
        cases. If you want to change a script or adjust the intake questions, edits take effect immediately, no
        ticketing system, no waiting for a vendor to push an update. This flexibility is critical for businesses
        that see their call patterns shift seasonally or as they grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the go-live process is the combination of pre-built industry templates and the ability to
        adjust configurations on the fly. Voksha ships with ready-to-use scripts for common industries, law
        firms, salons, medical clinics, HVAC, real estate, so you are not starting from scratch. These templates
        cover the questions and flows that matter most for each sector, but you can customize them at any time
        as you learn what works for your customers. For example, an HVAC company can set up a flow to ask about
        address, equipment brand, and system age before booking a service call, then tweak those questions if
        the team finds a gap in the information coming in.</p>
      <p className="text-base text-white shadow-text pt-3">
        There are no contracts, no setup fees, and no minimum terms. If you need to change your plan or cancel,
        you do it from the dashboard, no calls to a sales rep required. Overage is billed at a flat $1 per call,
        so there are no surprise charges for a busy week or month. Email alerts at 75% and 90% of your included
        call volume keep you informed, and spam or robocalls filtered out by Voksha do not count toward your
        plan. This predictability is what lets small teams budget confidently, without the fear of being locked
        into a system that overshoots their needs or explodes in cost when business picks up.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business owner, the real advantage is that Voksha is not another system that demands hours
        of setup and constant attention. It is a tool that fits around the way you already work, with the
        ability to scale up features and volume as you grow. Geek @ Your Spot LLC closes the gap by handling the
        integration and configuration, mapping Voksha’s flows to your real-world processes, and making sure the
        system is live and tuned for your lead capture pipeline. The team can start seeing the benefits, fewer
        missed calls, more booked appointments, less time on routine questions, within the first week, not the
        first quarter.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-launching-voksha-looks-like-in-a-real-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Launching Voksha Looks Like in a Real Small Business Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-launching-voksha-looks-like-in-a-real-small-business-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Launching Voksha Looks Like in a Real Small Business Environment
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
