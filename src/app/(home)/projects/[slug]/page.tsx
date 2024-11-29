import { ProjectsEntity } from '@/types/sanity'
import { getProjectBySlug } from '@/lib/querys'
import { client } from '@/lib/sanity'
import RichText from '@/components/richText/richText'

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
      <div className='text-lg font-semibold'>
        No project not found with the slug: {slug}
      </div>
    )
  }

  console.log(project)

  return (
    <div>
      ProjectId: {slug}
      <RichText value={project.richDescription} />
    </div>
  )
}

