import Image from "next/image";
// import { automatedAccountsPayableContent } from "@/data/use-cases/automated-accounts-payable";

export default function IntroductionSection() {
  // const section = automatedAccountsPayableContent.sections.find(s => s.id === 2);

  // if (!section) return null;

  return (
    <>
    <section id="use-cases-section" className="w-full bg-[#025E73] min-h-screen py-5 hidden md:block scroll-mt-24">
      <div className="grid grid-cols-12 container mb-5 place-items-center">
        <div className="col-span-full">
          <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
            <a id="gtm-link-use-cases-home-title" className="hover:opacity-90 transition-opacity" href="/use-cases">
            Introduction to Automated Accounts Payable<br />
            <span className="text-[#8C2703] shadow-text">
              Use Cases
            </span>
            </a>
            </h2>
            </div>
        </div>
      </section>
    
    
    
    
    
    
    <section className="w-full bg-[#025E73] min-h-screen lg:block xl:block">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center">
          <div className="col-span-7 flex items-center justify-center">
            <h2 className="block text-white lg:text-7xl xl:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              
            </h2>
          </div>
          <div className="col-span-5 flex items-center justify-center">

              <Image
                src="/images/accounting/use-cases/accounts-payable/accounts-payable-automated-accounts-payable-streamlining-financial-operations-with-ai-intro.avif"
                width={450}
                height={562}
                quality={100}
                alt="Introduction to Automated Accounts Payable"
                className="h-auto w-auto"
              />
          </div>
        </div>
      </div>

    </section>
    </>
    )
    }
