import Link from "next/link";

export default function ToolsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Several platforms handle CRM for small businesses. Each makes a different trade-off between breadth, simplicity and price.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-ai-customer-relationship-management-crm-tools-ghl${idSuffix}`} href="/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel" className="text-[#0B162A] hover:underline">GoHighLevel</Link></h3>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel combines a CRM with two-way texting, email, booking calendars, forms, a workflow builder and AI features in one account, priced by account instead of by user. It suits a small business that lives on inbound conversations and appointments and wants one system in place of several.</p>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"><Link id={`use-cases-business-operations-ai-customer-relationship-management-crm-tools-pipedrive${idSuffix}`} href="/tools/marketing/pipedrive" className="text-[#0B162A] hover:underline">Pipedrive</Link></h3>
      <p className="text-base text-white shadow-text pt-3">
        Pipedrive is a sales pipeline tool with a simple, focused interface, popular with teams that mainly need to track deals through stages. It is a good fit when the sales process matters more than texting, booking and marketing in the same system.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="top-ai-crm-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Top AI CRM Tools
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="top-ai-crm-tools-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Top AI CRM Tools
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
