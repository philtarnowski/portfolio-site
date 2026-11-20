// A small hand-kept sitemap: the home page plus every case study.
import type { APIRoute } from 'astro'
import { caseStudies } from '../data/caseStudies'

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', ...caseStudies.map((c) => c.href)]
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site)}</loc></url>`).join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
