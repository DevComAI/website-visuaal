import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-900">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb