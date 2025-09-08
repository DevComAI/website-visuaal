import Image from 'next/image'

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface HoloFeaturesProps {
  title: string
  description: string
  mainImage: string
  features: FeatureItem[]
  reverse?: boolean
}

export default function HoloFeatures({
  title,
  description,
  mainImage,
  features,
  reverse = false
}: HoloFeaturesProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[1600px]">
          <h1 className="text-white text-3xl md:text-4xl font-medium mb-6 uppercase text-left">
            {title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 text-left">
            {description}
          </p>
        </div>
      </div>
        <div className={`flex items-center gap-16 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
          
          {/* Text Content */}
          <div className="flex-1">
            
            
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-start gap-16 ${!reverse ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="text-center text-white relative z-20">
                    <div 
                      className="w-[210px] h-[140px] bg-no-repeat bg-center bg-contain flex items-center justify-center"
                      style={{ backgroundImage: "url('/forme/para3.png')" }}
                    >
                      <div className={`${feature.icon.split(' ').length === 1 ? 'text-[30px]' : 'text-[20px]'} font-semibold relative -ml-2 z-10 px-2 text-center leading-tight`}>
                        {feature.icon.split(' ').map((word, wordIndex) => (
                          <div key={wordIndex}>{word}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className=" text-[32px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative ">
              <Image
                src={mainImage}
                alt="Holographic display"
                width={400}
                height={500}
                className="w-full h-full object-contain mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}