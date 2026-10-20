
export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The foundation of a smooth Nextiva deployment is how you structure and map your business data. This is
        where many small businesses get tripped up, especially if their current records are scattered or
        incomplete. Nextiva relies on the quality and clarity of your business information, if the AI cannot
        find hours, services, or contact details, it cannot answer customer questions or route calls accurately.
        Here’s what matters most in the early stages.</p>
      <p className="text-md text-white shadow-text pt-3">
        First, decide what information Nextiva will use to power its Intelligent Receptionist. At minimum, you
        need accurate business hours, service offerings, staff contacts, and up-to-date appointment
        availability. The platform can pull this from your website or Google Business Profile, but it only works
        if that source is current. If your online presence is out of date, the AI will repeat those mistakes to
        customers. Before launch, review these data sources and update them as needed, this step is as critical
        as the technical setup.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, map how customer interactions flow through your business. Decide what counts as a lead, how
        appointments are handled, and what questions should be answered by the AI versus escalated to a person.
        Nextiva’s routing rules and escalation logic depend on these choices. For example, if you want the AI to
        book appointments but not handle billing questions, you need to define those boundaries in the setup.
        The more specific your mapping, the less risk of the AI giving a wrong answer or sending a customer down
        the wrong path.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Review and clean up your business hours, service list, and contact info on your website and Google Business Profile.</li>
        <li>Decide which types of calls and messages should be handled by the AI and which should be routed to staff.</li>
        <li>Map out the appointment workflow, how bookings, confirmations, and reminders are managed, and what data is needed at each step.</li>
        <li>Identify what information must be captured from each caller or chat (name, phone, service requested, etc.) and where it should be stored.</li>
        <li>Set up escalation rules for edge cases, what triggers a handoff to a live person, and what context the AI should pass along.</li>
      </ol>
      <p className="text-md text-white shadow-text pt-3">
        If your business uses a&nbsp;CRM, calendar, or scheduling tool,
        make sure the data fields match what Nextiva expects. For example, if
        your&nbsp;CRM&nbsp;uses custom fields for appointment types or
        lead sources, map those to the AI’s inputs so nothing gets lost in translation. Nextiva’s direct
        integrations with calendars and scheduling tools simplify this for most small businesses, but the
        initial mapping is still key. A mismatch here can cause double bookings, missed confirmations, or lost
        leads.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data privacy and compliance also come into play, especially for healthcare or legal firms. Nextiva’s
        healthcare platform is HIPAA-ready with a signed BAA, SOC 2 certification, and end-to-end encryption. If
        you need to handle sensitive data, plan your mapping so that only the necessary information is collected
        and stored in the right place. Avoid pulling in more data than you need, and make sure escalation rules
        are set for any calls that touch on private or regulated topics.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the local HVAC team, this means their appointment types, service areas, and technician schedules
        need to be mapped clearly into Nextiva before launch. If a customer calls about a repair, the AI checks
        real-time availability, books the job, and texts a confirmation using the mapped data. If the request
        falls outside normal hours or needs a human touch, the system escalates with full context, no more
        scribbled notes or missed callbacks. This upfront work keeps the system running smoothly and prevents
        the chaos that comes from incomplete or badly mapped data.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s role is to walk you through these mapping decisions, making sure nothing gets missed
        and every workflow is covered. They check your data sources, clean up what’s needed, and test the
        mapping before the system goes live. The result is an Intelligent Receptionist that actually knows your
        business, not just a generic script. When the data is right, Nextiva delivers on its promise: every call
        answered, every lead captured, and no customer left waiting or lost in the shuffle.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-data-decisions-make-or-break-a-nextiva-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Decisions Make or Break a Nextiva Deployment
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
              <h2 id="what-data-decisions-make-or-break-a-nextiva-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Data Decisions Make or Break a Nextiva Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
