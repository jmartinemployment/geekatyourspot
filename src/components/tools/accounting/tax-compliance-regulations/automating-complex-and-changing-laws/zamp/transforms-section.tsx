import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Zamp transforms&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;from a
        burdensome task into a streamlined process, effectively removing the need for business owners to spend
        countless hours on tax-related issues. By automating and managing sales tax compliance, Zamp allows
        businesses to reclaim valuable time and resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary benefits of using Zamp is the removal of manual tax calculations. The platform
        automates calculations, ensuring accuracy and compliance with state-specific tax codes. This automation
        eliminates the need for business owners to manually track and apply varying tax rates, reducing errors
        and saving time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp also handles all aspects of state and local tax filings, taking the burden off business owners.
        This includes preparing and submitting returns, managing registrations, and ensuring compliance with
        local tax laws. By handling these tasks, Zamp significantly reduces the administrative workload and
        minimizes the risk of compliance failures.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Zamp&#39;s platform manages audit notices and state correspondence. This proactive approach
        ensures that notices are addressed promptly and accurately, preventing potential penalties and legal
        issues. Business owners no longer need to interpret complex tax notices or engage in time-consuming
        communications with tax authorities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Zamp integrates seamlessly with existing financial systems like QuickBooks and Xero, ensuring
        that all tax-related data is accurately mapped and reconciled. This integration not only streamlines the
        compliance process but also enhances the accuracy of financial reporting, providing business owners with
        a clear and accurate view of their tax obligations.</p>
      <blockquote cite="https://zamp.com/compare/zamp-vs-taxjar" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Zamp is an intelligent sales tax platform with a built-in managed service for end-to-end
        compliance—saving teams time, money, and risk.</blockquote>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="streamlining-compliance-with-zamp-what-it-removes-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Streamlining Compliance with Zamp: What It Removes from Your Week
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="streamlining-compliance-with-zamp-what-it-removes-from-your-week" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Streamlining Compliance with Zamp: What It Removes from Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
