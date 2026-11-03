export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The decisions your team makes about data structure and mapping at the start of a Voksha deployment have
        a direct impact on how well the Intelligent Receptionist fits your business. This is not just about
        which fields to capture or which calendar to connect. It is about making sure every call produces
        information your team can use, without noise, duplication, or dropped details. Geek @ Your Spot LLC works
        through these choices with you, so the system does not just answer calls, it delivers the right data
        into your workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most critical mapping decisions happen at intake. For each call type, new lead, appointment request,
        service inquiry, decide what information matters. In real estate, that might be pre-approval status,
        budget, and property details. In HVAC, it is address, equipment brand, and symptom. In a salon, it could
        be service type and preferred stylist. Voksha’s scripting interface lets you define these flows in plain
        language, so you are not locked into a rigid set of fields or a one-size-fits-all script. You can set
        different flows for buyers and sellers, urgent repairs and routine maintenance, or first-time and
        returning clients.</p>
      <p className="text-base text-white shadow-text pt-3">
        What makes Voksha practical for small businesses is that these flows are not static. You can adjust the
        questions or required fields as you learn from real calls. If your team finds that a key detail is
        missing from bookings, you add it to the script and it applies on the next call. If a question is not
        producing useful responses, you change or remove it. There is no need for a developer or a ticket to the
        vendor. This immediate feedback loop means your data structure evolves with your business, not against
        it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping also extends to how Voksha connects with your existing tools. On Premium and Enterprise plans,
        Voksha can book directly into your calendar, Google, Outlook, or Apple iCloud, so appointment data lands
        exactly where your team already checks it. For dental practices, integration with Dentrix is available
        through Voksha support. This avoids the classic problem of double entry or missed updates: what the
        caller says gets logged and scheduled in the right place, with no manual copy-paste.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data mapping is also about controlling what happens when a call cannot be handled automatically. If
        Voksha hits a question it cannot answer, or if a caller needs a human right away, the system takes a
        detailed message and sends an alert via email or SMS. On Premium, custom call flows can route urgent
        calls to a designated team member. Every call produces a summary, so your team does not lose track of
        follow-up or next steps. This structure means you can track trends, what questions callers are asking,
        what types of calls need escalation, and where leads are coming from, without sifting through a pile of
        voicemails or sticky notes.</p>
      <p className="text-base text-white shadow-text pt-3">
        The initial mapping decisions also set the tone for compliance and privacy, especially in regulated
        fields like healthcare. On the Enterprise plan, Voksha supports HIPAA compliance with Business Associate
        Agreements (BAAs), so you can map protected health information in a way that meets legal requirements.
        For other industries, mapping is about making sure only the data you actually need is captured and
        stored, reducing risk and keeping workflows lean.</p>
      <p className="text-base text-white shadow-text pt-3">
        A successful deployment is not about capturing every possible data point. It is about focusing on the
        fields and flows that drive your business outcomes, qualified leads, booked appointments, resolved
        questions. Geek @ Your Spot LLC guides you through these decisions, mapping Voksha’s capabilities to your
        real-world sales, service, or support process. The result is a system that delivers actionable,
        structured data to your team, without the clutter or confusion of legacy receptionist logs.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-successful-voksha-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a Successful Voksha Deployment
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
              <h2 id="how-data-structure-and-mapping-decisions-shape-a-successful-voksha-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Decisions Shape a Successful Voksha Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
