import { NextResponse } from 'next/server'
import categories from '@/lib/categoryData'

export async function GET() {
  const baseUrl = 'https://guptaswitchgears.com'

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Gupta Switchgears Products</title>
        <link>${baseUrl}</link>
        <description>Latest electrical components and solutions</description>
        ${categories.map(category => `
          <item>
            <title>${category.name}</title>
            <link>${baseUrl}${category.link}</link>
            <description>Browse our ${category.name} collection</description>
          </item>
        `).join('')}
      </channel>
    </rss>`

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
