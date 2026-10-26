import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite is built as a modular, cloud-based platform that fits into the rest of your marketing and sales
        tools. Every feature, email automation, segmentation, templates, forms, landing pages, runs from a single
        dashboard, so you never have to jump between disconnected apps or worry about syncing data by hand. This
        structure is what makes MailerLite practical for small businesses that need reliable automation without IT
        overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        Subscriber data is at the core of the system. Every contact you collect, whether from a website form,
        pop-up, landing page, or manual import, lands in a central database. You can store standard fields like name
        and email, but also create custom fields for anything that matters to your business: location, purchase
        history, preferences, or <GlossaryLink slug="contact-tagging" className="text-[#0B162A] hover:underline">tags</GlossaryLink>.
        This flexible <GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data model</GlossaryLink> lets
        you segment and target with precision, and it updates in real time as new data comes in.</p>
      <p className="text-base text-white shadow-text pt-3">
        Forms and landing pages are native parts of the platform. You can design signup forms, pop-ups, and full
        landing pages using the same drag-and-drop builder as your emails. Each form can be set to add new
        subscribers to a specific group, segment, or automation workflow, so every contact is routed to the right
        sequence from the start. Embedded forms work on any website and integrate directly with platforms like
        Shopify, Wix, Squarespace, Prestashop, and BigCommerce. When a customer signs up or makes a purchase, their
        information flows instantly into MailerLite, no manual export or copy-paste required.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrations are a major strength. MailerLite connects out-of-the-box to the most common e-commerce
        platforms in small business: Shopify, WooCommerce, Wix, Squarespace, Prestashop, and BigCommerce. Once
        connected, you can segment customers based on shopping habits, automate emails triggered by purchases or
        cart activity, and track sales from each campaign. This makes it possible to run targeted offers, <GlossaryLink slug="abandoned-cart-email" className="text-[#0B162A] hover:underline">abandoned
        cart reminders</GlossaryLink>, or loyalty sequences without building custom code or hiring an outside
        developer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation logic is stored and managed centrally. When you build a workflow, MailerLite keeps every step,
        trigger, and condition in one place. This means you can review, edit, or clone automations as your business
        changes, no need to rebuild sequences from scratch if you want to update a welcome series or launch a new
        product campaign. The platform supports multi-trigger workflows, so you can start a sequence from any number
        of actions: a form fill, a purchase, a tag update, or a custom event. Conditional logic lets you branch the
        workflow based on subscriber data or engagement, keeping every journey relevant and efficient.</p>
      <p className="text-base text-white shadow-text pt-3">
        Template management is also centralized. You can save any email or landing page as a template, reuse blocks
        or layouts across campaigns, and update branding in one place. This ensures every message stays consistent
        with your brand, and when you make a change, it propagates across future sends. The AI writing assistant and
        subject line generator are embedded in the editor, so you can get copy suggestions without leaving the
        workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite’s reporting engine pulls data from all parts of the platform. Open rates, click rates,
        conversions, and sales are tracked for every campaign, automation, and landing page. For e-commerce,
        MailerLite tracks which emails drive purchases and which workflows lead to the most revenue. The dashboard
        visualizes this data in real time, and you can build custom reports for any metric you care about. Heatmaps,
        comparative reporting, and automation metrics (like completion rates and revenue per sequence) are all
        available without extra setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and reliability are handled at the platform level. Because MailerLite is cloud-based, you never
        have to worry about server maintenance, software updates, or data loss. Backups, uptime, and compliance are
        managed by the vendor, so your team can focus on marketing instead of IT. Access controls let you define who
        can edit campaigns, workflows, or templates, keeping your data safe even as your team grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams who want to connect MailerLite with other tools, like <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRMs</GlossaryLink>,
        analytics platforms, or custom apps, the platform supports <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> access
        and has a growing library of integrations. This makes it possible to build a marketing stack that fits your
        business, with MailerLite as the central hub for email, automation, and subscriber data. You can export or
        sync lists, trigger workflows from outside events, or pull analytics into your reporting dashboard, all
        without manual steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        This architecture is what makes MailerLite a fit for small businesses in Miami-Dade, Broward, and Palm Beach
        counties looking for professional, scalable email marketing. You get the tools to automate, personalize, and
        track every part of your campaigns, while keeping your data organized and your stack simple. MailerLite’s
        design means you can start small, grow your list, and add complexity as you need it, without outgrowing the
        platform or getting locked into a tool that is too big for your team.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="mailerlites-architecture-connects-your-marketing-stack-and-keeps-your-data-organized" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                MailerLite’s architecture connects your marketing stack and keeps your data organized
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
              <h2 id="mailerlites-architecture-connects-your-marketing-stack-and-keeps-your-data-organized-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                MailerLite’s architecture connects your marketing stack and keeps your data organized
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
