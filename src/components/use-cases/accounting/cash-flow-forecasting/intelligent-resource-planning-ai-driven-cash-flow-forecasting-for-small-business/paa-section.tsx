export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What exactly is an ERP system?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              An ERP is a single software platform that brings together all your main business tasks. This
              includes finance, HR, manufacturing, supply chain, services, and procurement. Instead of each
              department using its own software, everyone works from a shared database.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Isn’t ERP software only for giant, multi-million dollar corporations?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No, that’s outdated thinking. Modern ERP and accounting automation is built for small businesses.
              You choose and pay for only the features you need, such as automated invoicing or inventory
              tracking, and you can add more as your business grows in South Florida.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Who is going to manage and maintain this system? Do I need to hire a full-time IT or database person?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No need to hire anyone new. The software is fully cloud-hosted, so the vendor takes care of all
              updates, security, and backups. Geek @ Your Spot LLC serves as your local IT partner, handling setup,
              data integration, and ongoing support, so your team can stay focused on daily business.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will this new automation software play nice with the tools and bank accounts I already use?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, it will. The tools we implement connect securely to major business bank accounts, common POS
              systems, CRM software, and merchant payment gateways. This keeps your data flowing smoothly and
              avoids disrupting your current workflow.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does this tool help us handle multi-location operations or mobile employees moving between counties?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You get secure, real-time access to your system from anywhere. Whether your team is in Miami-Dade,
              Broward, or Palm Beach, employees can log expenses, upload receipts, track inventory, and view
              invoices on their phones or tablets. Your main office stays updated instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
