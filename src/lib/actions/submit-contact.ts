'use server';

import { Resend } from 'resend';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface SubmitContactResult {
  success: boolean;
  error?: string;
}

export async function submitContact(
  data: ContactFormData,
): Promise<SubmitContactResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { success: false, error: 'Email service not configured.' };
  }

  const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL ?? 'noreply@geekatyourspot.com';
  const toEmail = process.env.GOOGLE_CALENDAR_OWNER_EMAIL ?? fromEmail;

  const resend = new Resend(apiKey);

  const result = await resend.emails.send({
    from: `Geek At Your Spot <${fromEmail}>`,
    to: toEmail,
    subject: `New contact request. ${data.firstName} ${data.lastName}`,
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;color:#111">
        <h2 style="font-size:18px;font-weight:700;margin:0 0 16px">New Contact Request</h2>
        <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden">
          <tr>
            <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.06em">Name</td>
            <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:14px">${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.06em">Email</td>
            <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:14px">${data.email}</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;font-size:12px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:.06em">Phone</td>
            <td style="padding:12px 16px;font-size:14px">${data.phone}</td>
          </tr>
        </table>
        <p style="font-size:12px;color:#aaa;margin:24px 0 0">Geek At Your Spot · Delray Beach, Florida</p>
      </div>
    `.trim(),
  });

  if (result.error) {
    return { success: false, error: result.error.message };
  }

  return { success: true };
}
