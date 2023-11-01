'use server';

import * as z from 'zod';
import { ContactFormValidation } from '../validation/email';
import { Resend } from 'resend';
import { contacts } from '@/constants';

console.log(process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(params: z.infer<typeof ContactFormValidation>) {
    const { name, email, message } = params;

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: contacts.mail,
            subject: 'Ice Space Contact Form',
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message${message}</p>
            `
        });

        return { success: true, data };
    } catch (error) {
        return { success: false, error };
    }
}