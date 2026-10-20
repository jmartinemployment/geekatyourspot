import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        LobbyStack is designed for small businesses that need reliable call coverage without the cost or
        rigidity of a traditional answering service. The first thing to weigh is fit: does it actually solve the
        problem you have, at a price you can justify, with the control you need? For a plumbing or HVAC company
        in Miami, Broward, or West Palm Beach, the right tool is one that answers every call in natural
        language, books jobs, and keeps your customer data where you want it, without locking you into a closed
        system or unpredictable bills.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with the pricing structure. LobbyStack offers a free plan with 30 browser voice minutes per month,
        which is enough to test the system from your dashboard before forwarding your business line. Paid plans
        begin at $30 per month for the Starter tier, which includes a dedicated number and a monthly allowance
        of minutes. The Pro plan increases the included minutes and adds priority support. If your business
        grows or you need more control, Enterprise options are available with custom usage limits, multiple
        dedicated numbers, and dedicated implementation support. All pricing is billed in US dollars, and there
        is no setup fee. Extra minutes are charged at a published rate, and calls under 10 seconds or flagged as
        spam do not count toward your usage.</p>
      <p className="text-md text-white shadow-text pt-3">
        The fit question is not just about price. LobbyStack is open source, which means you are never locked
        into a proprietary vendor. If you start on the cloud plan and later need to self-host, you can move your
        receptionist to your own infrastructure without rebuilding your phone process from scratch. This is
        especially important for businesses with strict data privacy rules, regulatory requirements, or the need
        to integrate with other tools beyond what
        most&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;platforms
        allow. You can audit the code, review how data is handled, and set your own update and retention
        policies. That level of transparency is rare in this space.</p>
      <p className="text-md text-white shadow-text pt-3">
        To judge whether LobbyStack is a fit, walk through these questions:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Does your business need to answer calls 24/7, or just during business hours? LobbyStack supports both, with after-hours routing and message capture built in.</li>
        <li>Do you want to book appointments directly into your calendar? LobbyStack integrates with Google Calendar for direct booking and confirmation.</li>
        <li>Is your customer base multilingual? The platform supports over 70 languages, switching automatically to match the caller’s language.</li>
        <li>Do you require data to be stored and processed on your own infrastructure? LobbyStack’s self-hosted option puts you in control of call data, recordings, and transcripts.</li>
        <li>Does your business have unique intake, escalation, or routing needs? The open-source model means you can configure or extend the logic as needed.</li>
        <li>Are you concerned about vendor lock-in or future switching costs? With LobbyStack, you keep ownership of your system and data.</li>
        <li>Do you want to avoid unpredictable overage bills? Usage-based pricing is transparent, and you can start on the free plan to benchmark your call volume before committing.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        The comparison with traditional answering services is straightforward. Many live services charge per
        minute or per call, with base fees that can spike during busy months. LobbyStack’s usage-based model is
        published and predictable. If you need to scale up, say, during hurricane season or a marketing push,
        you see the cost ahead of time. Calls under 10 seconds or marked as spam are excluded from billing, so
        you are not paying for hang-ups or junk leads. For a small business, this keeps costs tied to real
        customer demand, not to idle time or spam.</p>
      <p className="text-md text-white shadow-text pt-3">
        For buyers who want to test before they commit, the free tier is a real advantage. You can run the
        system in your browser, simulate real calls, and see how the receptionist handles your actual scripts
        and booking logic. Once you are confident, forwarding your business line is a simple carrier setting. If
        you outgrow the included minutes, you move up to the next plan, no contract lock-in, no surprise fees.
        For businesses that need even more, Geek @ Your Spot LLC can help map out a custom Enterprise deployment,
        including self-hosted infrastructure and deeper integrations.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, judge LobbyStack by how well it fits your business’s real needs. If you want to keep control
        of your data, avoid vendor lock-in, and pay only for the calls that matter, it is built for you. If you
        need a system you can test, modify, and scale without waiting on a vendor’s roadmap, it delivers. Where
        your requirements go beyond what
        most&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;platforms
        will allow, custom call flows, deep integrations, or strict privacy rules, LobbyStack’s open-source
        foundation is a clear advantage. The pricing is transparent, the fit is flexible, and the control is
        yours.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-lobbystack-fit-for-small-business-and-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge LobbyStack: Fit for Small Business and Pricing Model
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
              <h2 id="how-to-judge-lobbystack-fit-for-small-business-and-pricing-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge LobbyStack: Fit for Small Business and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
