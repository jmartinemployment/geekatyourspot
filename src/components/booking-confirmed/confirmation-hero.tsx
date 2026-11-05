import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { gtmLinkId } from "@/lib/gtm/link-id";

export interface ConfirmedBooking {
  firstName: string;
  dateDisplay: string;
  start: string;
  end: string;
}

/**
 * The page a visitor lands on after the scheduler books a consultation, built on the same two
 * blocks as the 404 hero. The booking arrives from a cookie that lives for two minutes. A visit
 * with no cookie, a refresh after it has expired or an address typed in directly has no booking to
 * show, and says so rather than claiming one was made.
 */
export default function ConfirmationHero({ booking }: Readonly<{ booking: ConfirmedBooking | null }>) {
  const title = booking ? "Your Consultation Is Booked" : "Booking Confirmation";

  const body = (idSuffix?: string) => (
    <>
      {booking ? (
        <>
          <p className="pt-3 text-xl text-white shadow-text lg:text-2xl">
            Thank you, {booking.firstName}. Your free consultation is on the calendar for{" "}
            {booking.dateDisplay}, from {booking.start} to {booking.end} Eastern Time.
          </p>
          <p className="pt-3 text-xl text-white shadow-text lg:text-2xl">
            A confirmation email with a calendar invite has been sent to the address you gave. Open
            the invite to add the call to your calendar and confirm that you can attend.
          </p>
        </>
      ) : (
        <>
          <p className="pt-3 text-xl text-white shadow-text lg:text-2xl">
            This page shows a booking for two minutes after it is made, and this browser has no
            recent booking to show.
          </p>
          <p className="pt-3 text-xl text-white shadow-text lg:text-2xl">
            If you booked a free consultation, your confirmation email and calendar invite are in
            your inbox.
          </p>
        </>
      )}
      <div className="pt-6">
        <Link
          id={gtmLinkId("booking-confirmed-home", idSuffix)}
          href="/"
          className="btn btn-primary"
        >
          Go to the Home Page
        </Link>
      </div>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] lg:hidden">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full">
              <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                {title}
              </h1>
              {body()}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden min-h-screen bg-[#023059] lg:block">
        <div className="container min-h-screen">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                {title}
              </h1>
              {body("lg")}
            </div>
            <div className="col-span-5 flex min-h-screen flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={booking ? faCalendarCheck : faCircleInfo}
                className="text-[#C83803]"
                style={{ width: "16rem", height: "16rem" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
