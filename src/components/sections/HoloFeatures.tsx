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
  className?: string
}

export default function HoloFeatures({
  title,
  description,
  mainImage,
  features,
  reverse = false,
  className = ""
}: HoloFeaturesProps) {
  return (
    <section className={`py-10 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-start">
        <div className="flex flex-col mx-0 md:mx-14 lg:mx-28 ">
          <h1 className="text-white text-xl md:text-3xl lg:text-[40px] font-medium mb-4 md:mb-6 uppercase text-left">
            {title}
          </h1>
          <p className="text-base md:text-xl lg:text-[32px] font-regular leading-relaxed mb-4 md:mb-6 lg:mb-8 text-left whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
        <div className={`flex justify-center ${className}`}> 
          <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 mx-0 md:mx-14 lg:mx-28 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row lg:-mt-40'}`}>

            {/* Image - shown first on mobile */}
            <div className="w-full lg:w-2/5 flex justify-center lg:hidden order-1">
                <div className="bg-transparent">
                  <Image
                    src={mainImage}
                    alt="Holographic display"
                    width={reverse ? 850 : 540}
                    height={reverse ? 1350 : 960}
                    className="h-full w-full object-contain mix-blend-screen"
                  />
                </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-2/3 order-2 lg:order-none">


              {/* Features List */}
              <div className="space-y-4 md:space-y-6 relative">
                {/* Trait vertical derrière les parallélépipèdes - hidden on mobile */}
                <div className={`hidden lg:block absolute ${reverse ? 'right-[115px]' : 'left-[115px]'} -top-10 -bottom-10 w-px bg-gradient-to-b
                from-transparent via-white to-transparent -z-10`} />

                {features.map((feature, index) => (
                  <div key={index} className={`flex flex-row items-start gap-4 md:gap-8 lg:gap-16 max-w-5xl ${!reverse ? 'md:flex-row-reverse ' : 'md:flex-row'}`}>
                    <div className="flex-1 order-1">
                      <p className="text-sm md:text-xl lg:text-[30px] leading-relaxed text-left md:text-left">
                        {feature.description}
                      </p>
                    </div>
                    <div className="text-center text-white relative z-20 order-2 md:mx-0">
                      <div
                        className="w-[100px] md:w-[180px] lg:w-[210px] h-[70px] md:h-[120px] lg:h-[140px] bg-no-repeat bg-center bg-contain flex items-center justify-center flex-shrink-0"
                        style={{ backgroundImage: "url('/forme/para3.png')" }}
                      >
                        <div className={`${feature.icon.split(' ').length === 1 ? 'text-xs md:text-2xl lg:text-[30px]' : 'text-[10px] md:text-base lg:text-[20px]'} font-semibold relative -ml-2 z-10 px-2 text-center leading-tight`}>
                          {feature.icon.split(' ').map((word, wordIndex) => (
                            <div key={wordIndex}>{word}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image - shown on desktop only */}
            <div className="w-full lg:w-2/5 justify-center hidden lg:flex">
                <div className="bg-transparent">
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