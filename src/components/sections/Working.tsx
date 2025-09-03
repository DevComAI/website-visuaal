'use client'

import Spline from '@splinetool/react-spline'

export default function Working() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-12 grid md:grid-cols-3 gap-8">
   
          
          {/* INFORM Column */}
          <div className="flex flex-col items-center">
            <div className="h-[350px] w-full relative overflow-visible flex items-center justify-center px-4 pb-25" >
              <div style={{ transform: 'scale(0.6)', transformOrigin: 'center', width: '900px', height: '700px' }}>
                <Spline
                  scene="https://prod.spline.design/1kfiH0yZ5dSGioTU/scene.splinecode"
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
            <div className="w-[570px]  my-20">
            <h3 className="text-xl font-bold mb-4 text-white">INFORM – We guide you</h3>
            <p className="text-gray-300 leading-relaxed">
              At VISUAAL, we help businesses harness the power of Digital Signage to enhance sales and brand visibility. Whether in retail stores, banks, or restaurants, we create impactful visual communication that resonates with music in popular clothing stores—that captivates audiences and drive engagement.
            </p>

          </div>
          </div>

          {/* SUPPORT Column */}
          <div className="flex flex-col items-center ">
            <div className="h-[350px] w-full relative overflow-visible flex items-center justify-center px-4 pb-25">
              <div style={{ transform: 'scale(0.6)', transformOrigin: 'center', width: '800px', height: '700px' }}>
                <Spline
                  scene="https://prod.spline.design/YQnsevjGuljq6asJ/scene.splinecode"
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
            <div className="w-[570px]  my-20">
            <h3 className="text-xl font-bold mb-4 text-white">SUPPORT – We advise you</h3>
            <p className="text-gray-300 leading-relaxed">
              Our experts work closely with brands to design and implement interactive Digital Signage solutions across transportation hubs, theaters, and high-traffic public spaces. By crafting compelling engaging content, we maximize advertising impact and boost revenue for multiple brands.
            </p>
          </div>
          </div>

          {/* MODERNIZE Column */}
          <div className="flex flex-col items-center  ">
            <div className="h-[350px] w-full relative overflow-visible flex items-center justify-center px-4 pb-34">
              <div style={{ transform: 'scale(0.6)', transformOrigin: 'center', width: '800px', height: '800px' }}>
                <Spline
                  scene="https://prod.spline.design/SdbEwI9-LUOY0hlb/scene.splinecode"
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
            <div className="w-[570px] my-20">
              <h3 className="text-xl font-medium mb-4 text-white">MODERNIZE – We transform experiences</h3>
              <p className="text-gray-300  leading-relaxed">
                From hospitality and healthcare to educational venues, our customized Digital Signage solutions elevate customer interactions. We craft immersive digital experiences that inform, entertain, and inspire—creating seamless and memorable experiences for every audience.
              </p>
            </div>
          </div>

      </div>
    </section>
  )
}