import Link from 'next/link'
import { Button } from './Button'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  backgroundColor?: 'primary' | 'gray'
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  backgroundColor = 'primary'
}: CTASectionProps) => {
  const bgClass = backgroundColor === 'primary' 
    ? 'bg-primary text-white' 
    : 'bg-gray-50 text-gray-900'
    
  const buttonVariant = backgroundColor === 'primary' ? 'outline' : 'primary'
  const buttonClass = backgroundColor === 'primary' 
    ? 'bg-white text-primary hover:bg-gray-100' 
    : ''

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${backgroundColor === 'primary' ? 'opacity-90' : ''}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButtonHref}>
            <Button 
              variant={buttonVariant} 
              size="lg" 
              className={buttonClass}
            >
              {primaryButtonText}
            </Button>
          </Link>
          {secondaryButtonText && secondaryButtonHref && (
            <Link href={secondaryButtonHref}>
              <Button 
                variant="ghost" 
                size="lg" 
                className={backgroundColor === 'primary' 
                  ? 'text-white border-white hover:bg-white/10' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
              >
                {secondaryButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTASection