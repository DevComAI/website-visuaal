'use client'

import Spline from '@splinetool/react-spline'

export default function Working() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">

          {/* INFORM Column */}
          <div className="flex flex-col items-center">
            <div className="h-[250px] lg:h-[350px] w-full relative overflow-visible flex items-center justify-center px-4 pb-8 lg:pb-25">
              <div className="transform scale-75 lg:scale-60 w-[600px] lg:w-[900px] h-[500px] lg:h-[700px]">
                <Spline
                  scene="https://prod.spline.design/1kfiH0yZ5dSGioTU/scene.splinecode"
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
            <div className="max-w-full lg:w-[570px] my-8 lg:my-20 text-center lg:text-left">
            <h3 className="text-lg lg:text-xl font-bold mb-4 text-white">INFORM – We guide you</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              At VISUAAL, we help businesses harness the power of Digital Signage to enhance sales and brand visibility. Whether in retail stores, banks, or restaurants, we create impactful visual communication that resonates with music in popular clothing stores—that captivates audiences and drive engagement.
            </p>

          </div>
          </div>

          {/* SUPPORT Column */}
          <div className="flex flex-col items-center">
            <div className="h-[250px] lg:h-[350px] w-full relative overflow-visible flex items-center justify-center px-4 pb-8 lg:pb-25">
              <div className="transform scale-75 lg:scale-60 w-[600px] lg:w-[800px] h-[500px] lg:h-[700px]">
                <Spline
                  scene="https://prod.spline.design/YQnsevjGuljq6asJ/scene.splinecode"
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
            <div className="max-w-full lg:w-[570px] my-8 lg:my-20 text-center lg:text-left">
            <h3 className="text-lg lg:text-xl font-bold mb-4 text-white">SUPPORT – We advise you</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Our experts work closely with brands to design and implement interactive Digital Signage solutions across transportation hubs, theaters, and high-traffic public spaces. By crafting compelling engaging content, we maximize advertising impact and boost revenue for multiple brands.
            </p>
          </div>
          </div>

          {/* MODERNIZE Column */}
          <div className="flex flex-col items-center">
            <div className="h-[250px] lg:h-[350px] w-full relative overflow-visible flex items-center justify-center px-4 pb-8 lg:pb-34">
              <div className="transform scale-75 lg:scale-60 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px]">
                <Spline
                  scene="https://prod.spline.design/SdbEwI9-LUOY0hlb/scene.splinecode"
                  className="w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
            </div>
            <div className="max-w-full lg:w-[570px] my-8 lg:my-20 text-center lg:text-left">
              <h3 className="text-lg lg:text-xl font-medium mb-4 text-white">MODERNIZE – We transform experiences</h3>
              <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
                From hospitality and healthcare to educational venues, our customized Digital Signage solutions elevate customer interactions. We craft immersive digital experiences that inform, entertain, and inspire—creating seamless and memorable experiences for every audience.
              </p>
            </div>
          </div>

      </div>
    </section>
  )
}