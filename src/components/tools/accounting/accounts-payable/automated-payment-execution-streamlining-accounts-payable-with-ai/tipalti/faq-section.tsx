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
              Do all payees need to register their information?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Tipalti gathers all necessary contact and banking details from payees through our payee
              registration IFRAME or supplier portal. This process ensures payees are eligible and legal to be
              paid. Payees also select their payment method and currency preference, and we collect their tax
              forms. For businesses with an existing payee list, we can import this information directly into
              Tipalti to make onboarding smoother.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will payees know we’re using Tipalti?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payees might notice Tipalti if you use our Supplier Portal, which is hosted on our servers and
              offers more communication and reporting features. However, if you embed the IFRAME portal on
              your site, it can blend seamlessly with your existing web pages.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can payees change their payment methods?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, payees can change their payment methods at any time. These changes will be updated in the
              system promptly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
