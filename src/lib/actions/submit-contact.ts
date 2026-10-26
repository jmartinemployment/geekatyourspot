'use server';

import { after } from 'next/server';
import { Resend } from 'resend';
import { forwardIdentity, logUndelivered } from '@/lib/visitors/forward-pulse';
import type { VisitorIds } from '@/lib/visitors/visitor-events';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  /** A field people never see. Only a bot fills it in. */
  website: string;
}

export interface SubmitContactResult {
  success: boolean;
}

const MAX_MESSAGE_LENGTH = 5000;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.exec(email) !== null;
}

function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, '').length >= 10;
}

/** What a visitor types goes into the email as text, never as markup. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isComplete(data: ContactFormData): boolean {
  return (
    data.website.length === 0 &&
    data.firstName.trim().length >= 2 &&
    data.lastName.trim().length >= 2 &&
    isValidPhone(data.phone) &&
    isValidEmail(data.email.trim()) &&
    data.message.trim().length > 0 &&
    data.message.length <= MAX_MESSAGE_LENGTH
  );
}

/**
 * Emails a contact page message to the business through Resend.
 *
 * It fails closed: with RESEND_API_KEY, NEXT_PUBLIC_FROM_EMAIL or CONTACT_TO_EMAIL unset, or a
 * message that does not pass the same checks as the form, nothing is sent and the result is a
 * failure. There is no default sender or recipient, so a message never goes to an address nobody
 * reads.
 */
export async function submitContact(
  data: ContactFormData,
  visitorIds?: VisitorIds | null,
): Promise<SubmitContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !fromEmail || !toEmail) return { success: false };
  if (!isComplete(data)) return { success: false };

  const name = escapeHtml(`${data.firstName.trim()} ${data.lastName.trim()}`);
  const email = escapeHtml(data.email.trim());
  const phone = escapeHtml(data.phone.trim());
  const message = escapeHtml(data.message.trim()).replace(/\n/g, '<br />');

  const row = (label: string, value: string) => `
          <tr>
            <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.06em;vertical-align:top">${label}</td>
            <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:14px">${value}</td>
          </tr>`;

  const resend = new Resend(apiKey);
  try {
    const result = await resend.emails.send({
      from: `"Geek @ Your Spot LLC" <${fromEmail}>`,
      to: toEmail,
      replyTo: data.email.trim(),
      subject: `New contact page message from ${data.firstName.trim()} ${data.lastName.trim()}`,
      html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#111">
        <h2 style="font-size:18px;font-weight:700;margin:0 0 16px">New Contact Page Message</h2>
        <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden">
          ${row('Name', name)}
          ${row('Email', email)}
          ${row('Phone', phone)}
          ${row('Message', message)}
        </table>
        <p style="font-size:12px;color:#aaa;margin:24px 0 0">Geek @ Your Spot LLC · Delray Beach, Florida</p>
      </div>
    `.trim(),
    });
    if (result.error) return { success: false };
    // The visitor record takes the name after the message has been sent. The hand-off answers
    // whether it was delivered; one that was not is written to the log with its reason, and never
    // changes the message, which has already gone.
    after(async () =>
      logUndelivered(
        'identify',
        await forwardIdentity(
          {
            firstName: data.firstName.trim(),
            lastName: data.lastName.trim(),
            email: data.email.trim(),
            phone: data.phone.trim(),
            source: 'contact',
          },
          visitorIds,
        ),
      ),
    );
    return { success: true };
  } catch {
    return { success: false };
  }
}
