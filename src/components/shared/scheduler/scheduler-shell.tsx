import { SchedulerLoader } from "@/components/shared/scheduler/scheduler-loader";

/**
 * The scheduler section. The section, its #consultationAppointment2xl anchor, the heading and the
 * copy render on the server; SchedulerLoader brings in the interactive calendar when the section
 * nears the viewport.
 */
export function SchedulerShell(): React.JSX.Element {
  return (
    <article
      id="consultationAppointment2xl"
      className="w-full min-h-screen bg-[#C83803] lg:bg-[#8C2703]"
    >
      {/*
        Full-bleed rather than `container`, so the scheduler widens with the
        viewport instead of stopping at the container's 1320px cap. The twelve
        columns divide 1 / 6 / 4 / 1 from `lg`, and 1 / 7 / 3 / 1 from `2xl`: a
        gutter column each side, then heading and calendar. The calendar needs
        about 306px for its seven 40px cells plus padding, and three columns
        only reach that at about 1340px wide, so below `2xl` it takes four
        columns and the heading steps down to six. Below `lg` the grid is a
        single column and those spacers collapse, so `px-4` carries the padding
        `container` used to supply.
      */}
      <div className="grid min-h-screen content-center items-center grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-12 lg:px-0 lg:py-16 xl:gap-10">
        <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

        <div className="min-w-0 w-full lg:col-span-6 2xl:col-span-7">
          <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl lg:text-[4.25rem] xl:text-[5rem] 2xl:text-[5.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
            Schedule a Free{" "}
            <br />
            <span className="text-[#0B162A] tracking-tight">Consultation</span>
          </h2>
          <p className="text-white text-2xl text-center shadow-text pt-5">
            South Florida technology consultancy serving small businesses in
            Broward and Palm Beach.
          </p>
        </div>

        <SchedulerLoader />

        <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />
      </div>
    </article>
  );
}
