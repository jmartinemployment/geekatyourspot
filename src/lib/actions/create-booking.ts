"use server";

import { after } from "next/server";
import { createCalendarEvent } from "@/services/google-calendar.service";
import { sendBookingConfirmation } from "@/services/booking-confirmation.service";
import { setBookingConfirmationCookie } from "@/lib/booking/confirmation-cookie";
import { forwardIdentity, logUndelivered } from "@/lib/visitors/forward-pulse";
import type { VisitorIds } from "@/lib/visitors/visitor-events";
import type { Booking, ContactInfo } from "@/components/shared/scheduler/state/types";

export interface CreateBookingResult {
  success: boolean;
  error?: string;
}

export async function createBooking(
  booking: Booking,
  contact: ContactInfo,
  holdEventId?: string | null,
  visitorIds?: VisitorIds | null,
): Promise<CreateBookingResult> {
  try {
    await createCalendarEvent(booking, contact, holdEventId);
    await sendBookingConfirmation(booking, contact);
    await setBookingConfirmationCookie({
      date: booking.date,
      start: booking.slot.startTime,
      end: booking.slot.endTime,
      firstName: contact.firstName,
    });
    // The visitor record takes the name after the booking has gone through. The hand-off answers
    // whether it was delivered; one that was not is written to the log with its reason, and never
    // changes the booking, which is already made.
    after(async () => logUndelivered("identify", await forwardIdentity({ ...contact, source: "booking" }, visitorIds)));
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Booking failed";
    return { success: false, error: message };
  }
}
