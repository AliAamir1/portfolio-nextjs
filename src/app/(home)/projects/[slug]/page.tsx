import { CodeIcon } from 'lucide-react'

import { ProjectsEntity } from '@/types/sanity'
import { getProjectBySlug } from '@/lib/querys'
import { client } from '@/lib/sanity'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import RichText from '@/components/richText/richText'

const ProjectImages = ({
  images,
}: {
  images: { url: string; alt: string }[]
}) => {
  return (
    <div className='my-6'>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className=''>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image.url}
                alt={image.alt}
                className='h-[400px] w-full rounded-lg object-cover sm:h-[500px]'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  )
}

const ProjectDetails = ({ project }: { project: ProjectsEntity }) => {
  return (
    <div className='mt-6 space-y-4'>
      {/* Project Category */}
      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
        <Badge
          variant='secondary'
          className='inline-flex items-center gap-2 rounded-lg'
        >
          <CodeIcon className='size-4' />
          {project.category}
        </Badge>
      </div>

      {/* Technologies */}
      <div className='flex flex-wrap gap-3'>
        {project.technologies.map((tech) => (
          <Badge
            key={tech.name}
            variant='secondary'
            className='inline-flex items-center gap-2 rounded-lg'
          >
            <img
              src={tech.image}
              alt={tech.name}
              width={16}
              height={16}
              className='size-4'
            />
            {tech.name}
          </Badge>
        ))}
      </div>

      {/* Description */}
      <div className='text-base text-muted-foreground'>
        <RichText value={project.richDescription} />
      </div>
    </div>
  )
}

export default async function ProjectDescription({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  console.log(slug)
  const projectList = await client.fetch<ProjectsEntity[]>(getProjectBySlug, {
    slug: slug,
  })
  const project = projectList[0]

  if (!project) {
    return (
      <div className='text-center text-lg font-semibold'>
        No project found with the slug: {slug}
      </div>
    )
  }

  console.log(project)

  return (
    <div className='mx-auto max-w-5xl p-6'>
      {/* Project Title */}
      <h1 className='mb-6 text-center text-4xl font-bold'>{project.name}</h1>

      {/* Project Images Carousel */}
      <ProjectImages images={project.images} />

      {/* Project Details */}
      <ProjectDetails project={project} />
    </div>
  )
}

