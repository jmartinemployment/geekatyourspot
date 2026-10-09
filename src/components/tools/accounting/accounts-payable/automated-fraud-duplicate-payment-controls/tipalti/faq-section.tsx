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
              How many attempts are made to execute a payment?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Tipalti does not try again if a payment is rejected. The payee will remain un-payable until they
              update their payment details through the supplier portal.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will Tipalti still pay out if we do not have funds in our account?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No, all payments must be funded in advance.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How fast are payments processed?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The speed of payment processing depends on several factors, including the payment method,
              currency conversions, and the payee’s banking system.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              When are payees informed of payments that were made?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payees receive automatic notifications when payments are made. If there is an issue, such as
              incomplete tax forms or a bank rejection, they are informed of the problem.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we use Tipalti to pay other suppliers?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, you can pay other suppliers if they are registered, your account is funded, and a payment
              type is selected in Tipalti. Many customers use Tipalti to streamline their accounts payable
              processes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Tipalti Detect and how does it prevent fraud?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Tipalti Detect is a proactive defense system against fraud, designed to identify suspicious
              patterns before they pose a threat. It is particularly effective for global partner business
              models, offering robust audit trails and detailed tracking to maintain secure and compliant
              operations.&nbsp;
              <a id="tools-accounting-fraud-controls-tipalti-faq-stop-fraud"
                href="https://tipalti.com/accounts-payable-software/payment-fraud-detection/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Stop Fraud Before It Starts
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Tipalti ensure compliance with global sanctions and watchlists?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Tipalti offers advanced compliance checks, including Anti-Money Laundering (AML) and Know Your
              Customer (KYC) regulations. This ensures that all transactions and payees are verified against
              global sanctions and watchlists, maintaining compliance with international standards.&nbsp;
              <a id="tools-accounting-fraud-controls-tipalti-faq-gaming"
                href="https://tipalti.com/industries/gaming-industry-solutions/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                How does Tipalti’s gaming payment solution work?
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How are supplier identities validated during onboarding?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Supplier identities are validated through a self-service supplier portal, which collects
              necessary data such as tax forms and banking details. Tipalti uses over 26,000 automated
              electronic payment rules to verify payment details, ensuring accuracy and compliance during the
              onboarding process.&nbsp;
              <a id="tools-accounting-fraud-controls-tipalti-faq-nonprofit"
                href="https://tipalti.com/blog/accounting-software-nonprofit/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Leading Nonprofit Accounting Software
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Tipalti run checks on subsequent payouts after initial onboarding?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Tipalti continuously monitors transactions to detect suspicious activity across payments,
              refunds, and seller payouts. This ongoing vigilance helps to maintain security and compliance
              beyond the initial onboarding phase.&nbsp;
              <a id="tools-accounting-fraud-controls-tipalti-faq-marketplace"
                href="https://tipalti.com/blog/marketplace-trends/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Marketplace Economy 101
              </a></p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does the platform provide a clear paper trail for audited fraud cases?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Tipalti provides a robust audit trail that supports detailed tracking of transactions, which is
              essential for auditing fraud cases. This transparency helps ensure that all financial activities
              can be reviewed and verified as needed.&nbsp;
              <a id="tools-accounting-fraud-controls-tipalti-faq-stop-fraud-2"
                href="https://tipalti.com/accounts-payable-software/payment-fraud-detection/"
                target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
                Stop Fraud Before It Starts
              </a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
