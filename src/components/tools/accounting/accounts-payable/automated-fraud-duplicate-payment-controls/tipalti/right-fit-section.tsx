import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Tipalti is best suited for small to medium-sized businesses that handle a significant number of
        transactions and require robust fraud prevention and payment processing capabilities. Its comprehensive
        features, such as <GlossaryLink slug="ai">AI</GlossaryLink>-powered fraud detection and automated
        invoice management, make it ideal for businesses looking to streamline operations and reduce manual
        workload. For companies facing challenges with manual&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes, Tipalti offers a
        transformative solution that can enhance efficiency and accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        However, Tipalti may not be the best fit for very small businesses with limited transaction volumes or
        those that do not require extensive automation. The platform&#39;s advanced features might be more
        than what a small operation needs, potentially leading to underutilization of the system. Businesses
        with minimal international dealings might also find some of Tipalti&#39;s global payment features
        unnecessary.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering Tipalti, the next step is to evaluate their specific needs and compare them
        against the platform’s capabilities. This involves assessing current pain points in the accounts
        payable process and determining how Tipalti can address these issues. A thorough analysis of the
        potential time and cost savings, as well as the reduction in fraud risk, will help in making an
        informed decision.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot, as a local consultancy, can assist businesses in the West Palm Beach, Broward, and
        Miami-Dade counties with the implementation of Tipalti. They offer expertise in configuring the
        platform to fit the unique needs of each business, ensuring seamless integration with existing systems.
        Their local presence means they understand the specific challenges faced by businesses in the area and
        can provide tailored support.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Tipalti is a powerful tool for businesses seeking to automate their accounts payable
        processes and enhance fraud controls. For those unsure about the fit, consulting with Geek @ Your Spot
        can provide clarity and guidance. They can help determine if Tipalti is the right choice and support
        the transition to an automated system, ensuring that the business reaps the full benefits of the
        platform.</p>
      <p className="text-md text-white shadow-text pt-3">
        <Link id="tools-accounting-fraud-controls-tipalti-right-fit-consultation"
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-tipalti-right-for-your-business">
                Is Tipalti Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-tipalti-right-for-your-business">
                Is Tipalti Right for Your Business?
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
