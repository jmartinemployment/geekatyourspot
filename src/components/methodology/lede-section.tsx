export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        You are not against automation. You are against handing your books to software you cannot see inside.
        You worry about entries that post without anyone checking them, and about a system that moves money on
        rules nobody in your building wrote. Worst of all, you worry about an error that compounds quietly for
        months and then surfaces in a <strong>compliance audit</strong> or an <strong>IRS notice</strong>. That
        is <strong>black box anxiety</strong>, and for a business running on tight margins it is a reasonable
        fear.</p>
      <p className="text-md text-white shadow-text pt-3">
        Owners across <strong>Miami-Dade</strong>, <strong>Broward</strong>, and <strong>Palm Beach</strong> hear
        the same pitch again and again. The vendor leads with a platform and a polished demo, and then asks for a
        contract that runs for years. The rollout that follows bends the business to fit the software. When
        something goes wrong, nobody can explain what the system did, because nobody can see inside it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Our methodology works the other way around. It runs in four phases, and each phase is a checkpoint that
        ends with something you can see and approve. Your business sets the rules, and your data is inspected
        before any system acts on it. You choose your tools on your own terms, and your old process keeps running
        until the new one proves itself.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every project starts with a <strong>free consultation</strong>. The sections below explain what happens
        after that conversation, phase by phase, and how each step keeps a person at the wheel.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-black-box-ends-here" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Black Box Ends Here
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-black-box-ends-here-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Black Box Ends Here
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
