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
    <section className={`py-20 flex justify-center ${className}`}>
      <div className=" px-4">
        {/* Header */}
        <div className="text-center mb-50">
          <h2 className="text-[40px]  font-medium text-white mb-32 uppercase">
            {title}
          </h2>
          <div className="space-y-6 max-w-[1500px] mx-auto">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[32px] text-white font-normal leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
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
                  alt={typeof service.title === 'string' ? service.title : 'Service image'}
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