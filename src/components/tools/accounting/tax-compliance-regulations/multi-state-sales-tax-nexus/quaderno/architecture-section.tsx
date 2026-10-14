import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno’s architecture is designed for flexibility, reliability, and direct integration with the
        systems small businesses already use. At its core, Quaderno is a cloud-based platform that connects to a
        wide range of payment processors, e-commerce storefronts, accounting systems, and custom sales channels.
        This lets it aggregate all your transaction data in one place, regardless of how many platforms or
        gateways you use.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform supports direct integrations with Stripe, PayPal, Braintree, GoCardless, Shopify,
        WooCommerce, Squarespace, Paddle, Amazon FBA, and Zapier. You can also connect custom setups using
        Quaderno’s&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;or
        by importing CSV files. Each integration is built to sync data automatically, sales, refunds, customer
        details, and payment status, so you do not have to manually export or reconcile records. For
        subscription businesses, the Stripe Billing integration allows Quaderno to handle recurring payments,
        plan changes,
        and&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;for
        complex&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>&nbsp;workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Quaderno is stack-independent. Unlike tax tools that only work inside a single payment provider’s
        ecosystem, Quaderno ingests data from
        any&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>,
        database, or marketplace. This means you can sell through multiple channels, your website, Amazon,
        Shopify, and more, and Quaderno will centralize all tax calculations and reporting. If your business
        uses WooCommerce, you can connect multiple stores to one Quaderno account, provided they are under the
        same legal entity. The platform tracks sales by state and country across every connected channel,
        providing a single source of truth for compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the accounting side, Quaderno integrates with Xero and QuickBooks Online. This connection feeds
        clean, tax-compliant data directly into your general ledger, eliminating the need for manual data entry
        or reconciliation. Payments from Stripe, PayPal, GoCardless, and Braintree can be mapped to their own
        accounts within Xero, sorted by invoice currency and payment processor. This level of automation reduces
        errors and gives your accountant or bookkeeper accurate, audit-ready records.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are built in. Quaderno is fully GDPR compliant, using bank-grade encryption for
        data both at rest and in transit. The platform supports multi-factor authentication and role-based
        permissions, so only authorized team members can access sensitive client or financial data. This is
        especially important for firms managing multiple client accounts or for businesses with distributed
        teams.</p>
      <p className="text-md text-white shadow-text pt-3">
        For reporting, Quaderno generates instant, location-specific tax reports that break down gross sales,
        taxable sales, and tax collected by state, country, or local authority. Reports are updated daily, and
        you can download them in one click for filing or sharing with your CPA. The platform’s architecture is
        designed to handle high-volume, multi-jurisdiction sales without slowing down or losing accuracy, making
        it suitable for scaling businesses that need to keep up with changing tax rules in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you sell digital
        goods,&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>, or
        physical products across state lines, Quaderno’s architecture ensures that every transaction is tracked,
        every compliance rule is checked, and every invoice is generated in the right format. You do not have to
        change your billing system or overhaul your workflow, Quaderno fits around your existing stack,
        centralizing all tax-related data and automating the steps that used to require hours of manual work.
        For a South Florida small business growing into new states, this means you can add new sales channels,
        payment methods, or product lines without creating new compliance headaches.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="inside-quaderno-s-architecture-integrations-data-flow-and-security" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside Quaderno’s Architecture: Integrations, Data Flow, and Security
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
              <h2 id="inside-quaderno-s-architecture-integrations-data-flow-and-security" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Inside Quaderno’s Architecture: Integrations, Data Flow, and Security
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
