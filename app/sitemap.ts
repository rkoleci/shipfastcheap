import getSEOTags from '@/utils/seo'
import { MetadataRoute } from 'next'

const seoTags = getSEOTags()
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoTags.domain || 'https://shipfast.cheap',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${seoTags.domain || 'https://shipfast.cheap'}/docs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}