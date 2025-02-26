import { Metadata } from 'next'
import categories from '@/lib/categoryData'

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = categories.find(cat => cat.link.includes(params.category))

  return {
    title: `${category?.name || 'Products'} | Gupta Switchgears`,
    description: `Browse our selection of ${category?.name.toLowerCase() || 'products'}. High-quality electrical components and solutions from Gupta Switchgears.`,
    openGraph: {
      title: `${category?.name || 'Products'} - Gupta Switchgears`,
      description: `Explore our range of ${category?.name.toLowerCase() || 'products'} at competitive prices.`,
    }
  }
}
