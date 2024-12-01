import { revalidatePath, revalidateTag } from 'next/cache'
import { Project } from 'next/dist/build/swc/types'
import { NextResponse, type NextRequest } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

import { Technology } from '@/types/sanity'

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string
      slug?: string | undefined
    }>(req, process.env.SANITY_HOOK_SECRET)

    if (!isValidSignature) {
      return new Response('Invalid Signature', { status: 401 })
    }

    if (!body?._type) {
      return new Response('Bad Request', { status: 400 })
    }

    if (body?._type === 'project') {
      if (!body.slug) {
        return new Response('Bad Request', { status: 400 })
      }

      revalidatePath(`/projects/${body.slug}`)
      revalidatePath('/projects')
      revalidatePath('/')
    }
  } catch (error: any) {
    console.error(error)
    return new Response(error.message, { status: 500 })
  }
}

