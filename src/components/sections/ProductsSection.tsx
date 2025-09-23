import Image from 'next/image'
import Link from 'next/link'
import GradientButton from '@/components/ui/GradientButton'

interface ProductCard {
  id: string
  title: string
  description: string
  image: string
  href: string
}

const products: ProductCard[] = [
  {
    id: 'dooh',
    title: 'DOOH',
    description: 'With animated and programmable content, DOOHs lets brands deliver the right message, at the right time, in the right place.',
    image: '/img/home/product-1.png',
    href: '/products/dooh'
  },
  {
    id: 'led-screen',
    title: 'LED SCREEN',
    description: 'From immersive brand storytelling to high-visibility messaging, they deliver stunning visuals in any environment.',
    image: '/img/home/product-2.png',
    href: '/products/led'
  },
  {
    id: 'hologram',
    title: 'HOLOGRAM',
    description: 'Perfect for retail, events, or product launches, they combine cutting-edge technology with immersive storytelling holographics.',
    image: '/img/home/product-3.png',
    href: '/products/hologram'
  }
]

export default function ProductsSection() {
  return (
    <section className="py-8 sm:py-16 lg:py-30 px-4 sm:px-8 lg:px-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {products.map((product) => (
            <div key={product.id} className="cursor-pointer">
              <Link href={product.href}>
                <div>
                  <div className="relative mb-4 sm:mb-6">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-lg sm:text-xl lg:text-[24px] mb-2 sm:mb-3 tracking-wide">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-[20px] leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <GradientButton href="/contact" text="Talking about your project" className="text-sm sm:text-base lg:text-[16px] h-[40px] sm:h-[45px] lg:h-[49px] w-[280px] sm:w-[320px] lg:w-[350px]"/>
        </div>
      </div>
    </section>
  )
}