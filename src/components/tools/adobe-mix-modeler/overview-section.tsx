import Image from "next/image";

export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
                </div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler is a powerful tool designed to streamline and enhance the process of automated ad spend
                optimization. It offers businesses the ability to make data-driven decisions that maximize their return on
                investment by leveraging advanced machine learning techniques. This tool is particularly beneficial for companies
                looking to eliminate inefficiencies in their advertising budgets and achieve more precise targeting.</p>
              <p className="text-md text-white shadow-text pt-3">In the competitive landscape of digital marketing, many businesses struggle with the manual adjustments and complex
                data analysis required to optimize ad spend effectively. Adobe Mix Modeler addresses these challenges by automating
                the optimization process, allowing marketers to focus on strategic initiatives rather than the minutiae of daily
                campaign adjustments. This automation not only saves time but also significantly reduces the potential for human
                error, leading to more consistent and effective ad performance.</p>
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler integrates seamlessly with other marketing platforms, such as Google Ads Smart Bidding, to provide
                a comprehensive solution for ad spend optimization. By using machine learning algorithms, it dynamically adjusts
                bids and allocates budget across various channels to ensure that ads reach the intended audience at optimal times.
                This level of precision helps businesses avoid wasted ad spend and improves overall campaign efficiency.</p>
              <p className="text-md text-white shadow-text pt-3">For companies in regions like Palm Beach and Broward counties, where marketing budgets are tight and competition is
                fierce, Adobe Mix Modeler offers a clear advantage. By automating the ad spend optimization process, businesses can
                achieve better results with less effort, ultimately leading to increased sales and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler is a powerful tool designed to streamline and enhance the process of automated ad spend
                optimization. It offers businesses the ability to make data-driven decisions that maximize their return on
                investment by leveraging advanced machine learning techniques. This tool is particularly beneficial for companies
                looking to eliminate inefficiencies in their advertising budgets and achieve more precise targeting.</p>
              <p className="text-md text-white shadow-text pt-3">In the competitive landscape of digital marketing, many businesses struggle with the manual adjustments and complex
                data analysis required to optimize ad spend effectively. Adobe Mix Modeler addresses these challenges by automating
                the optimization process, allowing marketers to focus on strategic initiatives rather than the minutiae of daily
                campaign adjustments. This automation not only saves time but also significantly reduces the potential for human
                error, leading to more consistent and effective ad performance.</p>
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler integrates seamlessly with other marketing platforms, such as Google Ads Smart Bidding, to provide
                a comprehensive solution for ad spend optimization. By using machine learning algorithms, it dynamically adjusts
                bids and allocates budget across various channels to ensure that ads reach the intended audience at optimal times.
                This level of precision helps businesses avoid wasted ad spend and improves overall campaign efficiency.</p>
              <p className="text-md text-white shadow-text pt-3">For companies in regions like Palm Beach and Broward counties, where marketing budgets are tight and competition is
                fierce, Adobe Mix Modeler offers a clear advantage. By automating the ad spend optimization process, businesses can
                achieve better results with less effort, ultimately leading to increased sales and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
