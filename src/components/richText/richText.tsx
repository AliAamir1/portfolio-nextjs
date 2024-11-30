import { PortableText } from 'next-sanity'

import { builder } from '@/lib/sanity'

const portableTextComponents = {
  block: ({ children, value }: { children: React.ReactNode; value: any }) => {
    switch (value.style) {
      case 'h1':
        return <h1 className='text-3xl font-bold'>{children}</h1>
      case 'h2':
        return <h2 className='text-2xl font-semibold'>{children}</h2>
      case 'h3':
        return <h3 className='text-xl font-medium'>{children}</h3>
      case 'h4':
        return <h4 className='text-lg font-medium'>{children}</h4>
      case 'h5':
        return <h5 className='text-md font-medium'>{children}</h5>
      case 'h6':
        return <h6 className='text-sm font-medium'>{children}</h6>
      case 'blockquote':
        return (
          <blockquote className='border-l-4 pl-4 italic'>{children}</blockquote>
        )
      case 'normal':
        return <p className='text-base'>{children}</p>
      default:
        return <p>{children}</p>
    }
  },
  code: ({ value }: { value?: { code: string; language: string } }) => (
    <pre className='rounded bg-gray-200 p-4'>
      <code>{value?.code}</code>
    </pre>
  ),
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className='font-bold'>{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className='italic'>{children}</em>
    ),
    underline: ({ children }: { children: React.ReactNode }) => (
      <span className='underline'>{children}</span>
    ),
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode
      value?: { href?: string }
    }) => (
      <a
        href={value?.href || '#'}
        className='text-blue-500 underline'
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className='list-inside list-disc'>{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className='list-inside list-decimal'>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className='mb-2'>{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className='mb-2'>{children}</li>
    ),
  },
  types: {
    imageE: ({ value }: { value?: { url?: string; alt?: string } }) => (
      <img
        src={value?.url || ''}
        alt={value?.alt || 'Image'}
        className='rounded-lg shadow-md'
      />
    ),
    image: ({ value }) => (
      <img src={builder.image(value).url()} className='my-4 rounded-lg' />
    ),
    customComponent: ({ value }: { value?: any }) => (
      <div className='custom-class'>{JSON.stringify(value)}</div>
    ),
  },
  span: {
    default: ({ children }: { children: React.ReactNode }) => (
      <span>{children}</span>
    ),
  },
}

export default async function RichText({ value }: { value: any }) {
  return <PortableText value={value} components={portableTextComponents} />
}

