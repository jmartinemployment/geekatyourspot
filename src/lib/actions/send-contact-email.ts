// 'use server'

// // import { contactSchema, type ContactFormData } from '@/lib/validations/contact'

// export type ActionResult =
//   | { success: true; message: string }
//   | { success: false; error: string }

// const BACKEND_URL = process.env.ORDERSTACK_API_URL ?? 'https://get-order-stack-restaurant-backend.onrender.com'

// export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
//   const parsed = contactSchema.safeParse(data)

//   if (!parsed.success) {
//     return { success: false, error: 'Invalid form data.' }
//   }

//   try {
//     const response = await fetch(`${BACKEND_URL}/api/contact`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(parsed.data),
//     })

//     const json = await response.json() as { success: boolean; message?: string; error?: string }

//     if (!response.ok || !json.success) {
//       console.error('Contact backend error:', json)
//       return { success: false, error: json.error ?? 'Failed to send. Please try again.' }
//     }

//     return { success: true, message: json.message ?? 'Message sent successfully!' }
//   } catch (error) {
//     console.error('Contact fetch error:', error)
//     return { success: false, error: 'Failed to send. Please try again.' }
//   }
// }
