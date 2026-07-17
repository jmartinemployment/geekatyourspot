import { cookies } from 'next/headers'

export const BOOKING_CONFIRMATION_COOKIE = 'gays_booking_confirmed'
const COOKIE_MAX_AGE_SECONDS = 120

export interface BookingConfirmationPayload {
  date: string
  start: string
  end: string
  firstName: string
}

export async function setBookingConfirmationCookie(
  payload: BookingConfirmationPayload,
): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set(BOOKING_CONFIRMATION_COOKIE, JSON.stringify(payload), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE_SECONDS,
    path: '/',
  })
}

export async function consumeBookingConfirmationCookie(): Promise<BookingConfirmationPayload | null> {
  const cookieStore = await cookies()
  const raw = cookieStore.get(BOOKING_CONFIRMATION_COOKIE)?.value

  if (!raw) return null

  cookieStore.delete(BOOKING_CONFIRMATION_COOKIE)

  try {
    const parsed = JSON.parse(raw) as BookingConfirmationPayload
    if (
      typeof parsed.date !== 'string' ||
      typeof parsed.start !== 'string' ||
      typeof parsed.end !== 'string' ||
      typeof parsed.firstName !== 'string'
    ) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}
