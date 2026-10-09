import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owner Lisa finds herself drowning in a sea of invoices. Each document
        represents countless hours of manual data entry, potential errors, and the looming threat of late
        fees. For Lisa, the <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> process has
        become a bottleneck, consuming time she doesn&#39;t have and creating stress she doesn&#39;t need.
        This is a common struggle among small businesses in West Palm Beach, Broward, and Miami-Dade counties,
        where limited staff and resources make efficient payment execution a daunting task.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Payment Execution changes everything. By shifting from manual to automated processes,
        businesses like Lisa&#39;s can centralize bill intake, approvals, and payment execution. This not only
        reduces errors and speeds up payments but also liberates business owners to focus on growth rather
        than paperwork. This page lays out how this transition can redefine business efficiency, saving you
        time and reducing costs while keeping your payment processes transparent and secure.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="breaking-free-from-manual-payment-nightmares" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Breaking Free from Manual Payment Nightmares
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="breaking-free-from-manual-payment-nightmares" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Breaking Free from Manual Payment Nightmares
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
