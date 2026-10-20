import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small business owners in Miami-Dade, Broward, and West Palm Beach counties often find themselves buried
        under the weight of&nbsp;<Link id={`tools-accounting-complex-changing-laws-zamp-overview-complex-changing-laws${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws" className="text-[#C83803] hover:underline">complex and changing laws</Link>. As sales grow, so does the complexity of
        managing&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;across multiple
        states. Imagine the stress of juggling various tax regulations without the necessary in-house expertise,
        leading to a perpetual fear of missing a filing deadline or mishandling an audit notice. This isn’t just
        a hypothetical scenario; it’s a common pain point for many businesses striving to stay compliant without
        a dedicated tax team.</p>
      <p className="text-md text-white shadow-text pt-3">
        Consider the case of a local business owner who spends hours each week deciphering state tax laws, only
        to discover that a single misstep has led to costly penalties. The owner’s anxiety grows with each new
        state that requires registration, filing, and remittance. This situation isn’t sustainable, and the
        constant worry about compliance failures can stifle a business’s ability to focus on growth and customer
        service. This is where many businesses find themselves stuck, caught in a cycle of reactive measures and
        mounting stress.</p>
      <p className="text-md text-white shadow-text pt-3">
        The solution lies in leveraging AI-powered managed services like Zamp. By integrating advanced
        technology with expert oversight, businesses can shift from a reactive to a proactive stance on tax
        compliance. Zamp combines intelligent automation with a dedicated team of tax professionals to manage
        everything from registrations to audits, freeing business owners from the complexities of compliance. In
        a world where laws are constantly evolving, having a partner that can navigate these changes is not just
        beneficial. It’s essential.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
