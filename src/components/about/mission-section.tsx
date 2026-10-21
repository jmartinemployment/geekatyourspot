import Image from "next/image";

export default function MissionSection() {
  const image = (
    <Image
      src="/images/about/empowering-small-business-with-enterprise-technology.jpeg"
      width={1344}
      height={768}
      alt="Empowering small business with enterprise technology"
      className="h-auto w-full"
    />
  );

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        For too long, small businesses have been locked out of the technology solutions that power Fortune 500
        companies. That is not because those solutions do not exist, but because they have been priced and
        packaged for enterprise budgets. At Geek @ Your Spot LLC, we are changing that. We bring 40 years of
        battle-tested engineering expertise, including systems built
        for <strong>Fortune 500 companies</strong> and <strong>government agencies</strong>, directly to the
        businesses that need these capabilities most.</p>
      <p className="text-base text-white shadow-text pt-3">
        We do not just build websites. We architect solutions. Whether it is WordPress sites supercharged with
        Angular components, AI-powered business intelligence, or conversion-optimized marketing systems, we
        deliver enterprise-grade technology at prices that make sense for growing businesses.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of everything we do is a simple belief: technology should amplify your business, not
        complicate it. From that first Timex computer in 1982 to today&#39;s AI revolution, the mission has always
        been the same: make powerful technology accessible, approachable, and actually useful for the people who
        need it most.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="you-shouldnt-have-to-be-a-fortune-500-to-build-like-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                You Shouldn&#39;t Have to Be a Fortune 500 to Build Like One
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center">{image}</div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="you-shouldnt-have-to-be-a-fortune-500-to-build-like-one-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                You Shouldn&#39;t Have to Be a Fortune 500 to Build Like One
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center">{image}</div>
          </div>
        </div>
      </section>
    </>
  );
}
