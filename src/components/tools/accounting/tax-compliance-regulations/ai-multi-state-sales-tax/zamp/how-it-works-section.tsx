import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Zamp does not hand you a dashboard and leave you to figure out the rest. The core of its approach is
        full-service automation, where the platform and its tax team assume direct responsibility for every
        major compliance action. For a small business owner in South Florida, this means the entire chain from
        nexus detection to final state remittance is managed with minimal internal effort. The mechanics behind
        Zamp are built for teams without a dedicated tax department, closing the gap between complex
        state-by-state rules and day-to-day business needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with data ingestion. Zamp connects to your sales channels, Shopify, Amazon,
        BigCommerce, Magento, and major ERPs, importing transactional data across all platforms. As soon as you
        connect your accounts, Zamp pulls historical and current sales, refunds, and adjustments, so it can
        analyze your exposure against each state’s economic and physical nexus thresholds. This is not a
        one-time check. Zamp’s system monitors your sales in real time, alerting you when you approach 80% of a
        state’s threshold and triggering registration workflows as soon as a trigger is crossed.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Continuous Nexus Monitoring: Zamp reviews both economic and physical presence across all channels, tracking sales and remote employee locations to identify new tax obligations the moment they arise.</li>
        <li>Product Mapping and Classification: During onboarding, Zamp’s specialists manually map your full product catalog to the correct tax codes for each jurisdiction. This prevents misclassification errors that could lead to missed exemptions or over-collection.</li>
        <li>Automatic Registration: When a threshold is reached, Zamp’s team files the necessary paperwork with the state, sets up tax accounts, and ensures your business is registered before the first dollar is collected. You do not touch a portal or submit forms yourself.</li>
        <li>Filing and Remittance: Zamp prepares, reviews, and submits all state and local tax returns, covering every jurisdiction, including home-rule cities, based on the actual amounts collected through your connected sales channels. Payments are remitted directly by Zamp’s platform, not left for your team to schedule.</li>
        <li>Notice and Audit Handling: Zamp monitors state portals and your mail for notices, digitizes and classifies them, and manages the full resolution process. If a state sends a letter or launches an audit, Zamp’s team responds, provides documentation, and closes out the issue, your team is kept informed, but not responsible for the legwork.</li>
        <li>Ongoing&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">Data Quality</GlossaryLink>&nbsp;and Reconciliation: Before any return is filed, Zamp’s tax professionals review the data, using AI-driven anomaly detection to catch discrepancies. Returns and liabilities are reconciled to your&nbsp;ERP&nbsp;or general ledger, ensuring accuracy that stands up in an audit.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        This hands-off execution is not a theoretical promise. Zamp’s managed approach means your team’s role is
        oversight and approval, not daily coordination, follow-up, or troubleshooting. Even when your sales
        channels or tax rules change, such as a Shopify update or a new state law, Zamp incorporates those
        changes into its workflows automatically. You do not have to reconfigure settings or chase down support
        tickets.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a business that has just crossed into multi-state nexus, this means no more guessing about when to
        register, which rates to apply, or how to file in states with unique rules. Zamp’s system covers all
        state and local returns in one fee, with no surprise charges for extra filings or registrations. The
        platform’s team is reachable by phone or email for direct support, not a ticket queue. The result:
        owners can focus on growth, knowing that every compliance step is managed from start to finish.</p>
      <p className="text-base text-white shadow-text pt-3">
        When the South Florida team from the opening story checks their Zamp dashboard on a Friday, they see a
        clear status for every state: where they have nexus, which filings are in progress, and any notices
        being resolved. There are no red flags, no unanswered letters, and no late-night calls to a state tax
        department. Zamp’s mechanics are designed so that the only time the owner needs to act is to review and
        sign off, leaving the rest to a platform and team that specialize in keeping small businesses
        audit-ready, even as they scale across state lines.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-zamp-takes-to-make-multi-state-sales-tax-compliance-hands-off" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Zamp Takes to Make Multi-State Sales Tax Compliance Hands-Off
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="every-step-zamp-takes-to-make-multi-state-sales-tax-compliance-hands-off-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Every Step Zamp Takes to Make Multi-State Sales Tax Compliance Hands-Off
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
