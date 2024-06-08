import getSEOTags from '@/utils/config'
import { MetadataRoute } from 'next'

const seoTags = getSEOTags()
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoTags.domain,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${seoTags.domain}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
  ]
}