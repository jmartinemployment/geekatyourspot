export default function YourRightsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        You can ask us to tell you what personal information we hold about you, to correct it, or to delete
        it. Call us or write to us using the details at the end of this policy, and we will respond within 30
        days. We may ask you to confirm your identity before we act on a request, so that nobody else can see
        or erase your information.</p>
      <p className="text-md text-white shadow-text pt-3">
        Deleting your information from our records does not remove data that Google Analytics has already
        stored, because that data is not linked to your name. The browser settings and the Google extension
        described in the cookies section stop new analytics data from being collected.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some state privacy laws give their residents additional rights. We will honor any right that applies
        to you under the law of the state where you live.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Children
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        This site is meant for business owners and is not directed to children. We do not knowingly collect
        personal information from anyone under 13. If you believe a child has given us information, contact us
        and we will delete it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="your-choices-and-rights" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Your Choices and Rights
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="your-choices-and-rights-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Your Choices and Rights
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
