'use server';

import { createCalendarEvent } from '@/services/google-calendar.service';
import { sendBookingConfirmation } from '@/services/booking-confirmation.service';
import { setBookingConfirmationCookie } from '@/lib/booking/confirmation-cookie';
import type { Booking, ContactInfo } from '@/components/scheduler/state/types';

export interface CreateBookingResult {
  success: boolean;
  error?: string;
}

export async function createBooking(
  booking: Booking,
  contact: ContactInfo,
): Promise<CreateBookingResult> {
  try {
    await createCalendarEvent(booking, contact);
    await sendBookingConfirmation(booking, contact);
    await setBookingConfirmationCookie({
      date: booking.date,
      start: booking.slot.startTime,
      end: booking.slot.endTime,
      firstName: contact.firstName,
    });
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Booking failed';
    return { success: false, error: message };
  }
}
