import Link from 'next/link'

export default function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav className="flex py-3 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            {index === items.length - 1 ? (
              <span className="text-gray-900">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-gray-500 hover:text-gray-700">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
