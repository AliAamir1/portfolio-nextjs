'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import { cn } from '@/lib/utils'

import { buttonVariants, type ButtonProps } from './ui/button'

export const MyResumen = ({
  className,
  variant = 'default',
  size,
}: {
  className?: string
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
}) => {
  const [isHovered, setHovered] = useState(false)
  return (
    <a
      href='/pdf/ali-resume.pdf'
      aria-label='Download Resume'
      target='_blank'
      rel='noopener noreferrer'
      download
      onMouseEnter={() => setHovered(true)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        buttonVariants({ variant: variant, size: size, className }),
        'flex h-0 items-center rounded-full px-2.5 py-5',
      )}
    >
      Resume
      <ArrowDown size={20} aria-hidden='true' />
      <motion.span
        className='overflow-hidden whitespace-nowrap'
        initial={{
          width: 0,
        }}
        animate={{
          width: isHovered ? 'auto' : 0,
          marginLeft: isHovered ? 5 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        My resume
      </motion.span>
    </a>
  )
}

