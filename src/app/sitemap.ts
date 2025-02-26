import { MetadataRoute } from 'next'
import categories from '@/lib/categoryData'
import PanelsData from '@/lib/PanelsData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://guptaswitchgears.com'

  const staticPages = [
    '',
    '/Downloads',
    '/Privacy-policy',
    '/Shipping-policy',
    '/Return-refund-policy',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const categoryPages = categories.map(category => ({
    url: `${baseUrl}${category.link}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  const panelPages = PanelsData.map(panel => ({
    url: `${baseUrl}${panel.link}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...categoryPages, ...panelPages]
}
