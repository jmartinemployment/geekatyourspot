export default function CloneYourselfSection() {
  return (
    <>
      <section className="w-full bg-[#024059] min-h-screen py-42 lg:hidden">
        <div className="container">
          <div className="grid grid-cols-1 mb-12">
            <div className="col-span-full">
              <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Clone Yourself
                <br />
                <span className="text-[#8C2703]">Work 24/7</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-12">
            <div className="col-span-6">
              <p className="text-white text-lg shadow-text">
                Create a lifelike AI version of yourself that never stops.
                Designed to create content, engage customers, nurture leads,
                close opportunities. A counterpart works nonstop optimizing
                operations, HR, and finance behind the scenes across your entire
                business.
              </p>
            </div>
            <div className="col-span-6 place-items-center">
              <div className="w-full bg-[#03020d] border border-white/10 flex flex-col justify-center rounded-sm shadow-box mb-3">
                <p className="text-4xl font-black text-white mx-auto text-center">40%</p>
                <p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest text-center mx-auto">
                  Cost Reduction
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-3 place-items-center">
                  <div className="w-full bg-[#03020d] border border-white/10 rounded-sm shadow-box px-5">
                    <p className="text-2xl font-black text-white text-center">
                      3x
                    </p>
                    <p className="text-[8px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Productivity
                    </p>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="w-full bg-[#8C2703] text-white rounded-sm shadow-box text-center">
                    <p className="text-2xl font-black text-center">24/7</p>
                    <p className="text-[8px] font-bold text-orange-200 uppercase tracking-widest text-center">
                      Automated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#024059] min-h-screen hidden lg:block xl:block">
        <div className="container min-h-screen">
          <div className="grid grid-cols-2 content-center gap-4 items-center min-h-screen">
            <div>
              <h2 className="text-white lg:text-7xl xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Clone Yourself
                <br />
                <span className="text-[#8C2703]">Work 24/7</span>
              </h2>
              <p className="text-white text-xl font-normal shadow-text py-5">
                Create a lifelike AI version of yourself that never stops.
                Designed to create content, engage customers, nurture leads,
                close opportunities. A counterpart works nonstop optimizing
                operations, HR, and finance behind the scenes across your entire
                business.
              </p>
            </div>
            <div className="w-full flex justify-center mt-8">
              <div>
                <div className="grid grid-cols-2 gap-4 w-full mx-auto">
                  <div className="col-span-2 bg-[#03020d] border border-white/10 flex flex-col justify-center rounded-sm shadow-box">
                    <p className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center">
                      40%
                    </p>
                    <p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest text-center">
                      Cost Reduction
                    </p>
                  </div>
                  <div className="p-4 md:p-6 lg:p-8 bg-[#03020d] border border-white/10 flex flex-col justify-center rounded-sm shadow-box">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 text-center">
                      3x
                    </p>
                    <p className="text-[8px] md:text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
                      Productivity
                    </p>
                  </div>
                  <div className="p-4 md:p-6 lg:p-8 bg-[#8C2703] flex flex-col justify-center text-white rounded-sm shadow-box">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2 text-center">
                      24/7
                    </p>
                    <p className="text-[8px] md:text-xs font-bold text-orange-200 uppercase tracking-widest text-center">
                      Automated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
