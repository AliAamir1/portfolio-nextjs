'use client'

import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

if (
  !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
  !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
  !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
) {
  throw new Error('Add EmailJs API keys to your .env file')
}

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email('Invalid email address.').min(2, {
    message: 'Email must be at least 2 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message should be at least 10 characters.',
  }),
})

export const ContactForm = () => {
  // EmailJS needs the `ref` parameter in a form, ShadCN doesn't use
  // this by default so we have to import it.
  const formRef = useRef<HTMLFormElement | null>(null)

  // configure Zod default values for the form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      message: '',
    },
  })

  // Create the handler that connects to EmailJS.
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formRef.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
          },
        )
        .then(
          () => {
            console.info('SUCCESS')
            toast.success(
              `Email sent successfully, Thanks ${data.username}, I'll be in touch.`,
            )

            form.reset() //clear the fields after submission
          },
          (error) => {
            toast.error(
              'Failed to send email, please try again or contact me mannually at aliaamir2015@gmail.com',
            )
            console.warn('FAILED...', JSON.stringify(error))
          },
        )
    }
  }
  return (
    <>
      <Form {...form}>
        <form
          ref={formRef} //Required by EmailJS
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-2/3 space-y-6'
        >
          <FormField
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Name</FormLabel>
                <FormControl>
                  <Input
                    className='border-primary'
                    placeholder='Your Name'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs text-red-600' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Email</FormLabel>
                <FormControl>
                  <Input
                    className='border-primary'
                    placeholder='Email Address'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs text-red-600' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg'>Message</FormLabel>
                <FormControl>
                  <Textarea
                    className='border-primary'
                    placeholder='Type your message here.'
                    id='message'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-xs text-red-600' />
              </FormItem>
            )}
          />
          <Button type='submit' className='text-md hover:bg-secondary'>
            {/*<PaperPlane />*/}
            Send{' '}
          </Button>
        </form>
      </Form>
    </>
  )
}

