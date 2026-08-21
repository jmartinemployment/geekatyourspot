import Image from "next/image";

export default function WhenToUseSection() {

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Qualytics is particularly beneficial for businesses looking to optimize their ad spend by ensuring data quality. If
                your organization struggles with inconsistent data that affects your ad campaigns, Qualytics can provide the
                solution you need. By automating data quality checks, the platform allows you to focus on strategic decisions rather
                than data cleanup.</p>
              <p className="text-md text-white shadow-text pt-3">For companies using platforms like Omneky or Madgicx, where data-driven decisions are critical, Qualytics can
                enhance the effectiveness of these tools by providing reliable data inputs. This leads to more accurate targeting
                and better ROI on ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">Businesses looking to reduce manual intervention in their ad management processes will find Qualytics invaluable. By
                automating data validation and anomaly detection, the platform minimizes the risk of human error and ensures that
                your marketing strategies are backed by solid data.</p>
              <p className="text-md text-white shadow-text pt-3">In summary, if your goal is to maximize the efficiency of your marketing budget and improve the accuracy of your ad
                spend optimization efforts, Qualytics offers the tools and capabilities to achieve these objectives. By ensuring
                data quality, it supports more effective use of AI-driven ad platforms, ultimately leading to better business
                outcomes.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#8C4E2A] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
              <p className="text-md text-white shadow-text pt-3">Qualytics is particularly beneficial for businesses looking to optimize their ad spend by ensuring data quality. If
                your organization struggles with inconsistent data that affects your ad campaigns, Qualytics can provide the
                solution you need. By automating data quality checks, the platform allows you to focus on strategic decisions rather
                than data cleanup.</p>
              <p className="text-md text-white shadow-text pt-3">For companies using platforms like Omneky or Madgicx, where data-driven decisions are critical, Qualytics can
                enhance the effectiveness of these tools by providing reliable data inputs. This leads to more accurate targeting
                and better ROI on ad spend.</p>
              <p className="text-md text-white shadow-text pt-3">Businesses looking to reduce manual intervention in their ad management processes will find Qualytics invaluable. By
                automating data validation and anomaly detection, the platform minimizes the risk of human error and ensures that
                your marketing strategies are backed by solid data.</p>
              <p className="text-md text-white shadow-text pt-3">In summary, if your goal is to maximize the efficiency of your marketing budget and improve the accuracy of your ad
                spend optimization efforts, Qualytics offers the tools and capabilities to achieve these objectives. By ensuring
                data quality, it supports more effective use of AI-driven ad platforms, ultimately leading to better business
                outcomes.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
