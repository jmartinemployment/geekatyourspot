import type { Metadata } from "next";
import ConfirmationHero from "@/components/booking-confirmed/confirmation-hero";
import { readBookingConfirmationCookie } from "@/lib/booking/confirmation-cookie";

const TITLE = "Booking Confirmed";
const DESCRIPTION =
    "The confirmation shown after a free consultation is booked on geekatyourspot.com.";
const CANONICAL = "/booking-confirmed";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        // The page shows one visitor their own booking right after it is made, so it stays out of
        // search results and, because the sitemap follows this tag, out of the sitemap too.
        robots: { index: false, follow: true },
    };
};

// The date is stored as YYYY-MM-DD and formatted the way the confirmation email formats it. A
// date that does not parse means the cookie is not one the booking action wrote, so there is
// nothing trustworthy to show.
function toDateDisplay(date: string): string | null {
    const parsed = new Date(`${date}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return null;
    return parsed.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export default async function Page() {
    const confirmation = await readBookingConfirmationCookie();
    const dateDisplay = confirmation ? toDateDisplay(confirmation.date) : null;
    const booking =
        confirmation && dateDisplay
            ? {
                  firstName: confirmation.firstName,
                  dateDisplay,
                  start: confirmation.start,
                  end: confirmation.end,
              }
            : null;

    return <ConfirmationHero booking={booking} />;
}
