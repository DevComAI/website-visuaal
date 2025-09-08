import Image from 'next/image'

export default function DoohContent() {
  const advantages = [
    "Premium Coverage: Exclusive, high-visibility locations",
    "Advanced Technology: High-definition screens and dynamic content", 
    "Smart Targeting: Programming aligned with audience flows and foot traffic",
    "Local Expertise: Deep understanding of the UAE media landscape",
    "Global Support: International Visuaal network to scale your campaigns across countries"
  ]

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <div className="text-left mb-24 relative">
          <div className="absolute inset-0 flex items-center justify-start pointer-events-none ">
            <div className="text-[380px] font-bold  text-white/10">1</div>
          </div>
          <div className="relative z-10 ml-30 text-[32px] ">
            <h1 className="text-white font-medium  mb-3">
              Why Choose Visuaal for DOOH in Dubai and Europe?
            </h1>
            <p className=" leading-relaxed max-w-[1440px] mb-12">
              A Fully Integrated Approach — No Proprietary Network, Full Expert Support
              While Visuaal does not own screen networks, we provide end-to-end support to help clients 
              manage and deploy their DOOH campaigns with ease and efficiency.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-row gap-32 items-center">
            <div className="h-[478px] w-[851px]">
              <Image
                src="/img/dooh/content1-1.png"
                alt="DOOH Airport Display"
                width={851}
                height={478}
              />
            </div>
            <div className="h-[478px] w-[591px]">
              <Image
                src="/img/dooh/content1-2.png"
                alt="DOOH Street Display"
                width={591}
                height={478}
              />
            </div>
          </div>
        </div>

        <div className="mb-8 ml-30 text-[32px] ">
          <p className="text-white   mb-6">Our key advantages :</p>
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg leading-relaxed">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}