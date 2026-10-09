export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What does BILL AI do?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL AI alerts you if a duplicate invoice is detected, helping you avoid paying the same bill
              twice.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does BILL AI help with missing bills?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL AI reviews your payment history to identify potential missing bills, helping you avoid late
              fees.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can BILL AI create W-9 forms?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              You can upload a W-9 for a vendor, and BILL AI will extract the data and update the vendor’s
              record.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does BILL AI assist with expense management?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL AI codes transactions by auto-populating categories, analyzing merchant and transaction
              details, and using selection history. This saves reconciliation time and improves accuracy.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is AI-powered receipt capture and matching?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL AI uses receipt integrations to automatically match receipts with the correct
              transactions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is ACH secure?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The ACH network is federally regulated and overseen by the National Automated Clearing House
              Association (NACHA), which enforces strict controls and procedures for secure payments.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does using ACH help me manage my cash flow?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              ACH transfers reflect immediately in your account, unlike credit card or check payments that can
              take days or weeks. You can schedule ACH transfers for specific dates or set them as recurring
              payments for better cash flow visibility.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does BILL prevent internal fraud and unauthorized access?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              BILL employs multiple layers of security to prevent internal fraud and unauthorized access. The
              platform uses multi-factor authentication, secure login credentials, and strict procedures for
              password resets. Additionally, BILL provides robust permission controls and a complete,
              unalterable audit trail to protect financial data. These measures ensure that every action is
              meticulously logged, creating a transparent and secure record for audits and compliance.&nbsp;
              <a id="tools-accounting-fraud-controls-bill-faq-compare"
                href="https://www.bill.com/compare"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Compare BILL to other financial automation platforms
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What should I do if I notice suspicious activity on my BILL account?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              If you notice suspicious activity on your BILL account, it is important to contact customer
              support as soon as possible. BILL advises reporting any unauthorized transfers or errors within 60
              days of the transaction posting to your account. They will investigate and resolve any suspected
              errors to ensure your account remains secure.&nbsp;
              <a id="tools-accounting-fraud-controls-bill-faq-eft-disclosure"
                href="https://www.bill.com/legal/electronic-funds-transfer-disclosure"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Electronic Funds Transfer Agreement and Disclosures
              </a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
