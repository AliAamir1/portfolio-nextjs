import type icons from '@/components/icons'

export type SiteConfig = typeof siteConfig

const links = {
  github: 'https://github.com/AliAamir1',
  githubAccount: 'https://github.com/AliAamir1',
}

export const siteConfig = {
  name: 'Ali Aamir',
  description: 'Personal portfolio of Ali Aamir, a software engineer',
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.NEXT_PUBLIC_APP_URL!,
  ogImage: 'https://jorgeassaf/opengraph-image.png',
  sourceCode: links.github,
  mainNav: [
    {
      title: 'Home',
      href: '/',
      items: [],
    },
    {
      title: 'Projects',
      href: '/projects',
      items: [],
    },
    // {
    //   title: 'Blog',
    //   href: '/blog',
    //   disabled: false,
    //   items: [],
    // },
    {
      title: 'Resources',
      href: '/blog',
      disabled: false,
      items: [],
    },
    {
      title: 'About',
      href: '/about',
      items: [],
    },
  ],
  blogCategories: [
    { title: 'AA', icon: 'braces' },
    { title: 'React', icon: 'flaskconical' },
    { title: 'Next.js', icon: 'panelstopleft' },
    { title: 'Tools', icon: 'pocketknife' },
    { title: 'Blog', icon: 'book' },
  ] satisfies { title: string; icon: keyof typeof icons }[],
  footerNav: [
    {
      title: 'Social',
      items: [
        {
          title: 'GitHub',
          href: links.githubAccount,
          external: true,
        },
      ],
    },
    {
      title: 'Lofi',
      items: [
        {
          title: 'beats to study to',
          href: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
          external: true,
        },
        {
          title: 'beats to chill to',
          href: 'https://www.youtube.com/watch?v=rUxyKA_-grg',
          external: true,
        },
        {
          title: 'a fresh start',
          href: 'https://www.youtube.com/watch?v=rwionZbOryo',
          external: true,
        },
        {
          title: 'coffee to go',
          href: 'https://www.youtube.com/watch?v=2gliGzb2_1I',
          external: true,
        },
      ],
    },
  ],
}

