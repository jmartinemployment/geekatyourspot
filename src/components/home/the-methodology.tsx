import { MethogologyRevealOnScroll } from "./methodology-reveal-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  faCircleCheck,
  fa1,
  fa2,
  fa3,
  fa4,
} from "@fortawesome/free-solid-svg-icons";

export default function TheMethodologySection() {
  return (
    <>
      <section className="w-full bg-[#0C1A26] min-h-screen py-5 lg:hidden">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="col-span-full">
              <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl leading-[0.9] font-black font-[var(--font-sora)] shadow-text">
                The &nbsp;
                <br />
                <span className="text-[#8C2703]">Methodology</span>
              </h2>
              <p className="text-white text-lg shadow-text">
                Every project starts with a free consultation and a clear
                four-phase plan, define business objectives, assess data quality,
                choose the right AI technologies, and build an implementation
                strategy, so AI fits your existing systems and you scale without
                adding headcount.
              </p>
              <ul className="text-white text-lg font-bold shadow-text py-1">
                <li className="inline-block">
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-4 h-4  text-[#8C2703] inline"
                    />
                    &nbsp;&nbsp;Seamless Integration
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-4 h-4  text-[#8C2703] inline"
                    />
                    &nbsp;&nbsp;Zero Downtime
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-4 h-4  text-[#8C2703] inline"
                    />
                    &nbsp;&nbsp;Continuous Scaling
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 min-w-0 flex flex-col">
              <MethogologyRevealOnScroll
                className="flex-1"
                direction="up"
                delay={0}
              >
                <Card className="bg-[#8C2703] mb-2 shadow-box h-full pe-2">
                  <div className="grid grid-cols-[20%_minmax(0,1fr)] gap-2">
                    <div className="min-w-0">
                      <FontAwesomeIcon
                        icon={fa1}
                        className="w-16 h-16  text-[#0C1A26] inline shadow-text"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-lg shadow-text">
                        Define Business Objectives
                      </h3>
                      <span className="text-white text-sm shadow-text">
                        Identify specific inefficiencies where AI can add value.
                        Set clear, measurable Key Performance Indicators
                        (KPIs). Actionable insights that can guide businesses in
                        making informed decisions about a marketing campaign or
                        business decision.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>
            </div>
            <div className="col-span-6 min-w-0 flex flex-col">
              <MethogologyRevealOnScroll
                className="flex-1"
                direction="up"
                delay={0}
              >
                <Card className="bg-[#8C2703] mb-2 shadow-box h-full pe-2">
                  <div className="grid grid-cols-[20%_minmax(0,1fr)] gap-2">
                    <div className="min-w-0">
                      <FontAwesomeIcon
                        icon={fa2}
                        className="w-16 h-16  text-[#0C1A26] inline shadow-text"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-lg shadow-text">
                        Data Quality Assessment
                      </h3>
                      <span className="text-white text-sm shadow-text">
                        A structured process of evaluating data for Accuracy,
                        Completeness, Consistency, Timeliness, Validity and
                        Uniqueness. Then assess the work involved in cleansing
                        and standardization to remove duplicates, handle missing
                        values, and standardize formats.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>
            </div>
            <div className="col-span-6 min-w-0 flex flex-col">
              <MethogologyRevealOnScroll
                className="flex-1"
                direction="up"
                delay={0}
              >
                <Card className="bg-[#8C2703] mb-2 shadow-box h-full pe-2">
                  <div className="grid grid-cols-[20%_minmax(0,1fr)] gap-2">
                    <div className="min-w-0">
                      <FontAwesomeIcon
                        icon={fa3}
                        className="w-16 h-16  text-[#0C1A26] inline shadow-text"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-lg shadow-text">
                        Choose the Right AI Technologies
                      </h3>
                      <span className="text-white text-sm shadow-text">
                        The problem first approach. Start small, identify a
                        single specific workflow to automate. Prioritize tools
                        that work within your existing systems. Choose ease of
                        use platforms that require minimal training. And
                        consider the total cost of ownership which includes
                        setup time, training and ongoing &quot;Token&quot;
                        usage.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>
            </div>
            <div className="col-span-6 min-w-0 flex flex-col">
              <MethogologyRevealOnScroll
                className="flex-1"
                direction="up"
                delay={0}
              >
                <Card className="bg-[#8C2703] mb-2 shadow-box h-full pe-2">
                  <div className="grid grid-cols-[20%_minmax(0,1fr)] gap-2">
                    <div className="min-w-0">
                      <FontAwesomeIcon
                        icon={fa4}
                        className="w-16 h-16  text-[#0C1A26] inline shadow-text"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-white font-bold text-lg shadow-text">
                        Implementation Strategy
                      </h3>
                      <span className="text-white text-sm shadow-text">
                        Start small by launching a pilot program, where you
                        measure the return on investment. And be sure to consult
                        the U.S. SBA official guides to fully understand the
                        ethical and legal risks associated with AI and your
                        specific industry.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-6">
          <div className="col-span-1">
            <FontAwesomeIcon
              icon={fa2}
              className="w-10 h-10  text-[#8C2703] inline"
            />
          </div>
          <div className="col-span-5">
            <h3 className="text-white font-bold text-xl shadow-text pt-1">
              Data Quality Assessment
            </h3>
            <span className="text-white text-sm leading-none shadow-text">
              A structured process of evaluating data for Accuracy,
              Completeness, Consistency, Timeliness, Validity and Uniqueness.
              Then assess the work involved in cleansing and standardization to
              remove duplicates, handle missing values, and standardize formats.
            </span>
          </div>
          </div>
        </div> */}
      </section>

      <section className="bg-[#0C1A26] min-h-screen hidden lg:block py-7">
        <div className="container min-h-screen">
          <div className="grid grid-cols-12 place-items-center min-h-screen">
            <div className="col-span-6 min-h-screen">
              <div className="grid grid-cols-1 min-h-screen place-items-center">
                <div className="">
                  <h2 className="text-white lg:text-7xl xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                    The
                    <br />
                    <span className="text-[#8C2703]">Methodology</span>
                  </h2>
                  <p className="text-white text-xl font-normal shadow-text">
                    Every project starts with a free consultation and a clear
                    four-phase plan, define business objectives, assess data
                    quality, choose the right AI technologies, and build an
                    implementation strategy, so AI fits your existing systems and
                    you scale without adding headcount.
                  </p>
                  <ul className="text-white text-xl font-normal shadow-text py-2">
                    <li className="inline-block">
                      <span>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="w-4 h-4  text-[#8C2703] inline"
                        />
                        &nbsp;&nbsp;Seamless Integration
                      </span>
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="w-4 h-4  text-[#8C2703] inline"
                        />
                        &nbsp;&nbsp;Zero Downtime
                      </span>
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="w-4 h-4  text-[#8C2703] inline"
                        />
                        &nbsp;&nbsp;Continuous Scaling
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-6 min-h-screen">
              {/* <div className="grid grid-cols-12 min-h-screen place-items-center">
                <div className="col-span-1">&nbsp;</div>
                <div className="col-span-2 self-start pt-2">
                  <FontAwesomeIcon
                    icon={fa1}
                    className="w-16 h-16  text-[#8C2703] inline"
                  />
                </div>
                <div className="col-span-9 self-start">
                  <h3 className="text-white font-bold text-xl shadow-text">
                    Define of Business Objectives
                  </h3>
                  <span className="text-white text-md leading-[0.95] shadow-text">
                    Identify specific inefficiencies where AI can add value. Set
                    clear, measurable Key Performance Indicators (KPIs).
                    Actionable insights that can guide businesses in making
                    informed decisions about a marketing campaign or business
                    decision.
                  </span>
                </div>
                <div className="col-span-1">&nbsp;</div>
                <div className="col-span-2 self-start pt-2">
                  <FontAwesomeIcon
                    icon={fa2}
                    className="w-16 h-16  text-[#8C2703] inline"
                  />
                </div>
                <div className="col-span-9 self-start">
                  <h3 className="text-white font-bold text-xl shadow-text">
                    Data Quality Assessment
                  </h3>
                  <span className="text-white text-md leading-[0.95] shadow-text">
                    A structured process of evaluating data for Accuracy,
                    Completeness, Consistency, Timeliness, Validity and
                    Uniqueness. Then assess the work involved in cleansing and
                    standardization to remove duplicates, handle missing values,
                    and standardize formats.
                  </span>
                </div>
                <div className="col-span-1">&nbsp;</div>
                <div className="col-span-2 self-start pt-2">
                  <FontAwesomeIcon
                    icon={fa3}
                    className="w-16 h-16  text-[#8C2703] inline"
                  />
                </div>
                <div className="col-span-9 self-start">
                  <h3 className="text-white font-bold text-xl shadow-text">
                    Choose the Right AI Technologies
                  </h3>
                  <span className="text-white text-md leading-[0.95] shadow-text">
                    The problem first approach. Start small, identify a single
                    specific workflow to automate. Prioritize tools that work
                    within your existing systems. Choose ease of use platforms
                    that require minimal training. And consider the total cost
                    of ownership which includes setup time, training and ongoing
                    &quot;Token&quot; usage.
                  </span>
                </div>
                <div className="col-span-1">&nbsp;</div>
                <div className="col-span-2 self-start pt-2">
                  <FontAwesomeIcon
                    icon={fa4}
                    className="w-16 h-16  text-[#8C2703] inline"
                  />
                </div>

                <div className="col-span-9 self-start">
                  <h3 className="text-white font-bold text-xl shadow-text">
                    Implementation Strategy
                  </h3>
                  <span className="text-white text-md leading-[0.95] shadow-text">
                    Start small by launching a pilot program, where you measure
                    the return on investment. And be sure to consult the U.S.
                    SBA official guides to fully understand the ethical and
                    legal risks associated with AI and your specific industry.
                  </span>
                </div>
              </div>
            </div> */}
              <MethogologyRevealOnScroll direction="up" delay={0}>
                <Card className="w-100 bg-[#8C2703] mb-2 pe-4 shadow-box">
                  <div className="grid grid-cols-[20%_80%]">
                    <FontAwesomeIcon
                      icon={fa1}
                      className="w-16 h-16  text-[#0C1A26] inline shadow-text pt-2"
                    />
                    <div>
                      <h3 className="text-white font-bold lg:text-lg xl:text-xl shadow-text">
                        Define Business Objectives
                      </h3>
                      <span className="text-white lg:text-sm xl:text-lg shadow-text">
                        Identify specific inefficiencies where AI can add value.
                        Set clear, measurable Key Performance Indicators
                        (KPIs). Actionable insights that can guide businesses in
                        making informed decisions about a marketing campaign or
                        business decision.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>

              <MethogologyRevealOnScroll direction="up" delay={0.15}>
                <Card className="w-100 bg-[#8C2703] mb-2 pe-4 shadow-box ">
                  <div className="grid grid-cols-[20%_80%]">
                    <FontAwesomeIcon
                      icon={fa2}
                      className="w-16 h-16  text-[#0C1A26] inline shadow-text pt-2"
                    />
                    <div>
                      <h3 className="text-white font-bold lg:text-lg xl:text-xl shadow-text">
                        Data Quality Assessment
                      </h3>
                      <span className="text-white lg:text-sm xl:text-lg shadow-text">
                        A structured process of evaluating data for Accuracy,
                        Completeness, Consistency, Timeliness, Validity and
                        Uniqueness. Then assess the work involved in cleansing
                        and standardization to remove duplicates, handle missing
                        values, and standardize formats.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>
              <MethogologyRevealOnScroll direction="up" delay={0.3}>
                <Card className="w-100 bg-[#8C2703] mb-2  pe-4 shadow-box">
                  <div className="grid grid-cols-[20%_80%]">
                    <FontAwesomeIcon
                      icon={fa3}
                      className="w-16 h-16  text-[#0C1A26] inline shadow-text pt-2"
                    />
                    <div>
                      <h3 className="text-white font-bold lg:text-lg xl:text-xl shadow-text">
                        Choose the Right AI Technologies
                      </h3>
                      <span className="text-white lg:text-sm xl:text-lg shadow-text">
                        The problem first approach. Start small, identify a
                        single specific workflow to automate. Prioritize tools
                        that work within your existing systems. Choose ease of
                        use platforms that require minimal training. And
                        consider the total cost of ownership which includes
                        setup time, training and ongoing &quot;Token&quot;
                        usage.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>
              <MethogologyRevealOnScroll direction="up" delay={0.45}>
                <Card className="w-100 bg-[#8C2703] mb-2  pe-4 shadow-box">
                  <div className="grid grid-cols-[20%_80%]">
                    <FontAwesomeIcon
                      icon={fa4}
                      className="w-16 h-16  text-[#0C1A26] inline shadow-text pt-2"
                    />
                    <div>
                      <h3 className="text-white font-bold lg:text-lg xl:text-xl shadow-text">
                        Implementation Strategy
                      </h3>
                      <span className="text-white lg:text-sm xl:text-lg shadow-text">
                        Start small by launching a pilot program, where you
                        measure the return on investment. And be sure to consult
                        the U.S. SBA official guides to fully understand the
                        ethical and legal risks associated with AI and your
                        specific industry.
                      </span>
                    </div>
                  </div>
                </Card>
              </MethogologyRevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
