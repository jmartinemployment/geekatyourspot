import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { GEEK_RECEPTIONIST_FAQ } from "@/components/tools/business-operations/ai-receptionist/geek-receptionist/faq";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="mr-4 inline-block align-middle text-[#0B162A]"
                style={{ width: "0.9em", height: "0.9em" }}
              />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            {GEEK_RECEPTIONIST_FAQ.map((item) => (
              <Fragment key={item.question}>
                <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
                <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  {item.question}
                </h3>
                <p className="text-base text-white shadow-text pt-3">{item.answer}</p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
