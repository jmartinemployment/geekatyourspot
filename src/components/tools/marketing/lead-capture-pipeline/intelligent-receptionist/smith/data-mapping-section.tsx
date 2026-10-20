import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Smith.ai to deliver real value for your business starts with the right data structure and
        mapping decisions. This is not just about plugging in another app, it is about making sure every call,
        lead, and appointment lands in the right place in your existing systems, with the right details and
        context. The upfront work here is what separates a system that just rings phones from one that actually
        drives sales and saves your team hours every week.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first decision: what counts as a qualified lead for your business? Smith.ai’s intake flows are built
        to be highly customizable, but they only work if you define the criteria that matter. For a contractor,
        that might be job type, location, and urgency. For a law firm, it could be case type, jurisdiction, and
        whether there is a conflict. Geek @ Your Spot LLC works with your team to map these criteria into Smith.ai’s
        intake templates, ensuring the AI and live agents only pass along leads that meet your standards. This
        avoids wasting time on tire-kickers or unqualified prospects.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes mapping the call data into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or
        project management system. Smith.ai supports direct integration with thousands of platforms, Salesforce,
        Clio, QuickBooks, and more, but the value comes from field-level mapping. You need to decide where
        caller names, phone numbers, job details, and intake notes should land in your system. This is not a
        one-size-fits-all setup. For example, a service business may want every emergency call tagged as
        high-priority in their field service platform, while a design firm might want detailed notes logged to a
        project record. Geek @ Your Spot LLC configures these mappings so no detail is lost and your team is not
        stuck re-entering information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key decision is how to handle escalation and context transfer. Smith.ai’s hybrid model means a
        call can start with AI, then escalate to a live agent if the situation calls for it, an upset client, a
        legal intake, or a complex scheduling need. The data structure must ensure that all intake details,
        previous responses, and caller history move with the call. This keeps the experience seamless for the
        caller and saves your staff from asking the same questions twice. Mapping these transitions is not just
        technical, it is about protecting your brand’s reputation and making sure high-stakes calls are handled
        with care.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with multiple locations or service lines, mapping decisions get more complex. Smith.ai
        can route calls based on ZIP code, project type, or other criteria, but only if the data structure
        supports it. Upfront, Geek @ Your Spot LLC helps you define the rules that determine which team or location
        should handle which types of inquiries. This ensures that a plumbing emergency in Miami does not end up
        routed to the West Palm Beach team, or that a legal intake for a specific practice area goes to the
        right attorney.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intake forms and custom fields are another area where early mapping makes a difference. Smith.ai can use
        existing forms from your website (like Ninja Forms on WordPress) to capture lead data. The decision is
        which fields are required, what information is optional, and how that data syncs into
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or scheduling tool. Skipping this step leads
        to incomplete records, lost follow-ups, and missed opportunities. Geek @ Your Spot LLC ensures that every
        field is mapped, every required detail is captured, and nothing falls through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, reporting and analytics depend on how data is structured at the start. Smith.ai provides
        dashboards and call summaries, but these only help if the underlying data is complete and consistently
        mapped. Early decisions about what to track, call volume, lead sources, appointment conversion rates,
        set the stage for ongoing optimization. If your business wants to see which marketing campaigns drive
        the most qualified calls, or which service lines are most profitable, the right data structure is what
        makes those insights possible.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, the success of a Smith.ai deployment is won or lost in the upfront mapping work. Geek @ Your Spot LLC’s role is to guide your team through these choices, translate your business needs into technical
        requirements, and configure Smith.ai so it works the way your business already does. The payoff is a
        system that does not just answer the phone, it moves every caller, every lead, and every appointment
        into the right place, with no manual rework and no lost opportunities.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-successful-smith-ai-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a Successful Smith.ai Implementation
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
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-successful-smith-ai-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a Successful Smith.ai Implementation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
