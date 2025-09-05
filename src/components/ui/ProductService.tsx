interface ServiceCard {
  title: string;
  image: string;
  description: string;
  bulletPoints: string[];
}

interface ProductServiceProps {
  title: string;
  paragraph: string;
  services: ServiceCard[];
  className?: string;
}

const ProductService = ({ 
  title, 
  paragraph, 
  services,
  className = "" 
}: ProductServiceProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container max-w-[1650px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-medium text-white mb-8 uppercase">
            {title}
          </h2>
          <p className="text-[20px] text-white font-normal leading-relaxed max-w-4xl mx-auto">
            {paragraph}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div key={index} className="text-left pb-30 max-w-[800px]">
              {/* Service Title */}
              <h3 className="text-[40px] font-medium text-white mb-6 uppercase">
                {service.title}
              </h3>

              {/* Service Image */}
              <div className="mb-6 text-left">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="h-auto object-contain"
                  style={{ maxHeight: '400px', width: 'auto' }}
                />
              </div>

              {/* Service Description */}
              <p className="text-[32px] text-white font-normal leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2">
                {service.bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-[24px] text-white/80 leading-relaxed flex items-start">
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