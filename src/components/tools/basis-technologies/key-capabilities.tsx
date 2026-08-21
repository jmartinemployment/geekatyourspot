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
              <p className="text-md text-white shadow-text pt-3">Basis Technologies is equipped with a range of features designed to optimize ad spend through automation and
                intelligent decision-making. Here are some of the key capabilities that make it a powerful tool in the realm of
                digital marketing.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>AI-Driven Bid Adjustments: The platform uses advanced machine learning algorithms to automatically adjust
                  bids based on real-time data. This ensures that ads are targeted to the most relevant audiences at the best
                  possible times, maximizing engagement and conversion rates.</li>
                <li>Seamless Integration: Basis Technologies integrates with other leading marketing platforms like Smartly.io
                  and HubSpot, providing a holistic approach to marketing automation. This integration allows for a unified
                  strategy across different channels, ensuring consistency and efficiency.</li>
                <li>User-Friendly Interface: Designed with ease of use in mind, the platform offers an intuitive interface that
                  simplifies the process of managing ad campaigns. Users can easily navigate through various features without
                  needing extensive technical knowledge.</li>
                <li>Comprehensive Analytics: With robust analytics capabilities, Basis Technologies provides detailed insights
                  into campaign performance. Users can track key metrics and make informed decisions to optimize their
                  marketing strategies further.</li>
                <li>Customizable Campaigns: The platform allows for the customization of ad campaigns, enabling businesses to
                  tailor their strategies to meet specific goals and objectives. This flexibility ensures that marketing
                  efforts are aligned with business priorities.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Moreover, the integration with tools like Omneky enhances creative optimization by using AI to generate and test ad
                creatives in real-time. This capability ensures that the most effective ads are deployed, further enhancing the
                efficiency of ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">In summary, Basis Technologies offers a robust set of features that collectively enhance the efficiency and
                effectiveness of ad spend. By leveraging AI and integrating with other powerful marketing tools, it provides a
                comprehensive solution for businesses looking to optimize their advertising efforts.</p>
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
              <p className="text-md text-white shadow-text pt-3">Basis Technologies is equipped with a range of features designed to optimize ad spend through automation and
                intelligent decision-making. Here are some of the key capabilities that make it a powerful tool in the realm of
                digital marketing.</p>
              <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
                <li>AI-Driven Bid Adjustments: The platform uses advanced machine learning algorithms to automatically adjust
                  bids based on real-time data. This ensures that ads are targeted to the most relevant audiences at the best
                  possible times, maximizing engagement and conversion rates.</li>
                <li>Seamless Integration: Basis Technologies integrates with other leading marketing platforms like Smartly.io
                  and HubSpot, providing a holistic approach to marketing automation. This integration allows for a unified
                  strategy across different channels, ensuring consistency and efficiency.</li>
                <li>User-Friendly Interface: Designed with ease of use in mind, the platform offers an intuitive interface that
                  simplifies the process of managing ad campaigns. Users can easily navigate through various features without
                  needing extensive technical knowledge.</li>
                <li>Comprehensive Analytics: With robust analytics capabilities, Basis Technologies provides detailed insights
                  into campaign performance. Users can track key metrics and make informed decisions to optimize their
                  marketing strategies further.</li>
                <li>Customizable Campaigns: The platform allows for the customization of ad campaigns, enabling businesses to
                  tailor their strategies to meet specific goals and objectives. This flexibility ensures that marketing
                  efforts are aligned with business priorities.</li>
              </ul>
              <p className="text-md text-white shadow-text pt-3">Moreover, the integration with tools like Omneky enhances creative optimization by using AI to generate and test ad
                creatives in real-time. This capability ensures that the most effective ads are deployed, further enhancing the
                efficiency of ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">In summary, Basis Technologies offers a robust set of features that collectively enhance the efficiency and
                effectiveness of ad spend. By leveraging AI and integrating with other powerful marketing tools, it provides a
                comprehensive solution for businesses looking to optimize their advertising efforts.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
