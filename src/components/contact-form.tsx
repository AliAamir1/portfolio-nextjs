'use client'

import React, { useRef } from 'react'
import { AnimationProps, motion, useInView, Variants } from 'framer-motion'

import { ContactForm } from '@/components/contact/contact'

const GoogleMap: React.FC = () => {
  const mapSrcc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin'
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54481.20719076887!2d74.3091107189755!3d31.549700822383883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919048330bf5d3d%3A0x5d8fdf60298b1d2b!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1698736252534!5m2!1sen!2sus'
  return (
    <div className='h-[60%] w-full rounded-xl'>
      <iframe
        title='Google Map with Marker on Lahore'
        src={mapSrc}
        width='100%'
        height='100%'
        style={{ border: 0, borderRadius: '0.5rem' }}
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

const MyInformation: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-3xl font-semibold'>Contact Information</h3>
      <div className='flex gap-2'>
        <p className='text-lg font-semibold'>Email:</p>
        <a
          href='mailto:aliaamir2015@gmail.com'
          className='text-lg font-semibold text-primary'
        >
          aliaamir2015@gmail.com
        </a>
      </div>
      <div className='flex gap-2'>
        <p className='text-lg font-semibold'>Phone:</p>
        <a
          href='tel:+923214579630'
          className='text-lg font-semibold text-primary'
        >
          +92-3214579630
        </a>
      </div>
      <div className='flex gap-2'>
        <p className='text-lg font-semibold'>Address:</p>
        <p className='text-lg font-semibold text-muted-foreground'>
          Lahore, Pakistan
        </p>
      </div>
    </div>
  )
}

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const contactINfoVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}
export default function Contact() {
  return (
    <div className='mt-20'>
      <div className='mt-10 flex'>
        <motion.div
          className='contact w-full'
          variants={variants}
          initial='initial'
          whileInView='animate'
        >
          <h1 className='text-5xl font-bold mb-5'> Let's work together</h1>
          <ContactForm />
        </motion.div>

        <motion.div
          variants={contactINfoVariants}
          initial='initial'
          whileInView='animate'
          className='hidden w-full md:block'
        >
          <GoogleMap />
          <MyInformation />
        </motion.div>
      </div>
    </div>
  )
}

