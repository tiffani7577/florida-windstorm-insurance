export const dynamic = 'force-static'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.floridawindstorminsurance.com'

const pages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/windstorm-insurance-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/wind-mitigation-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/hurricane-deductible-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/coastal-florida-windstorm-insurance', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/citizens-insurance-windstorm', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/citizens-insurance-vs-private-market-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/windstorm-vs-homeowners-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/wind-mitigation-discount-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/cheap-windstorm-insurance-florida', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/fr-44-insurance-florida', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/sr-22-insurance-florida', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/florida-windstorm-insurance-statistics', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/get-a-quote', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/about', priority: 0.6, changeFrequency: 'monthly' as const },
  { url: '/thank-you', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }))
}
