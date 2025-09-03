import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
  backgroundGradient?: boolean
}

const PageHeader = ({ 
  title, 
  description, 
  children, 
  backgroundGradient = true 
}: PageHeaderProps) => {
  return (
    <section className={`py-20 ${backgroundGradient ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' : 'bg-white'}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

export default PageHeader