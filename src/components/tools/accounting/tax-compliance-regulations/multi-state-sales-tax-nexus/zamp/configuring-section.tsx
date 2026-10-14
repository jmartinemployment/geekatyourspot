import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Zamp is not a plug-and-play tax calculator. Every deployment starts with a careful setup of its own
        rules and automation logic, tailored to the way your business sells across state lines. Geek @ Your Spot
        configures Zamp so it fits your sales channels, product catalog, and reporting needs, making compliance
        possible for small teams that cannot spare a full-time tax manager.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Zamp’s configuration is its real-time nexus monitoring. Zamp tracks both economic and
        physical nexus triggers, watching your sales across every channel, Shopify, Amazon, BigCommerce,
        Magento, and custom platforms, against each state’s thresholds. This is not a static lookup; Zamp’s
        platform continuously pulls in new sales data and alerts you as you approach 80% of a state’s threshold,
        so you can act before you are exposed. Geek @ Your Spot ensures the right integrations are live and that
        all relevant transaction sources are mapped into Zamp’s compliance engine.</p>
      <p className="text-md text-white shadow-text pt-3">
        Product mapping is another critical step. Zamp does not rely on generic product codes alone. Its
        technical onboarding includes a manual review and mapping of your full product catalog to the right
        state-specific tax codes. For businesses selling items with complex or changing taxability, software,
        apparel, digital goods, this prevents costly misclassification. Geek @ Your Spot works directly with
        your data, resolving edge cases and custom SKUs that off-the-shelf tools would mishandle. This step is
        not optional: misclassifying a product can mean months of over- or under-collected tax, triggering
        audits or customer disputes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp’s automation logic covers more than just calculation. It manages registrations, filings,
        remittance, and notice handling end to end. Once you cross a threshold, Zamp’s platform and team
        register your business in the new state, handle the paperwork, and add the state to your compliance
        calendar. You do not touch state portals or chase deadlines, Zamp’s automation and human oversight take
        over. Geek @ Your Spot configures notification flows so you see only what matters: review and sign-off,
        not the underlying coordination.</p>
      <p className="text-md text-white shadow-text pt-3">
        Notice management is built in. Zamp monitors state portals daily, digitizes physical mail, and uses AI
        to classify and escalate notices. Every notice is tracked, reviewed, and resolved by Zamp’s team, so you
        never have to interpret a letter or manage an audit request yourself. Geek @ Your Spot ensures your
        registered business address is set up for this process, avoiding the pitfalls of virtual mailboxes that
        break state communication chains.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp’s extension mechanism is integration-focused. It connects to leading ERPs, billing systems, and
        e-commerce platforms, and it supports custom stacks through
        its&nbsp;<GlossaryLink slug="api">API</GlossaryLink>. Geek @ Your Spot handles the technical lift:
        connecting Zamp to your QuickBooks,&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>, or order
        management system, mapping fields, and validating data flows. There is no scripting or custom code
        required from your side, Zamp’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;and integration
        layer are handled as part of the onboarding.</p>
      <p className="text-md text-white shadow-text pt-3">
        For historical compliance, Zamp can import prior-period orders, refunds, and adjustments to establish a
        complete nexus and filing history. Geek @ Your Spot configures the backfill process, selecting the right
        data range and ensuring accuracy before Zamp’s automation takes over. This is essential for businesses
        that have already crossed thresholds without realizing it, Zamp’s setup closes the gap, so you do not
        start with legacy exposure.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout, Geek @ Your Spot’s role is to bridge your existing environment with Zamp’s automation. That
        means more than connecting a tool: it means reviewing your sales flows, cleaning up data, resolving
        mismatches, and training your team on how to oversee the system without needing to manage it. Zamp’s
        configuration is not a one-time event; as your business grows and adds channels or new products, Geek @
        Your Spot adapts the setup so compliance keeps pace with your expansion.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is a system that runs in the background, flagging only the decisions that require your input.
        You do not manage the rules, chase updates, or troubleshoot broken integrations. Zamp and Geek @ Your
        Spot handle the mechanics, so your business stays compliant without the overhead of a tax department.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-zamp-rules-automation-and-what-geek-your-spot-delivers" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Zamp: Rules, Automation, and What Geek @ Your Spot Delivers
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-zamp-rules-automation-and-what-geek-your-spot-delivers" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring Zamp: Rules, Automation, and What Geek @ Your Spot Delivers
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
