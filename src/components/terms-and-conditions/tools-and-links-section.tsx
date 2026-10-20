export default function ToolsAndLinksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Many of our pages describe software made by other companies, including accounting, payments, payroll,
        and tax tools. Product names, logos, and trademarks belong to their owners. Naming a product does not
        mean its maker sponsors or endorses us, and it does not mean we recommend that product for every
        business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Software makers change their prices, features, and contract terms often. We work to keep our pages
        current, but you should confirm the details with the maker before you buy or sign anything.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Links to Other Websites
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        The site links to websites we do not control. We are not responsible for their content, their privacy
        practices, or the products they sell, and your use of them is governed by their own terms.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="tools-and-websites-we-name" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Tools and Websites We Name
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
              <h2 id="tools-and-websites-we-name-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Tools and Websites We Name
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
