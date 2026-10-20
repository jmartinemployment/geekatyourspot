
export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach counties, managing
        sales&nbsp;tax compliance&nbsp;amidst complex and
        changing laws is a daunting task. The administrative burden of tracking and adhering to constantly
        shifting tax regulations can paralyze operations. Ignoring past tax liabilities, businesses risk
        triggering state audits that can be financially devastating. Without professional representation, facing
        state tax auditors can lead to significant penalties, especially if businesses lack the historical
        documentation to defend themselves.</p>
      <p className="text-md text-white shadow-text pt-3">
        Exemption certificate gaps present another problem. Many businesses fail to validate tax-exempt
        certificates for wholesale clients, resulting in unexpected back-tax assessments. This oversight can
        lead to substantial financial liabilities, as states may demand back taxes for sales that were
        incorrectly marked as exempt.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost of compliance isn&#39;t just monetary. Founders and key staff often waste countless hours
        navigating state tax filing portals, time that could be better spent on strategic initiatives and
        customer engagement. The complexity increases as businesses scale, with new product lines or expansion
        channels introducing new taxability rules that must be reviewed and understood. This risk of scaling
        without proper tax compliance oversight can lead to costly mistakes that impact the bottom line.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real complexity arises when businesses sell online to other states. Economic nexus thresholds,
        product taxability updates, and aggressive state tax audits can overwhelm a small team relying solely on
        software. Software solutions, while useful for basic tasks, often fall short in providing the
        comprehensive support needed for multi-state compliance. They leave gaps that could trigger audits and
        penalties, adding to the stress and workload of small business owners.</p>
      <p className="text-md text-white shadow-text pt-3">
        TaxValet offers a solution by providing a 100% audit-free guarantee backed by human experts. Unlike
        software that requires constant monitoring and manual intervention, TaxValet provides a dedicated team
        that takes full accountability for your compliance safety. This hands-off approach allows businesses to
        focus on growth and customer service, knowing that their sales tax compliance is in expert hands.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-cost-of-navigating-complex-and-changing-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Navigating Complex and Changing Laws
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-cost-of-navigating-complex-and-changing-laws-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Navigating Complex and Changing Laws
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
