import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Anyword is built as a cloud-based platform designed to slot into the existing marketing stack of a
        small business. Its architecture connects natively with a range of marketing and sales tools, pulling
        in historical data and pushing out content to the channels that matter most for lead generation and
        client engagement. The system is not a closed box: it is built to integrate, learn, and adapt from the
        data and workflows you already use.</p>
      <p className="text-md text-white shadow-text pt-3">
        At its core, Anyword uses a combination of proprietary AI models and industry-specific datasets. The
        engine draws on a large, continuously updated base of anonymized campaign data, millions of dollars in
        ad spend and thousands of marketing assets, so its predictions are always grounded in what actually
        works in the field. When you connect your own channels, such as HubSpot, Marketo, Salesforce
        ExactTarget, or Iterable, Anyword ingests your best-performing campaigns, learning your brand’s voice,
        tone, and messaging patterns. This training process is automated, so there’s no manual tagging or
        retraining required from your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        The integrations extend beyond email
        and&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>.
        Anyword supports direct connections to platforms like Facebook, Instagram, LinkedIn Ads, Google Ads,
        Meta Ads, and even CMS systems like Drupal. For social media, the tool can publish directly to your
        accounts, adapting each post to the style and requirements of the platform. For paid ads, it can
        generate and push creative variations directly into your ad manager, complete with predictive scoring
        so you know which copy is likely to deliver the best cost per click or conversion before you spend a
        dollar.</p>
      <p className="text-md text-white shadow-text pt-3">
        Anyword’s data flow is two-way. It doesn’t just push content out; it also pulls engagement and
        performance data back in.
        This&nbsp;<GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>&nbsp;powers its benchmarking and continuous optimization features. When a campaign
        is live, Anyword tracks which variations perform best for each audience segment, by channel,
        demographic, and even by time of day. The platform then uses this information to refine future content
        suggestions and scoring, so your messaging gets sharper and more effective with every cycle.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand control is built into the architecture from the start. Anyword allows you to define your brand’s
        tone, style guidelines, and approved word lists, centralizing these rules so every piece of content,
        no matter who creates it, matches your brand’s requirements. Advanced audience segmentation lets you
        set up detailed customer personas, each with their own pain points and preferences. The AI references
        these profiles when generating and optimizing content, so every message is tailored to the right group
        without drifting off-brand.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are not afterthoughts. Anyword’s infrastructure includes enterprise-grade
        security features such as private language models, dedicated single sign-on (SSO), and compliance with
        SOC 2 and ISO27001 standards. This means your client data, campaign results, and proprietary messaging
        are protected at every stage, and the platform can be safely deployed even in industries with strict
        data handling requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system’s modular build allows for rapid scaling and customization. As your business grows, you can
        add new channels, train the AI on additional data sources, or build custom templates for new types of
        campaigns. The template builder and custom AI model options mean you’re not locked into a
        one-size-fits-all workflow. For small businesses in South Florida, this flexibility is critical: you
        can start with a few core channels and expand as your marketing needs evolve, all while keeping brand
        voice and campaign quality consistent.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, Anyword’s architecture means that a local team can run a sophisticated, multi-channel
        content operation without hiring extra staff or managing a patchwork of disconnected tools. Everything
        from data import to campaign publishing to performance feedback runs through the same secure,
        brand-controlled system. This is how small businesses can look and operate like larger competitors, by
        using a platform that automates the heavy lifting, adapts to their brand, and connects seamlessly to
        the tools they already rely on.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-architecture-behind-anyword-integrations-data-flow-and-brand-control" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Architecture Behind Anyword: Integrations, Data Flow, and Brand Control
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
              <h2 id="the-architecture-behind-anyword-integrations-data-flow-and-brand-control" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Architecture Behind Anyword: Integrations, Data Flow, and Brand Control
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
