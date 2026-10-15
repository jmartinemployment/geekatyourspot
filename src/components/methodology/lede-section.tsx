export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        You are not against automation. You are against handing your books to something you cannot see
        inside. Software that posts entries nobody checked. A system that moves money on rules nobody in your
        building wrote. An error that compounds quietly for months and surfaces in a <strong>compliance
        audit</strong> or an <strong>IRS notice</strong>. That is <strong>black box anxiety</strong>, and for a
        business running on tight margins it is a reasonable fear.</p>
      <p className="text-md text-white shadow-text pt-3">
        Owners across <strong>Miami-Dade</strong>, <strong>Broward</strong>, and <strong>Palm Beach</strong> hear
        the same pitch. A platform first. A demo. A multi-year contract. Then a rollout that bends the business
        to fit the software. When it goes wrong, nobody can explain what the system did, because nobody can see
        inside it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Our methodology runs the other way. Four phases, each one a checkpoint. Each one ends with something you
        can see and approve. Your business sets the rules. Your data gets inspected before any system acts on
        it. Your tools are chosen on your terms. Your old process keeps running until the new one proves
        itself.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every project starts with a <strong>free consultation</strong>. Here is what happens after it, phase by
        phase, and why each step is built to keep a human at the wheel.</p>
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
              <h2 id="the-black-box-ends-here" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
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
