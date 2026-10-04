import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture your <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> team, buried under a
        mountain of paper invoices, each one representing a potential error waiting to happen. Every day, they
        manually enter data, double-check figures, and chase down missing information. This tedious process not
        only eats up valuable time but also introduces the risk of costly mistakes. In a world where every
        minute counts and accuracy is paramount, relying on manual processes is like using a typewriter in the
        digital age.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where AvidXchange steps in. By automating invoice management, businesses can eliminate the
        cumbersome manual data entry process. With <GlossaryLink slug="ai">AI</GlossaryLink> and&nbsp;
        <GlossaryLink slug="machine-learning">machine learning</GlossaryLink>, AvidXchange captures data with
        precision, reducing errors and freeing up your team to focus on strategic tasks. The result? Faster
        payments, reduced operational costs, and increased control over your accounts payable workflow.
        It&#39;s not just about saving time—it&#39;s about transforming your entire financial process into a
        well-oiled machine. AvidXchange offers a suite of tools designed to streamline your AP operations. From
        eliminating paper-based processes to providing real-time data access, these solutions enhance
        efficiency and bolster security. Whether you&#39;re a small business or a large enterprise, integrating
        AI-powered automation into your workflow is no longer a luxury—it&#39;s a necessity to stay
        competitive. Ready to see the change for yourself?&nbsp;
        <Link id="tools-accounting-avidxchange-overview-demonstration"
          href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">
          Book a demonstration
        </Link>&nbsp;today and watch your AP process transform.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
