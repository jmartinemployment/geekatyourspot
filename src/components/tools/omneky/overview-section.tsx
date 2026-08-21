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
              <p className="text-md text-white shadow-text pt-3">Omneky is an innovative AI-driven platform designed to enhance automated ad spend optimization, providing businesses
                with the tools they need to maximize their advertising ROI. By leveraging advanced machine learning algorithms,
                Omneky enables companies to precisely target their audiences, optimize ad placements, and manage budgets more
                effectively. This tool is particularly beneficial for businesses in Palm Beach and Broward counties that struggle
                with inefficient ad spend and complex data analysis.</p>
              <p className="text-md text-white shadow-text pt-3">The platform stands out by offering a comprehensive suite of features that streamline the ad management process.
                Omneky automates the dynamic adjustment of bids, ensuring that ads reach the right audience at the optimal time.
                This reduces the need for manual intervention and minimizes the risk of human error, ultimately leading to more
                efficient use of marketing budgets.</p>
              <p className="text-md text-white shadow-text pt-3">Omneky integrates seamlessly with existing systems, allowing for accelerated deployment and immediate impact. Its
                user-friendly interface and pre-built connectors simplify the setup process, making it accessible even for teams
                with limited technical expertise. The platform&#39;s capabilities extend beyond simple bid adjustments, offering
                insights into audience behavior and ad performance that help refine marketing strategies.</p>
              <p className="text-md text-white shadow-text pt-3">In the competitive landscape of digital marketing, tools like Omneky are essential for businesses aiming to stay
                ahead. By automating and optimizing ad spend, companies can not only cut down on wasted resources but also focus on
                strategies that drive tangible results. This makes Omneky a valuable asset for any marketing team looking to enhance
                their advertising efficiency and effectiveness.</p>
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
              <p className="text-md text-white shadow-text pt-3">Omneky is an innovative AI-driven platform designed to enhance automated ad spend optimization, providing businesses
                with the tools they need to maximize their advertising ROI. By leveraging advanced machine learning algorithms,
                Omneky enables companies to precisely target their audiences, optimize ad placements, and manage budgets more
                effectively. This tool is particularly beneficial for businesses in Palm Beach and Broward counties that struggle
                with inefficient ad spend and complex data analysis.</p>
              <p className="text-md text-white shadow-text pt-3">The platform stands out by offering a comprehensive suite of features that streamline the ad management process.
                Omneky automates the dynamic adjustment of bids, ensuring that ads reach the right audience at the optimal time.
                This reduces the need for manual intervention and minimizes the risk of human error, ultimately leading to more
                efficient use of marketing budgets.</p>
              <p className="text-md text-white shadow-text pt-3">Omneky integrates seamlessly with existing systems, allowing for accelerated deployment and immediate impact. Its
                user-friendly interface and pre-built connectors simplify the setup process, making it accessible even for teams
                with limited technical expertise. The platform&#39;s capabilities extend beyond simple bid adjustments, offering
                insights into audience behavior and ad performance that help refine marketing strategies.</p>
              <p className="text-md text-white shadow-text pt-3">In the competitive landscape of digital marketing, tools like Omneky are essential for businesses aiming to stay
                ahead. By automating and optimizing ad spend, companies can not only cut down on wasted resources but also focus on
                strategies that drive tangible results. This makes Omneky a valuable asset for any marketing team looking to enhance
                their advertising efficiency and effectiveness.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
