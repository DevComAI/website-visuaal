'use client'

import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'
import GradientButton from '@/components/ui/GradientButton'
import GradientLine from '@/components/ui/GradientLine'
import AnimatedLine from '../ui/AnimatedLine'

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20 relative z-10">
          {/* Left side - Text and Button */}
          <div className="text-white space-y-8 lg:space-y-16 ml-0 sm:ml-6 lg:ml-18 relative z-10 mt-8 lg:mt-20">
            <div className="space-y-6 lg:space-y-18 max-w-[582px] text-base lg:text-[20px]">

              <p>
              In a world where digital engagement defines brand success, VISUAAL offers a complete suite of high-impact solutions designed to captivate, connect, and convert. Based in Dubai, Paris and Shenzhen, VISUAAL brings together a team of experts who are reshaping the digital landscape.
              </p>

      <div className="">
        <div className="ml-0 sm:ml-6 lg:ml-18">
          <AnimatedLine orientation="horizontal" size={400} thickness={3} />
        </div>
      </div>


              <p>
              VISUAAL is it the meeting of entrepreneurs from different backgrounds who bring their expertise in experience creation, advertising, and digital transformation to serve brands and publishers around immersive and innovative experiences.              </p>
            </div>

            <GradientButton href="/about" text="Read more" className="text-sm lg:text-[16px] h-[40px] lg:h-[49px] w-[160px] lg:w-[194px]"/>
          </div>

          {/* Right side - Spline Viewer */}
          <div className="h-[400px] sm:h-[500px] lg:h-[800px] mt-8 lg:-mt-20 relative z-50 order-first lg:order-last">
            <OptimizedSplineViewer
              scene="https://prod.spline.design/Sj5w2qinD5unnyvb/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
              interactive={true}
              priority={false}
              loadingDelay={150}
              placeholderVariant="gradient"
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 relative z-20">

          <div className="text-center text-white relative z-20">
            <div
              className="p-6 lg:p-8 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/forme/para1.png')" }}
            >
              <div className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 relative z-10">+10</div>
              <div className="text-sm lg:text-lg -ml-8 lg:-ml-16 font-medium relative z-10">Years of experience</div>
            </div>
          </div>



          <div className="text-center text-white relative z-20">
            <div
              className="p-6 lg:p-8 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/forme/para2.png')" }}
            >
              <div className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 relative z-10">100%</div>
              <div className="text-sm lg:text-lg -ml-8 lg:-ml-16 font-medium relative z-10">Product quality</div>
            </div>
          </div>

          <div className="text-center text-white relative z-20 sm:col-span-2 md:col-span-1">
            <div
              className="p-6 lg:p-8 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/forme/para3.png')" }}
            >
              <div className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 relative z-10">24/7</div>
              <div className="text-sm lg:text-lg -ml-8 lg:-ml-16 font-medium relative z-10">Technical support</div>
            </div>
          </div>

        </div>
        <GradientLine width="100%" padding="py-4 lg:py-8" className="-mt-8 lg:-mt-20 pb-12 lg:pb-20" />

   
      </div>
    </section>
  )
}

export default AboutUs