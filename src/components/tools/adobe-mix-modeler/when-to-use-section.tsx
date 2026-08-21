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
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler is particularly beneficial for businesses that are looking to enhance their ad spend optimization
                efforts through automation. It is ideal for companies that are experiencing inefficiencies in their current ad
                management processes and are seeking a more streamlined approach to campaign management.</p>
              <p className="text-md text-white shadow-text pt-3">This tool is well-suited for organizations that have multiple advertising channels and require a unified solution to
                manage them effectively. By integrating with platforms like HubSpot and Salesforce Einstein, Adobe Mix Modeler
                provides a comprehensive view of campaign performance, enabling businesses to make informed decisions about their
                marketing strategies.</p>
              <p className="text-md text-white shadow-text pt-3">For businesses in competitive markets, such as those in Palm Beach and Broward counties, where every marketing
                dollar counts, Adobe Mix Modeler offers a significant advantage. By automating the ad spend optimization process, it
                allows companies to focus on strategic initiatives that drive growth and improve customer satisfaction.</p>
              <p className="text-md text-white shadow-text pt-3">Ultimately, Adobe Mix Modeler is a valuable tool for any business looking to reduce wasted ad spend, improve
                targeting precision, and achieve better overall marketing results. By implementing this tool, companies can unlock
                the full potential of their advertising efforts and realize tangible benefits in terms of time savings, cost
                reduction, and increased sales.</p>
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
              <p className="text-md text-white shadow-text pt-3">Adobe Mix Modeler is particularly beneficial for businesses that are looking to enhance their ad spend optimization
                efforts through automation. It is ideal for companies that are experiencing inefficiencies in their current ad
                management processes and are seeking a more streamlined approach to campaign management.</p>
              <p className="text-md text-white shadow-text pt-3">This tool is well-suited for organizations that have multiple advertising channels and require a unified solution to
                manage them effectively. By integrating with platforms like HubSpot and Salesforce Einstein, Adobe Mix Modeler
                provides a comprehensive view of campaign performance, enabling businesses to make informed decisions about their
                marketing strategies.</p>
              <p className="text-md text-white shadow-text pt-3">For businesses in competitive markets, such as those in Palm Beach and Broward counties, where every marketing
                dollar counts, Adobe Mix Modeler offers a significant advantage. By automating the ad spend optimization process, it
                allows companies to focus on strategic initiatives that drive growth and improve customer satisfaction.</p>
              <p className="text-md text-white shadow-text pt-3">Ultimately, Adobe Mix Modeler is a valuable tool for any business looking to reduce wasted ad spend, improve
                targeting precision, and achieve better overall marketing results. By implementing this tool, companies can unlock
                the full potential of their advertising efforts and realize tangible benefits in terms of time savings, cost
                reduction, and increased sales.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
