import Image from 'next/image'
import AnimatedBorder from '@/components/ui/AnimatedBorder'

export default function DoohContent() {
  const advantages = [
    "Premium Coverage: Exclusive, high-visibility locations",
    "Advanced Technology: High-definition screens and dynamic content", 
    "Smart Targeting: Programming aligned with audience flows and foot traffic",
    "Local Expertise: Deep understanding of the UAE media landscape",
    "Global Support: International Visuaal network to scale your campaigns across countries"
  ]

  const technologicalAdvantages = [
    "Centralized Management: One platform to control and monitor all campaigns",
    "Dynamic Content: Real-time adaptation based on audience and context",
    "Advanced Analytics: Accurate measurement of performance and engagement",
    "Creative Flexibility: Support for all formats — video, animation, interactivity",
    "Smart Scheduling: Targeted playback based on time of day, weather, or live events"
  ]

  return (
    <section className="py-16 lg:py-32 xl:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left mb-12 lg:mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center lg:justify-start pointer-events-none">
            <div className="text-6xl sm:text-8xl lg:text-9xl xl:text-[380px] font-bold text-white/10">1</div>
          </div>
          <div className="relative z-10 ml-0 lg:ml-16 xl:ml-30">
            <h1 className="text-white font-medium mb-3 text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              Why Choose Visuaal for DOOH in Dubai and Europe?
            </h1>
            <p className="text-white leading-relaxed max-w-full lg:max-w-4xl xl:max-w-6xl mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg xl:text-xl">
              A Fully Integrated Approach — No Proprietary Network, Full Expert Support
              While Visuaal does not own screen networks, we provide end-to-end support to help clients
              manage and deploy their DOOH campaigns with ease and efficiency.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch w-full max-w-7xl">
            <AnimatedBorder className="w-full lg:flex-[1.5] max-w-md lg:max-w-none" borderRadius="0.5rem">
              <Image
                src="/img/dooh/content1-1.png"
                alt="DOOH Airport Display"
                width={851}
                height={478}
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: '300px' }}
              />
            </AnimatedBorder>
            <AnimatedBorder className="w-full lg:flex-1 max-w-md lg:max-w-none" borderRadius="0.5rem">
              <Image
                src="/img/dooh/content1-2.png"
                alt="DOOH Street Display"
                width={591}
                height={478}
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: '300px' }}
              />
            </AnimatedBorder>
          </div>
        </div>

        <div className="mb-8 ml-0 lg:ml-16 xl:ml-30">
          <p className="text-white mb-4 lg:mb-6 text-lg sm:text-xl lg:text-2xl xl:text-3xl">Our key advantages :</p>
          <div className="space-y-3 lg:space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 lg:py-32 xl:py-40"></div>

        {/* Content 2 - Technological Edge */}
        <div className="text-center lg:text-left mb-12 lg:mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center lg:justify-start pointer-events-none">
            <div className="text-6xl sm:text-8xl lg:text-9xl xl:text-[380px] font-bold text-white/10">2</div>
          </div>
          <div className="relative z-10 ml-0 lg:ml-16 xl:ml-30">
            <h1 className="text-white font-medium mb-3 text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              Visuaal&apos;s Technological Edge Innovation & Performance at the Core
            </h1>
            <p className="text-white leading-relaxed max-w-full lg:max-w-4xl xl:max-w-6xl mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg xl:text-xl">
              Our DOOH solutions leverage the latest technology to boost campaign effectiveness :
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch w-full max-w-7xl">
            <AnimatedBorder className="w-full lg:flex-[1.5] max-w-md lg:max-w-none" borderRadius="0.5rem">
              <Image
                src="/img/dooh/content2-1.png"
                alt="DOOH Technology Display"
                width={851}
                height={478}
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: '300px' }}
              />
            </AnimatedBorder>
            <AnimatedBorder className="w-full lg:flex-1 max-w-md lg:max-w-none" borderRadius="0.5rem">
              <Image
                src="/img/dooh/content2-2.png"
                alt="DOOH Interactive Display"
                width={591}
                height={478}
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: '300px' }}
              />
            </AnimatedBorder>
          </div>
        </div>

        <div className="mb-8 lg:mb-16 ml-0 lg:ml-16 xl:ml-30">
          <div className="space-y-3 lg:space-y-4">
            {technologicalAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 lg:py-32 xl:py-40"></div>

        {/* Content 3 - Dubai-Specific Focus */}
        <div className="text-center lg:text-left mb-12 lg:mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-center lg:justify-start pointer-events-none">
            <div className="text-6xl sm:text-8xl lg:text-9xl xl:text-[380px] font-bold text-white/10">3</div>
          </div>
          <div className="relative z-10 ml-0 lg:ml-16 xl:ml-30">
            <h1 className="text-white font-medium mb-3 text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              Dubai-Specific Focus
            </h1>
            <p className="text-white leading-relaxed max-w-full lg:max-w-4xl xl:max-w-6xl mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg xl:text-xl">
              Visuaal Dubai: Premium DOOH Solutions for Bold Brand Ambitions
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16   items-stretch w-full max-w-7xl">
            <AnimatedBorder className="w-full lg:flex-[1.5] max-w-md lg:max-w-none" borderRadius="0.5rem">
              <Image
                src="/img/dooh/content3-1.png"
                alt="Dubai DOOH Display"
                width={851}
                height={478}
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: '300px' }}
              />
            </AnimatedBorder>
            <AnimatedBorder className="w-full lg:flex-1 max-w-md lg:max-w-none" borderRadius="0.5rem">
              <Image
                src="/img/dooh/content3-2.png"
                alt="Dubai Street Display"
                width={591}
                height={478}
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: '300px' }}
              />
            </AnimatedBorder>
          </div>
        </div>

        <div className="mb-8 ml-0 lg:ml-16 xl:ml-30">
          <p className="text-gray-300 leading-relaxed mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg xl:text-xl">
            Based in the heart of the UAE, Visuaal Dubai brings together global know-how and local
            insight. We support brands from initial design to DOOH strategy — from creative conception
            to campaign analysis — ensuring maximum visibility in one of the world&apos;s most dynamic
            markets.
          </p>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl">
            Our tailored approach respects both cultural nuances and audience expectations in Dubai,
            while upholding the quality standards that define the Visuaal brand.
          </p>
        </div>

      </div>
    </section>
  )
}