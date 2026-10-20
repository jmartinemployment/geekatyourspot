import Link from "next/link";

export default function WhoWeAreSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC is an AI consulting firm based in Delray Beach, Florida. This Privacy Policy
        explains what information we collect when you visit geekatyourspot.com or book a consultation through
        it, how we use that information, and the choices you have. In this policy, “we,” “us,” and “our” mean
        Geek @ Your Spot LLC, and “you” means anyone who visits the site.</p>
      <p className="text-md text-white shadow-text pt-3">
        This policy takes effect on <strong>October 15, 2026</strong>. Your use of the site is also governed
        by our <Link id={`privacy-policy-who-we-are-terms${idSuffix}`} href="/terms-and-conditions" className="text-[#C83803] hover:underline">Terms
        of Service</Link>, which you should read alongside this policy.</p>
      <p className="text-md text-white shadow-text pt-3">
        We wrote this policy in plain language on purpose. We ask clients to trust us with their financial
        systems, so we think you should be able to see exactly what happens to your own information when you
        visit our site.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-we-are-and-what-this-policy-covers" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who We Are and What This Policy Covers
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-we-are-and-what-this-policy-covers-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who We Are and What This Policy Covers
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
