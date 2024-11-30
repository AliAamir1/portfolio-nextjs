import Link from 'next/link'

import { cn } from '@/lib/utils'
import { GitHub, LinkedIn, Twitter } from '@/components/icons'

import { buttonVariants } from '../ui/button'

const SiteFooter = () => {
  return (
    <footer className='my-10 w-full border-t'>
      <div className='container py-7'>
        <div className='flex scroll-m-20 items-center justify-between gap-5'>
          <div>
            <h3 className='mb-5 scroll-m-20 text-3xl font-semibold tracking-tight'>
              Let&apos;s talk
            </h3>
            <h4 className='scroll-m-20 text-base tracking-tight'>
              Send me message on LinkedIn or Mail me at aliaamir2015@gmail.com
            </h4>
          </div>

          <div className='flex flex-wrap gap-5'>
            <Link
              href='https://www.linkedin.com/in/ali-aamir-se/'
              target='_blank'
              rel='noreferrer'
              title='Visit my LinkedIn profile'
              aria-label='Visit my LinkedIn profile'
              className={cn(
                buttonVariants({ size: 'icon', variant: 'outline' }),
              )}
            >
              <LinkedIn className='size-4' aria-hidden='true' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              href='https://github.com/AliAamir1'
              target='_blank'
              rel='noreferrer'
              title='Visit my GitHub profile'
              aria-label='Visit my GitHub profile'
              className={cn(
                buttonVariants({ size: 'icon', variant: 'outline' }),
              )}
            >
              <GitHub className='size-4' aria-hidden='true' />
              <span className='sr-only'>GitHub</span>
            </Link>
          </div>
        </div>
        <p className='mt-10'>Built by Ali Aamir.</p>
        <p>
          Model by{' '}
          <Link
            target='_blank'
            href='https://www.craftz.dog/'
            rel='noopener noreferrer'
            title='Visit Craftz Dog website for view model'
            className={cn(
              buttonVariants({
                variant: 'link',
              }),
              'p-0',
            )}
          >
            Takuya Matsuyama.
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter

