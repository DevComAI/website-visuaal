import Image from 'next/image'
import AnimatedBorder from '@/components/ui/AnimatedBorder'

interface ServiceCard {
  title: string | React.ReactNode;
  image: string;
  description: string;
  bulletPoints: string[];
}

interface ProductServiceProps {
  title: string | React.ReactNode;
  paragraphs: string[];
  services: ServiceCard[];
  className?: string;
}

const ProductService = ({ 
  title, 
  paragraphs, 
  services,
  className = "" 
}: ProductServiceProps) => {
  return (
    <section className={`py-10 md:py-20 flex justify-center ${className}`}>
      <div className="px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-32 lg:mb-50">
          <h2 className="text-xl md:text-3xl lg:text-[40px] font-medium text-white mb-8 md:mb-16 lg:mb-32 uppercase">
            {title}
          </h2>
          <div className="space-y-4 md:space-y-6 max-w-[1500px] mx-auto">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-xl lg:text-[32px] text-white font-normal leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="text-left pb-8 md:pb-16 lg:pb-30 max-w-[800px]">
              {/* Service Title */}
              <h3 className="text-lg md:text-2xl lg:text-[40px] font-medium text-white mb-4 md:mb-6 uppercase">
                {service.title}
              </h3>

              {/* Service Image */}
              <div className="mb-6 text-left">
                <AnimatedBorder className="inline-block" borderRadius="0.5rem">
                  <Image
                    src={service.image}
                    alt={typeof service.title === 'string' ? service.title : 'Service image'}
                    width={800}
                    height={400}
                    className="h-auto object-contain rounded-lg"
                    style={{ maxHeight: '400px', width: 'auto' }}
                  />
                </AnimatedBorder>
              </div>

              {/* Service Description */}
              <p className="text-base md:text-xl lg:text-[32px] text-white font-normal leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {service.bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm md:text-base lg:text-[24px] text-white/80 leading-relaxed flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductService;