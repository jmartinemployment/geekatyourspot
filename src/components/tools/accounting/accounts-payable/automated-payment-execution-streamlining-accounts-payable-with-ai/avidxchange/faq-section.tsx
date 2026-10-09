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
              Do I need to change my existing approval workflows in RAAMP?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, you don&#39;t need to change anything.&nbsp;
              <a id="tools-accounting-payment-execution-avidxchange-faq-raamp"
                href="https://www.avidxchange.com/raamp-integration/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                AvidXchange
              </a>&nbsp;works within RAAMP, so your payments will follow the current approval structure
              without requiring new workflows.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What payment methods does AvidXchange support?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              AvidXchange supports several payment methods: virtual card, AvidPay Direct (enhanced direct
              deposit), and check. Payments are delivered using the supplier’s preferred method, with
              real-time status updates and PDF payment proofs available directly in RAAMP.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there a cost to my vendors/suppliers?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The cost depends on the payment method chosen, and vendors always have the option to select how
              they’re paid.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              I’m looking for payment or invoice approval status.
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Once your invoice is approved for payment,&nbsp;
              <a id="tools-accounting-payment-execution-avidxchange-faq-suppliers"
                href="https://www.avidxchange.com/suppliers/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                AvidXchange
              </a>&nbsp;sends your funds via your preferred payment method. For 24/7 visibility into your
              invoice and payment statuses, request access to the complimentary AvidXchange Supplier Hub.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              I need help with a payment.
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              For 24/7 visibility into your invoice and payment statuses, request access to the complimentary
              AvidXchange Supplier Hub. For other payment inquiries, visit our Supplier Care page and complete
              the form, or use the chat icon in the bottom right-hand corner.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              I need to update my preferred payment method.
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              To update your payment method, visit our Supplier Care page, select ‘Payment question,’ and then
              ‘Change my payment method’ from the dropdown menus.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I submit an invoice?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Submit invoices as instructed by your customer, either via email or to their dedicated P.O. box.
              If emailing, save attachments as a PDF and send only one invoice per PDF, with a maximum file
              size of 10 MB.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
