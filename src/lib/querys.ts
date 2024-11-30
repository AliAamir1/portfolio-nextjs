import { groq } from 'next-sanity'

export const getProjectsQuery = groq`*[_type == 'project' && (defined(category) && category == $category || !defined(category) || $category == '')] {
  _id,
  name,
  "images": images[]{
    "url" : asset->url,
    "alt": alt
  }  ,
  createdAt,   
  repo,
  link,
  category,
  "technologies": technologies[]->{
    name,
    "image": image.asset->url,
    color
  },
  description,
  richDescription,
  slug
}`

export const getLatestProjectsQuery = groq`*[_type == 'project'] | order(_createdAt desc) {
  _id,
  name,
  "images": images[]{
    "url": asset->url,
    "alt": alt
  },
  createdAt,
  repo,
  link,
  category,
  technologies[]->{
    name,
    "image": image.asset->url,
    color
  },
  description,
  richDescription,
  slug
}`

export const getProjectBySlug = groq`*[_type == 'project' && slug == $slug] | order(_createdAt desc) {
  _id,
  name,
  "images": images[]{
    "url": asset->url,
    "alt": alt
  },
  createdAt,
  repo,
  link,
  category,
  technologies[]->{
    name,
    "image": image.asset->url,
    color
  },
  description,
  richDescription,
  slug
}`
