import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Optimove is ideal for businesses that are ready to move beyond traditional ad management methods and embrace
                automated <GlossaryLink slug="dynamic-creative-optimization">ad spend optimization</GlossaryLink>. Companies facing challenges with inefficient ad spend, inconsistent campaign
                results, and complex data analysis will find Optimove particularly beneficial.</p>
              <p className="text-md text-white shadow-text pt-3">If your business operates in a competitive market like Palm Beach or Broward counties, where maximizing marketing
                <GlossaryLink slug="kpi">ROI</GlossaryLink> is essential, Optimove can provide the edge needed to stay ahead. Its ability to automate campaign adjustments
                and provide real-time insights makes it a valuable tool for businesses looking to enhance their marketing strategies
                without increasing operational workload.</p>
              <p className="text-md text-white shadow-text pt-3">Furthermore, businesses already using tools like Salesforce Einstein or HubSpot can integrate Optimove to further
                enhance their <GlossaryLink slug="engagement-rate">customer engagement</GlossaryLink> and marketing efforts. The platform’s ability to work seamlessly with existing
                systems makes it an attractive option for businesses looking to optimize their ad spend without overhauling their
                entire marketing infrastructure.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#8C4E2A] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
              <p className="text-md text-white shadow-text pt-3">Optimove is ideal for businesses that are ready to move beyond traditional ad management methods and embrace
                automated ad spend optimization. Companies facing challenges with inefficient ad spend, inconsistent campaign
                results, and complex data analysis will find Optimove particularly beneficial.</p>
              <p className="text-md text-white shadow-text pt-3">If your business operates in a competitive market like Palm Beach or Broward counties, where maximizing marketing
                ROI is essential, Optimove can provide the edge needed to stay ahead. Its ability to automate campaign adjustments
                and provide real-time insights makes it a valuable tool for businesses looking to enhance their marketing strategies
                without increasing operational workload.</p>
              <p className="text-md text-white shadow-text pt-3">Furthermore, businesses already using tools like Salesforce Einstein or HubSpot can integrate Optimove to further
                enhance their customer engagement and marketing efforts. The platform’s ability to work seamlessly with existing
                systems makes it an attractive option for businesses looking to optimize their ad spend without overhauling their
                entire marketing infrastructure.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
