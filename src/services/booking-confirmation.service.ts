import { Resend } from 'resend';
import type { Booking, ContactInfo } from '@/components/scheduler/state/types';

function toICSDate(isoUtc: string, timeZone: string): string {
  const date = new Date(isoUtc);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).formatToParts(date);

  const get = (type: string): string => parts.find((p) => p.type === type)?.value ?? '00';

  const year = get('year');
  const month = get('month');
  const day = get('day');
  const hour = get('hour') === '24' ? '00' : get('hour');
  const minute = get('minute');
  const second = get('second');

  return `${year}${month}${day}T${hour}${minute}${second}`;
}

function buildICS(booking: Booking, contact: ContactInfo, organizerEmail: string): string {
  const tz = 'America/New_York';
  const startLocal = toICSDate(booking.slot.isoStart, tz);
  const endUTC = new Date(new Date(booking.slot.isoStart).getTime() + 30 * 60 * 1000).toISOString();
  const endLocal = toICSDate(endUTC, tz);
  const stampUTC = new Date().toISOString().replaceAll(/[-:]/g, '').slice(0, 15) + 'Z';
  const uid = `geek-booking-${booking.date}-${booking.slot.isoStart.replaceAll(/[^0-9]/g, '')}@geekatyourspot.com`;

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Geek At Your Spot//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${stampUTC}`,
    `DTSTART;TZID=${tz}:${startLocal}`,
    `DTEND;TZID=${tz}:${endLocal}`,
    'SUMMARY:AI Strategy Call. Geek At Your Spot',
    `DESCRIPTION:Your AI strategy call with Geek At Your Spot.\\nWe look forward to speaking with you ${contact.firstName}.`,
    `ORGANIZER;CN=Geek At Your Spot:mailto:${organizerEmail}`,
    `ATTENDEE;CN=${contact.firstName} ${contact.lastName};RSVP=TRUE;PARTSTAT=NEEDS-ACTION;ROLE=REQ-PARTICIPANT:mailto:${contact.email}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

function buildEmailHTML(booking: Booking, contact: ContactInfo): string {
  const dateDisplay = new Date(`${booking.date}T00:00:00`).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `
    <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111">
      <h1 style="font-size:22px;font-weight:700;margin:0 0 8px">You're on the calendar</h1>
      <p style="color:#555;margin:0 0 24px">Here are the details for your AI strategy call with Geek At Your Spot.</p>

      <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden">
        <tr>
          <td style="padding:14px 18px;border-bottom:1px solid #eee;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.08em;font-weight:600">Date</td>
          <td style="padding:14px 18px;border-bottom:1px solid #eee;font-size:14px">${dateDisplay}</td>
        </tr>
        <tr>
          <td style="padding:14px 18px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.08em;font-weight:600">Time</td>
          <td style="padding:14px 18px;font-size:14px">${booking.slot.startTime} – ${booking.slot.endTime} ET</td>
        </tr>
      </table>

      <p style="margin:24px 0 8px;font-size:14px;color:#555">
        Open the attached <strong>invite.ics</strong> file to add this to your calendar and confirm your attendance.
      </p>

      <hr style="border:none;border-top:1px solid #eee;margin:32px 0" />
      <p style="font-size:12px;color:#aaa;margin:0">
        Geek At Your Spot · Delray Beach, Florida
      </p>
    </div>
  `.trim();
}

export async function sendBookingConfirmation(
  booking: Booking,
  contact: ContactInfo,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY not set');

  const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL ?? 'noreply@geekatyourspot.com';
  const organizerEmail = process.env.GOOGLE_CALENDAR_OWNER_EMAIL ?? fromEmail;

  const ics = buildICS(booking, contact, organizerEmail);
  const html = buildEmailHTML(booking, contact);

  const resend = new Resend(apiKey);

  const result = await resend.emails.send({
    from: `Geek At Your Spot <${fromEmail}>`,
    to: contact.email,
    subject: 'Your AI strategy call is confirmed',
    html,
    attachments: [
      {
        filename: 'invite.ics',
        content: Buffer.from(ics).toString('base64'),
      },
    ],
  });

  if (result.error) {
    throw new Error(`Resend error: ${result.error.message}`);
  }
}
