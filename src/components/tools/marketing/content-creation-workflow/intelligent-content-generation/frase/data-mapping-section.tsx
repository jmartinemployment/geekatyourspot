import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The effectiveness of Frase for Intelligent Content Generation depends on the foundation you lay at
        setup. The first real decision is how you structure your topics and content clusters. Frase organizes
        content around clusters, groups of related articles, posts, and emails that support a core subject.
        For a local business, this might mean a main cluster for each service line (roof repair, pest control,
        bookkeeping, consulting), with supporting articles and FAQs attached. Getting this structure right
        upfront makes it easier for Frase to surface gaps, propose briefs, and keep your content library
        organized as you scale.</p>
      <p className="text-md text-white shadow-text pt-3">
        Mapping your existing content into Frase’s cluster model is not just a technical task, it is a
        strategic one. Geek @ Your Spot LLC works with you to audit what you have published, what is missing, and
        what needs to be refreshed. Old posts and landing pages are mapped to the right clusters, and weak or
        outdated content is flagged for replacement. This step is where many small teams discover hidden
        inefficiencies: duplicated topics, unlinked articles, or entire service areas with no supporting
        content. By structuring your data from the start, you avoid the sprawl that makes content hard to
        manage and impossible to update.</p>
      <p className="text-md text-white shadow-text pt-3">
        For each cluster, you define the data points Frase will use to generate and optimize content. This
        includes target keywords, common customer questions, and local search terms specific to your market in
        South Florida. Frase’s question research pulls from real user queries, so your drafts answer what
        people are actually searching for, not just what you think they want to know. Geek @ Your Spot LLC helps
        you identify the right inputs, set up the initial briefs, and load in approved answers or product
        details that must appear in every draft. This step is critical for businesses that want their content
        to be both locally relevant and technically optimized for search and AI citation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Brand voice mapping is handled at the data level as well. Frase’s voice profile is trained on samples
        you provide, but the structure you use, formal vs. conversational, short vs. in-depth, technical vs.
        accessible, carries through every draft. Geek @ Your Spot LLC works with your team to tag and organize
        these samples, so Frase understands which tone applies to which type of content. For example, a
        service page might need a more authoritative voice, while a social post can be lighter. This mapping
        ensures that the same brand standards apply whether you are generating a blog post, a follow-up email,
        or a Facebook update.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are mapped at the user and content-type level. Frase lets you set rules for who can
        review, approve, and publish each type of content. Geek @ Your Spot LLC helps you define these roles and
        permissions, so the right people see the right drafts at the right time. This is not just about
        control, it is about keeping the process lean so approvals do not become a new bottleneck. For teams
        with external writers or freelancers, Frase’s structure allows you to align their output with your
        internal standards, reducing editing cycles and speeding up turnaround.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, integration mapping is a key part of deployment. Frase supports direct publishing to
        WordPress, Webflow, Sanity, Wix, and FraseCMS, but small businesses often have other tools in their
        stack, email platforms, schedulers, analytics. Geek @ Your Spot LLC works with you to map out where
        content needs to go after it is created. This might mean setting up exports in Markdown or CSV for a
        bulk scheduler, or connecting Frase’s&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;to
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or analytics dashboard. The goal is to keep
        your data flowing cleanly from idea to publish, with no manual rework or lost context.</p>
      <p className="text-md text-white shadow-text pt-3">
        A well-structured implementation is what lets Frase deliver on its promise: content that is not just
        fast to produce, but easy to manage, refresh, and scale. By making the right mapping decisions at the
        start, you avoid the chaos that plagues most homegrown content systems. Geek @ Your Spot LLC’s job is to
        guide your team through these choices, so the technology serves your business, not the other way
        around.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-frase-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a Frase Implementation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-frase-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a Frase Implementation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
