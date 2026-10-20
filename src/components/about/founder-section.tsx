import Image from "next/image";

export default function FounderSection() {
  const image = (
    <Image
      src="/images/action-figure.jpeg"
      width={1024}
      height={1536}
      alt="AI-created action figure of Jeff Martin, founder and CEO of Geek @ Your Spot LLC in Delray Beach, Florida."
      className="h-auto w-full"
    />
  );

  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        I am <strong>Jeff Martin</strong>, the founder and CEO of Geek @ Your Spot LLC in Delray Beach, Florida.</p>
      <p className="text-md text-white shadow-text pt-3">
        I have spent four decades building technology, from the <strong>Timex Sinclair</strong> and
        the <strong>Commodore 64</strong> to the systems that power enterprise businesses. That work has included
        modernizing CRM platforms for <strong>Fortune 500 insurance companies</strong>, designing
        government-compliant service systems, and architecting secure, scalable solutions that process millions
        of transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        My expertise spans full-stack development (C#, .NET, Angular, React), cloud infrastructure (AWS, Azure), AI
        integration (Claude API, OpenAI API), database design (SQL Server, PostgreSQL), and digital marketing
        optimization.</p>
      <p className="text-md text-white shadow-text pt-3">
        Technology should make business easier, not more complicated. I bring enterprise-level capabilities to
        small businesses, with practical, scalable solutions that come without the enterprise price tag.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Areas of Expertise
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Full Stack Development</li>
        <li>AI Integration</li>
        <li>Cloud Architecture</li>
        <li>Database Design</li>
        <li>SEO &amp; Analytics</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">{image}</div>
            <div className="col-span-7">
              <h2 id="forty-years-of-engineering-expertise" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Forty Years of Engineering Expertise
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">{image}</div>
            <div className="col-span-7">
              <h2 id="forty-years-of-engineering-expertise" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Forty Years of Engineering Expertise
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
