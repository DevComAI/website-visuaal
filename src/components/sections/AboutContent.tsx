'use client'

import Image from 'next/image'
import GradientButton from '@/components/ui/GradientButton'
import GradientText from '@/components/ui/GradientText'

const AboutContent = () => {
  return (
    <section className="py-12 lg:py-20 text-white mx-4 sm:mx-8 lg:mx-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Our Missions */}
            <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-3 lg:mb-4">
                OUR <GradientText>MISSIONS</GradientText>
              </h2>
              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                At VISUAAL, we bring LED screens to life! Our mission is to transform spaces into dynamic digital experiences, offering cutting-edge content, expert consulting, seamless installation, and smart monetisation strategies. From 3D and holographic storytelling to tailored solutions, we make digital signage more than just a screen—it&apos;s an immersive journey.
              </p>
            </div>

            {/* Our Goals */}
            <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-3 lg:mb-4">
            OUR <GradientText>GOALS</GradientText>
              </h2>
              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                We transform digital experiences with impactful visuals and cutting-edge technology. Our goal is to help businesses harness LED solutions to boost engagement and drive revenue.
                With end-to-end expertise, we make digital signage effortless—from concept to execution—delivering tailored, high-performance solutions that turn every project into a powerful communication tool.
              </p>
            </div>

            {/* Why Us */}
            <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-3 lg:mb-4">
            WHY <GradientText>US</GradientText>
              </h2>
              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
                Because we don&apos;t just sell screens—we create unforgettable experiences! With expertise at every step, next-gen content, and a commitment to innovation, we&apos;re your partners in transformative digital signage success. Plus, we make monetisation work for you. More impact, more engagement, more ROI. Let me know if you&apos;d like any tweaks!
              </p>
            </div>


          </div>

          {/* Image - Desktop */}
          <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] mix-blend-lighten order-first lg:order-last hidden md:block">
            <Image
              src="/temp-opti-img/about-2.png"
              alt="About VISUAAL content"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top fade */}
              <div className="absolute top-0 left-0 right-0 h-12 lg:h-20 bg-gradient-to-b from-[#211824] to-transparent"></div>
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-20 bg-gradient-to-t from-[#211824] to-transparent"></div>
              {/* Left fade */}
              <div className="absolute top-0 left-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r from-[#211824] to-transparent"></div>
              {/* Right fade */}
              <div className="absolute top-0 right-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l from-[#211824] to-transparent"></div>
            </div>
          </div>

        </div>
          {/* Get Started Button */}
          <div className="pt-12 lg:pt-20 flex justify-center">
              <GradientButton
                href="/contact"
                text="Get started"
                className="w-[160px] sm:w-[180px] lg:w-[201px] h-[44px] sm:h-[50px] lg:h-[56px]"
              />
            </div>
      </div>

    </section>
  )
}

export default AboutContent