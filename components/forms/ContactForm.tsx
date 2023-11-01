'use client';

import { useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ContactFormValidation } from '@/lib/validation/email';
import { sendEmail } from '@/lib/actions/email';

export function ContactForm() {
    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(ContactFormValidation),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    });

    const handleSubmit = async (values: z.infer<typeof ContactFormValidation>) => {
        setIsLoading(true);
        const result = await sendEmail(values);

        if (result.success) {
            toast({
                variant: 'default',
                title: 'Your message has been sent!'
            });
        } else {
            toast({
                variant: 'destructive',
                title: 'Oh! Something went wrong.',
                description: 'There was a problem with your request.',
            });
        }

        form.reset();
        setIsLoading(false);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="glass flex flex-col gap-4 rounded-md px-4 py-6"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='form-item'>
                            <FormLabel className="form-item_required-field">Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className='form-item'>
                            <FormLabel className="form-item_required-field">Email</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className='form-item'>
                            <FormLabel className="form-item_required-field">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    variant="default"
                    className="mt-6"
                    disabled={isLoading}
                >
                    Send Message
                </Button>
            </form>
        </Form>
    );
}

