'use client'

import Spline from '@splinetool/react-spline'
import GradientButton from '@/components/ui/GradientButton'
import GradientLine from '@/components/ui/GradientLine'

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12  mb-20 relative z-10">
          {/* Left side - Text and Button */}
          <div className="text-white space-y-16 ml-18 relative z-10 mt-20">
            <div className="space-y-18 max-w-[582px] text-[20px]">
         
              <p >
              In a world where digital engagement defines brand success, VISUAAL offers a complete suite of high-impact solutions designed to captivate, connect, and convert. Based in Dubai, Paris and Shenzhen, VISUAAL brings together a team of experts who are reshaping the digital landscape.
              </p>

              <p >
              VISUAAL is it the meeting of entrepreneurs from different backgrounds who bring their expertise in experience creation, advertising, and digital transformation to serve brands and publishers around immersive and innovative experiences.              </p>
            </div>
            
            <GradientButton href="/about" text="Read more" className="text-[16px] h-[49px] w-[194px]"/>
          </div>

          {/* Right side - Spline Viewer */}
          <div className="h-[800px] -mt-20 relative z-50 ">
            <Spline
              scene="https://prod.spline.design/Sj5w2qinD5unnyvb/scene.splinecode"
              className="w-full h-full relative z-50"
              style={{ zIndex: 50 }}
            />
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative z-20">
        
          <div className="text-center text-white relative z-20">
            <div 
              className="p-8 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/forme/para1.png')" }}
            >
              <div className="text-5xl font-bold mb-4 relative z-10">+10</div>
              <div className="text-lg -ml-16 font-medium relative z-10">Years of experience</div>
            </div>
          </div>
          
          <div className="text-center text-white relative z-20">
            <div 
              className="p-8 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/forme/para2.png')" }}
            >
              <div className="text-5xl font-bold mb-4 relative z-10">100%</div>
              <div className="text-lg -ml-16 font-medium relative z-10">Product quality</div>
            </div>
          </div>
          
          <div className="text-center text-white relative z-20">
            <div 
              className="p-8 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: "url('/forme/para3.png')" }}
            >
              <div className="text-5xl font-bold mb-4 relative z-10">24/7</div>
              <div className="text-lg -ml-16 font-medium relative z-10">Technical support</div>
            </div>
          </div>

        </div>
        <GradientLine width="100%" padding="py-8" className="-mt-20 pb-20" />

   
      </div>
    </section>
  )
}

export default AboutUs