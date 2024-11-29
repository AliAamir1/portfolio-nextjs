export interface ProjectsEntity {
  images: {
    url: string
    alt: string
  }[]
  category: string
  technologies: Technology[]
  name: string
  repo: string
  link: string
  description: string
  _id: string
  createdAt: Date
  richDescription: any
  slug: string
}

export interface Technology {
  name: string
  image: string
  color: string
}

