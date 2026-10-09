import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill is particularly well-suited for small to medium-sized businesses in South Florida that are looking
        to streamline their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes with Automated
        Fraud &amp; Duplicate Payment Controls. The platform&#39;s ability to automate tedious tasks like invoice
        matching and purchase order reconciliation makes it an attractive option for businesses seeking to
        reduce manual errors and improve efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Bill may not be the best fit for businesses that require highly customized solutions or those
        with complex, industry-specific needs that go beyond the platform&#39;s current capabilities. Companies
        that operate in highly regulated sectors might need additional compliance features not covered by
        Bill&#39;s standard offerings.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that find Bill a suitable match, the next step is to engage with Geek @ Your Spot,
        an&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation consultancy based in South Florida. Their
        expertise in configuring Bill to fit seamlessly into existing systems can be invaluable. They provide
        services such as data mapping, integration with current software, and user training to ensure that the
        transition to automated systems is smooth and effective.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot&#39;s local presence in Miami-Dade, Broward, and West Palm Beach counties means they
        understand the unique challenges faced by businesses in this region. Their consultative approach helps
        in maximizing the benefits of Bill, ensuring that the software not only meets current needs but also
        adapts to future changes in business operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, while Bill offers a strong solution for many small businesses, the decision to implement
        it should consider both the current operational needs and future growth plans. Engaging with a
        knowledgeable implementation partner like Geek @ Your Spot can enhance the deployment process, ensuring
        that the business reaps the full benefits of automated fraud and duplicate payment controls.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id="tools-accounting-fraud-controls-bill-right-fit-consultation"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          Book your free consultation
        </Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-bill-right-for-your-business">
                Is Bill Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-bill-right-for-your-business">
                Is Bill Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
