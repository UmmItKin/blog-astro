import type { APIRoute } from 'astro'
import { generateOgImage, ogResponse } from '@/utils/og-image'

export const GET: APIRoute = async () => {
  const png = await generateOgImage('Home', 'UmmIt Kin Personal Website')
  return ogResponse(png)
}
