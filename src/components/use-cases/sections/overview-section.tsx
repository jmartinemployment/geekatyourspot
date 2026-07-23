import Image from "next/image";
import { automatedAccountsPayableContent } from "@/data/use-cases/automated-accounts-payable";

export default function OverviewSection() {
  const section = automatedAccountsPayableContent.sections.find(s => s.id === 1);

  if (!section) return null;
      // <header className="hidden min-h-screen bg-[rgb(2,48,89)] lg:block">
      //   <div className="container min-h-screen">
      //     <div className="grid min-h-screen grid-cols-12 place-items-center">
      //       <div className="col-span-7">

  return (
    <section className="min-h-screen bg-[#024059] text-white py-20">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center">
          {/* <div className="col-span-5 flex items-center justify-center">
            {section.image && (
              <Image
                src={section.image}
                width={450}
                height={562}
                quality={100}
                alt={section.title}
                className="h-auto w-auto"
                unoptimized
              />
            )}
          </div> */}
          <div className="col-span-12">
            <h2 className="text-white lg:text-7xl xl:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              {section.title}
            </h2>
            {section.description && (
              <p className="text-white text-xl font-normal shadow-text py-5">{section.description}</p>
            )}
            {section.subsections?.map((sub, idx) => (
              <div key={idx} className="mb-12">
                <h3 className="text-white lg:text-7xl xl:text-[3.0rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text ">{sub.heading}</h3>
                {sub.content?.map((para, pIdx) => (
                  <p key={pIdx} className="text-white text-xl font-normal shadow-text py-5">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
