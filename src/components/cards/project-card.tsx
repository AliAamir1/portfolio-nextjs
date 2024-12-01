import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Formaters } from '@/helpers/formaters'
import { CalendarCheck, CodeIcon } from 'lucide-react'

import type { ProjectsEntity } from '@/types/sanity'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import { Badge } from '../ui/badge'

interface ProjectsCardProps {
  project: ProjectsEntity
  order?: number
}

export const ProjectCard = ({ project }: ProjectsCardProps) => {
  const router = useRouter()
  return (
    <Card
      className='flex h-[540px] w-full max-w-lg cursor-pointer flex-col justify-center'
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      <figure className='relative aspect-[16/10] w-full overflow-hidden'>
        <Image
          src={project.images[0].url ?? '/images/placeholder.svg'}
          alt={`${project.images[0].alt ?? project.name} image`}
          className='rounded-t-lg object-cover'
          fill
          priority
          sizes='(min-width: 640px) 640px, 100vw'
        />
      </figure>
      <CardContent className='flex flex-1 flex-col justify-between gap-3 p-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <Badge
              variant={'secondary'}
              className='inline-flex items-center gap-2 rounded-lg'
            >
              <CodeIcon className='size-4' />
              {project.category}
            </Badge>
            <div className='flex items-center gap-2 text-xs text-muted-foreground'>
              {project.createdAt && (
                <>
                  <CalendarCheck className='size-4' />
                  <p>
                    {Formaters.formatDate(project.createdAt, 'MMMM dd, yyyy')}
                  </p>
                </>
              )}
            </div>
          </div>
          <h3 className='text-xl font-semibold'>{project.name}</h3>

          <p className='text-base text-muted-foreground line-clamp-3'>
            {project.description}
          </p>
          <div className='flex flex-wrap gap-2'>
            {project.technologies?.map((tech) => (
              <Badge
                key={tech.name}
                variant='secondary'
                className='inline-flex items-center gap-2 rounded-lg'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.image}
                  alt={tech.name}
                  width={16}
                  loading='eager'
                  height={16}
                  className='bg-tr size-4'
                />
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          {!!project.repo && (
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
              )}
              href={project.repo}
              target='_blank'
              rel='noopener noreferrer'
              title={`View ${project.name} repository`}
              aria-label={`View ${project.name} repository`}
              onClick={(e) => e.stopPropagation()}
            >
              View Repository
            </Link>
          )}
          {!!project.link && (
            <Link
              className={cn(
                buttonVariants({
                  variant: 'link',
                }),
              )}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              title={`View ${project.name} live site`}
              aria-label={`View ${project.name} live site`}
              onClick={(e) => e.stopPropagation()}
            >
              Live Site
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

