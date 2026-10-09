import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function StreamlinesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange revolutionizes the payment execution process for small businesses by automating routine
        tasks that traditionally consume significant time and resources. At its core, AvidXchange integrates
        seamlessly with existing accounting systems, enabling businesses to manage payments without
        overhauling their current processes. This integration ensures that businesses maintain their familiar
        workflows while gaining the efficiency of automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features of AvidXchange is its ability to support multiple payment methods,
        including virtual card, AvidPay Direct, and checks. This flexibility allows suppliers to receive
        payments in their preferred method, enhancing supplier relationships by ensuring timely and accurate
        payments. By offering real-time payment status updates and PDF payment proofs, AvidXchange provides
        transparency and reduces the need for follow-up inquiries from suppliers.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange&#39;s architecture is designed to minimize disruption to existing workflows. It operates
        within platforms like RAAMP without necessitating changes to approval workflows. This means
        businesses can continue using their established approval structures while benefiting from automated
        payment processes. The platform&#39;s automation extends to building efficient approval workflows for
        invoice and payment reviews, which are faster and more secure than manual processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also offers extensive&nbsp;
        <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;integrations
        with popular accounting and media buying systems like QuickBooks and NetSuite. These integrations
        facilitate a smooth flow of data between systems, ensuring that payment processes are streamlined and
        that businesses can handle large volumes of transactions without the manual effort typically
        required. This capability is crucial for businesses looking to scale operations without increasing
        overhead.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange&#39;s automated payment execution not only speeds up the payment process but also
        significantly reduces the risk of errors and fraud. By automating the matching of purchase orders,
        receiving reports, and invoices before releasing payments, the platform strengthens financial
        controls. This automation ensures that payments are accurate and secure, providing peace of mind for
        business owners who need to focus on strategic growth rather than operational details.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in West Palm Beach and surrounding areas, the adoption of AvidXchange can
        transform how they handle accounts payable. By eliminating manual tasks and providing a robust
        framework for automated payment execution, AvidXchange allows business owners to reclaim valuable
        time and resources. This shift not only improves operational efficiency but also positions businesses
        to better manage cash flow and supplier relationships in a competitive market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-avidxchange-streamlines-payment-processes">
                How AvidXchange Streamlines Payment Processes
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-avidxchange-streamlines-payment-processes">
                How AvidXchange Streamlines Payment Processes
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
