import GradientButton from '@/components/ui/GradientButton'
import Image from 'next/image'

export default function DoohTestimonial() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-white text-2xl md:text-3xl font-medium mb-12">
            Client Testimonial :
          </h2>
          
          <div className="relative max-w-5xl mx-auto mb-12">
            {/* Quote icons */}
            <div className="absolute top-0 left-4">
              <Image
                src="/img/dooh/quoteleft.svg"
                alt="Quote left"
                width={40}
                height={40}
              />
            </div>
            <div className="absolute top-0 right-4">
              <Image
                src="/img/dooh/quoteright.svg"
                alt="Quote right"
                width={40}
                height={40}
              />
            </div>
            
            <div className="px-16 py-8">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Thanks to Visuaal, we successfully deployed our screen network across three major cities, 
                using high-quality equipment at no upfront cost, thanks to their monetization model. 
                Their local expertise, combined with a global perspective, truly sets them apart.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <GradientButton 
              href="/contact" 
              text="I want this" 
              className="text-[16px] h-[49px] w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}