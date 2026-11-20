// @ts-check
import { defineConfig } from 'astro/config'

// The site is served from the custom domain in public/CNAME, so there is no base path.
export default defineConfig({
  site: 'https://philtarnowski.com',
  trailingSlash: 'ignore',
})
