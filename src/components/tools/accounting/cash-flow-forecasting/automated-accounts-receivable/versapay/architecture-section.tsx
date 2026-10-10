import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Versapay is built on a cloud-based architecture that supports seamless integration with
        existing&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems.
        This design ensures that businesses can maintain a single source of truth for their financial data,
        eliminating the silos that often lead to discrepancies and inefficiencies. The platform&#39;s architecture
        is designed to be flexible, accommodating a range of ERP systems and allowing for easy integration
        through&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;connectors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The integration capabilities of Versapay are a standout feature. By connecting directly with ERP systems,
        Versapay ensures that all payment data is automatically synchronized, reducing the need for manual data
        entry and minimizing errors. This connectivity extends to various payment methods, enabling businesses to
        accept and process payments from multiple channels, including credit cards, ACH, and wire transfers.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay&#39;s architecture also includes robust security features. It complies with industry standards such
        as PCI DSS, ensuring that all payment data is handled securely. This compliance is critical for protecting
        sensitive financial information and maintaining customer trust. Additionally, the platform&#39;s use of
        tokenization and encryption further enhances its security posture, safeguarding against data breaches and
        unauthorized access.</p>
      <p className="text-md text-white shadow-text pt-3">
        Beyond security, Versapay&#39;s architecture supports advanced analytics capabilities. By
        leveraging&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-powered
        insights, businesses can gain a deeper understanding of payment behaviors and cash flow trends. This
        analytical capability allows finance teams to make informed decisions, optimize their collections processes,
        and improve cash flow predictability.</p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, Versapay&#39;s architecture is designed to provide a comprehensive and secure solution for
        managing accounts receivable. Its seamless integration with ERP systems, coupled with advanced security and
        analytics features, makes it an ideal choice for businesses looking to enhance their financial operations.
        By centralizing payment processes and providing real-time insights, Versapay empowers businesses to operate
        more efficiently and effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="versapays-architecture-and-integrations">
                Versapay&#39;s Architecture and Integrations
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="versapays-architecture-and-integrations">
                Versapay&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
