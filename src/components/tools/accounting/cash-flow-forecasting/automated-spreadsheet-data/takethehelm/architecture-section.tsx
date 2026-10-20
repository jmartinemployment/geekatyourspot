import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm is built on a robust architecture designed to handle complex financial data with ease. At
        its core, the platform integrates seamlessly with popular accounting software like QuickBooks, Xero, and
        Sage. This integration is crucial as it allows Take the Helm to access real-time data, ensuring that all
        forecasts are based on the most up-to-date information.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s architecture supports a range of features that enhance its functionality. For
        instance, it includes a dynamic&nbsp;<GlossaryLink slug="kpi" className="text-[#0B162A]
        hover:underline">KPI</GlossaryLink>&nbsp;dashboard that offers instant insights into a business&#39;s
        financial health. This dashboard is customizable, allowing users to track the metrics that matter most
        to them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm also incorporates advanced scenario planning capabilities. Users can create unlimited
        scenarios, comparing them side-by-side to understand potential impacts on their cash flow. This feature
        is supported by the platform&#39;s ability to handle large volumes of data efficiently, providing quick
        and reliable insights.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Take the Helm&#39;s architecture is designed to facilitate easy data export. Users can
        generate reports in both PDF and CSV formats, making it simple to share insights with stakeholders or
        integrate them into other business processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s integration with Veem allows for direct payments, streamlining the&nbsp;accounts
        payable&nbsp;process. This integration not only simplifies payment workflows but also
        enhances security by reducing the need for manual intervention.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="takethehelm-s-architecture-and-integrations">
                Take the Helm&#39;s Architecture and Integrations
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="takethehelm-s-architecture-and-integrations-lg">
                Take the Helm&#39;s Architecture and Integrations
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
