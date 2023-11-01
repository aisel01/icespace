import * as z from 'zod';

export const ContactFormValidation = z.object({
    name: z.string().trim().min(1, { message: 'Required field' }),
    email: z.string().email().min(1, { message: 'Required field' }),
    message: z.string().trim().min(1, { message: 'Required field' }),
});
