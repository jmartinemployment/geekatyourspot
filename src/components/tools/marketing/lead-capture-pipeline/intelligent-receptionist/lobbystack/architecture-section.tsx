import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        LobbyStack is built as an open-source platform, not a black box. Every part of the stack is visible,
        auditable, and customizable. The core engine runs on MIT-licensed code, which means your technical team
        can inspect, fork, or modify it as needed. This is a sharp contrast to most proprietary AI receptionist
        platforms, where the logic, data flow, and update cycles are hidden behind the vendor’s wall.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deployment is flexible. You can use LobbyStack as a managed cloud service, where the vendor handles
        hosting, monitoring, and updates, or self-host it on your own servers or cloud environment. Self-hosting
        puts you in charge of everything: call data, audio recordings, transcripts, and even the AI model
        selection. The minimum requirements for a self-hosted setup are clear: Docker Engine 24 or later,
        Compose v2, Node.js 22+, and a server with at least 2 vCPU and 4GB RAM. For live calls, you’ll also need
        a domain with HTTPS for secure access, and accounts with Twilio and OpenAI for telephony and AI
        functions.</p>
      <p className="text-md text-white shadow-text pt-3">
        All customer data, call logs, recordings, summaries, and caller profiles, stay on your infrastructure
        when you self-host. If you use the managed cloud, the data lives on LobbyStack’s infrastructure,
        following standard cloud data handling practices. Either way, you get a unified operator dashboard where
        you can review call outcomes, transcripts, and recordings. You control update timing, access policies,
        and retention windows in a self-hosted setup, so compliance and privacy are never left to chance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is straightforward but focused. Out of the box, LobbyStack connects to Google Calendar for
        appointment booking. This lets the AI check your real-time availability, offer slots, and book
        appointments without manual entry. Confirmation and reminder texts are sent to US and Canadian numbers
        only, email alerts work everywhere. There are no
        direct&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;or
        business software integrations; you can connect other tools through signed webhooks or the
        REST&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>, which
        is documented and open for custom builds. This approach gives technical teams the freedom to tie
        LobbyStack into existing workflows without waiting for a vendor to build a connector.</p>
      <p className="text-md text-white shadow-text pt-3">
        The telephony layer is configurable. You set which carrier forwards calls to LobbyStack, and on paid
        plans you get a dedicated number. The platform handles unlimited concurrent calls, with usage-based
        pricing for voice minutes, transfer attempts, and SMS alerts. There are no setup fees, and calls under
        10 seconds or flagged as spam do not count against your usage.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams with strict requirements, like agencies, resellers, or regulated businesses, LobbyStack’s
        architecture is built to fit. You can run it in containers on your preferred cloud or private
        environment, use your
        own&nbsp;API&nbsp;keys
        for OpenAI and Twilio, and even white-label the deployment. Agencies can modify and distribute the stack
        for client work, as long as they respect the trademark rights. Updates for self-hosted deployments are
        manual: you pull changes from the GitHub repository, review the changelog, and redeploy when you’re
        ready. This means you are never forced onto a new version or into a vendor’s update cycle.</p>
      <p className="text-md text-white shadow-text pt-3">
        The AI’s behavior is completely open to customization. You control the greeting scripts, intake
        questions, escalation rules, and booking logic. This is not just about branding, it’s about operational
        control. If your business rules change, you update the workflow directly, with no need to submit a
        request or wait for a roadmap. For businesses that want to see exactly how calls are handled, the code
        is fully auditable. You can verify data handling, test logic, and ensure compliance with your own
        standards.</p>
      <p className="text-md text-white shadow-text pt-3">
        LobbyStack’s architecture is designed for transparency and adaptability. Whether you want a
        plug-and-play managed service or a deeply integrated, self-hosted system, the platform gives you the
        building blocks. For small businesses in Miami-Dade, Broward, and West Palm Beach, this means you can
        match your technical capabilities and compliance needs without giving up the flexibility to change as
        your business grows. The system holds your data, runs your logic, and connects to your calendar, nothing
        more, nothing less, unless you build it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-under-the-hood-lobbystack-s-architecture-integrations-and-data-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: LobbyStack’s Architecture, Integrations, and Data Control
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sits-under-the-hood-lobbystack-s-architecture-integrations-and-data-control-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sits Under the Hood: LobbyStack’s Architecture, Integrations, and Data Control
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
