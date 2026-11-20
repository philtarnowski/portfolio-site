// One entry per case study. The nav dropdown and the "next case study" links read from here,
// so adding a case study means adding a page in src/pages and one entry below.
export interface CaseStudy {
  slug: string
  href: string
  name: string
  headline: string
  logo: string
  logoHeight: number
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'elate',
    href: '/elate/',
    name: 'Elate',
    headline: 'From $20K ARR to a Series A',
    logo: '/images/logo-elate.png',
    logoHeight: 20,
  },
  {
    slug: 'endurance-grid',
    href: '/endurance-grid/',
    name: 'Endurance Grid',
    headline: 'From Idea to $37K in Race Registrations',
    logo: '/images/logo-endurance-grid.png',
    logoHeight: 26,
  },
]
