import Image from "next/image";

export default function KeyCapabilitiesSection() {
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Tableau AI and Adobe Analytics come equipped with a range of features that make them indispensable for ad spend
                optimization. These capabilities are designed to enhance data-driven decision-making and streamline marketing
                efforts.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Real-Time Data Processing: Both tools allow for the continuous collection and analysis of data, providing
                  up-to-the-minute insights that help businesses stay ahead of market trends.</li>
                <li>Predictive Analytics: By using machine learning algorithms, these platforms can predict future trends and
                  outcomes, allowing marketers to allocate budgets more effectively and anticipate customer behavior.</li>
                <li>Customizable Dashboards: Tableau AI offers highly customizable dashboards that enable users to visualize
                  data in ways that are most meaningful to their specific needs. This flexibility is crucial for tailoring
                  insights to different business objectives.</li>
                <li>Advanced Segmentation: Adobe Analytics provides detailed segmentation capabilities, allowing marketers to
                  drill down into specific audience behaviors and preferences. This level of detail supports more targeted
                  advertising strategies.</li>
                <li>Integration with Other Platforms: Both tools can integrate with other marketing platforms, such as
                  Salesforce Einstein and HubSpot, to provide a holistic view of marketing efforts and outcomes.</li>
                <li>Automated Reporting: Automated reporting features reduce the time spent on manual data analysis and report
                  generation, freeing up resources for strategic planning and execution.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities collectively enable businesses to move beyond traditional ad management practices, which often
                involve manual adjustments and guesswork. By automating many of these processes, Tableau AI and Adobe Analytics help
                businesses not only save time but also reduce errors and improve campaign outcomes.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Key Capabilities</h2>
              <p className="text-md text-white shadow-text pt-3">Tableau AI and Adobe Analytics come equipped with a range of features that make them indispensable for ad spend
                optimization. These capabilities are designed to enhance data-driven decision-making and streamline marketing
                efforts.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>Real-Time Data Processing: Both tools allow for the continuous collection and analysis of data, providing
                  up-to-the-minute insights that help businesses stay ahead of market trends.</li>
                <li>Predictive Analytics: By using machine learning algorithms, these platforms can predict future trends and
                  outcomes, allowing marketers to allocate budgets more effectively and anticipate customer behavior.</li>
                <li>Customizable Dashboards: Tableau AI offers highly customizable dashboards that enable users to visualize
                  data in ways that are most meaningful to their specific needs. This flexibility is crucial for tailoring
                  insights to different business objectives.</li>
                <li>Advanced Segmentation: Adobe Analytics provides detailed segmentation capabilities, allowing marketers to
                  drill down into specific audience behaviors and preferences. This level of detail supports more targeted
                  advertising strategies.</li>
                <li>Integration with Other Platforms: Both tools can integrate with other marketing platforms, such as
                  Salesforce Einstein and HubSpot, to provide a holistic view of marketing efforts and outcomes.</li>
                <li>Automated Reporting: Automated reporting features reduce the time spent on manual data analysis and report
                  generation, freeing up resources for strategic planning and execution.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">These capabilities collectively enable businesses to move beyond traditional ad management practices, which often
                involve manual adjustments and guesswork. By automating many of these processes, Tableau AI and Adobe Analytics help
                businesses not only save time but also reduce errors and improve campaign outcomes.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
