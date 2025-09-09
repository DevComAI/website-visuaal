import Image from 'next/image'
import { ReactNode } from 'react'

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface HoloFeaturesProps {
  title: ReactNode
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
      <div className="flex justify-start">
        <div className="flex flex-col  mx-28">
          <h1 className="text-white text-[40px]  font-medium mb-6 uppercase text-left">
            {title}
          </h1>
          <p className="text-[32px] font-regular leading-relaxed mb-8 text-left whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
        <div className="flex justify-center ">
          <div className={`flex items-center gap-16 mx-28 ${reverse ? 'flex-row-reverse' : 'flex-row -mt-40'}`}>
            
            {/* Text Content */}
            <div className="w-2/3">
              
              
              {/* Features List */}
              <div className="space-y-6 relative">
                {/* Trait vertical derrière les parallélépipèdes */}
                <div className={`absolute ${reverse ? 'left-[105px]' : 'right-[105px]'} -top-10 -bottom-10 w-px bg-gradient-to-b from-transparent via-white to-transparent z-0`} />
                
                {features.map((feature, index) => (
                  <div key={index} className={`flex items-start gap-16 max-w-5xl ${!reverse ? 'flex-row-reverse' : 'flex-row'}`}>
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
                      <p className=" text-[30px] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image */}
            <div className="w-2/5 flex justify-center ">
              <div className="relative ">
                <Image
                  src={mainImage}
                  alt="Holographic display"
                  width={reverse ? 850 : 540}
                   height={reverse ? 1350 : 960}
                  className={`h-full w-full object-contain mix-blend-screen ${reverse ? '' : 'mt-20'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}