import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet&#39;s architecture is built to seamlessly integrate with your existing business systems,
        ensuring smooth data flow and minimal disruption. The platform connects with major e-commerce platforms,
        accounting software,
        and&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems,
        allowing for real-time data synchronization. This connectivity ensures that your sales data is always
        up-to-date, providing accurate tax calculations and compliance across all sales channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of TaxValet&#39;s key strengths is its ability to handle complex backend technology and
        integrations. The platform is designed to manage the technical heavy lifting, so you don&#39;t have to
        worry about configuring or maintaining these connections. This includes seamless integration with sales
        channels, ensuring that data from platforms like Shopify, Amazon, and QuickBooks flows effortlessly into
        TaxValet for processing.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet also prioritizes security and data integrity. By using secure protocols and encryption, it
        protects sensitive business data during transmission and storage. This commitment to security ensures
        that your business information remains confidential and protected from unauthorized access.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, TaxValet provides a flexible and scalable architecture, accommodating the growth of your
        business. As your transaction volume increases, the platform adjusts without the need for additional
        fees or manual intervention. This scalability is crucial for businesses looking to expand across
        multiple states while maintaining compliance with varying tax laws.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, TaxValet&#39;s architecture is designed to integrate effortlessly with your existing
        systems, handle the technical complexities of sales tax management, and provide a secure, scalable
        solution for businesses of all sizes. This ensures that you can focus on growing your business, knowing
        that your sales&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;is in capable hands.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="taxvalet-s-architecture-and-integrations" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxValet&#39;s Architecture and Integrations
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
              <h2 id="taxvalet-s-architecture-and-integrations" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                TaxValet&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
