'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { m } from 'framer-motion'

import { cn } from '@/lib/utils'
import { GitHub, LinkedIn } from '@/components/icons'

import { buttonVariants } from './ui/button'

const HomeScene = dynamic(() => import('@/scenes/home-scene'), {
  ssr: false,
})

const Hero = () => {
  return (
    <m.div
      initial='hidden'
      animate='show'
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className='w-full py-16'
    >
      <div className='flex flex-col justify-between gap-8 lg:flex-row lg:items-center'>
        <div className='space-y-2'>
          <m.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='space-y-2'>
            <m.h1 className='text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl'>
              Hi, I’m Ali Aamir.
            </m.h1>
            <m.p className='text-2xl font-semibold text-primary md:text-3xl lg:text-4xl'>
              Software Engineer
            </m.p>
          </m.div>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='max-w-2xl text-muted-foreground md:text-lg'
          >
            I am a passionate software engineer with a strong background in
            full-stack web development. I love building innovative and
            user-friendly applications.
          </m.p>

          <m.div
            className='flex flex-row gap-5'
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Link
              className={cn(buttonVariants())}
              href='https://github.com/AliAamir1'
              target='_blank'
              rel='noopener noreferrer'
              title='View my GitHub profile'
              aria-label='View my GitHub profile'
            >
              <GitHub className='size-6' aria-hidden='true' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              className={cn(buttonVariants())}
              href='https://www.linkedin.com/in/ali-aamir-se/'
              title='View my LinkedIn profile'
              aria-label='View my LinkedIn profile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedIn className='size-6' aria-hidden='true' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <a
              href='/pdf/ali-resume.pdf'
              aria-label='Download Resume'
              target='_blank'
              rel='noopener noreferrer'
              download
              className={cn(buttonVariants({ variant: 'secondary' }))}
            >
              Resume
            </a>
          </m.div>
        </div>
        <m.div
          className='hidden size-[450px] lg:block'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <HomeScene />
        </m.div>
      </div>
    </m.div>
  )
}

export default Hero

