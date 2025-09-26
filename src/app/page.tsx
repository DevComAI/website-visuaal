'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import AboutUs from '@/components/sections/AboutUs'
import TitleHome from '@/components/ui/TitleSection'
import Working from '@/components/sections/Working'
import SupportCarousel from '@/components/sections/SupportCarousel'
import LogoCarousel from '@/components/sections/LogoCarousel'
import ProductsSection from '@/components/sections/ProductsSection'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import GradientLine from '@/components/ui/GradientLine'
import GradientText from '@/components/ui/GradientText'
import PageLoader from '@/components/ui/PageLoader'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      websiteSchema
    ]
  }

  // Mobile-optimized components inline
  const MobileGradientText = ({ children, className = "" }: { children: string; className?: string }) => {
    const [animationDelay, setAnimationDelay] = useState(0)

    useEffect(() => {
      setAnimationDelay(Math.random() * 12)
    }, [])

    return (
      <>
        <style jsx>{`
          .gradient-text {
            background: linear-gradient(
              45deg,
              #473FB9,
              #4DA8D7,
              #9512B6,
              #473FB9,
              #158BBD,
              #C82EF0
            );
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientFlow 12s ease-in-out infinite;
            animation-delay: ${animationDelay}s;
          }

          @keyframes gradientFlow {
            0%, 100% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            75% {
              background-position: 0% 100%;
            }
          }
        `}</style>
        <span className={`gradient-text ${className}`}>
          {children}
        </span>
      </>
    );
  };

  const MobileGradientButton = ({ href, text, className = "" }: { href: string; text: string; className?: string }) => {
    const [animationDelay, setAnimationDelay] = useState(0)

    useEffect(() => {
      setAnimationDelay(Math.random() * 12)
    }, [])

    return (
      <>
        <style jsx>{`
          .gradient-button {
            background: linear-gradient(
              45deg,
              #473FB9,
              #4DA8D7,
              #9512B6,
              #473FB9,
              #158BBD,
              #C82EF0
            );
            background-size: 400% 400%;
            animation: gradientFlow 12s ease-in-out infinite;
            animation-delay: ${animationDelay}s;
          }

          @keyframes gradientFlow {
            0%, 100% {
              background-position: 0% 50%;
            }
            25% {
              background-position: 100% 0%;
            }
            50% {
              background-position: 100% 100%;
            }
            75% {
              background-position: 0% 100%;
            }
          }
        `}</style>
        <div className={`gradient-button relative p-[1px] rounded-full ${className || 'w-[201px] h-[56px]'}`}>
          <Link href={href} className="w-full h-full px-8 py-4 rounded-full text-white bg-black transition-colors duration-300 relative z-10 flex items-center justify-center">
            {text}
          </Link>
        </div>
      </>
    )
  }


  const MobileTitleHome = ({ topText, bottomText, backgroundImage, className = "" }: {
    topText?: string | React.ReactNode;
    bottomText: string | React.ReactNode;
    backgroundImage?: string;
    className?: string;
  }) => {
    return (
      <section className={`relative py-8 sm:py-12 ${className}`}>
        {backgroundImage && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-1">
            <div
              className="w-full h-full bg-no-repeat bg-center opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url('/title/${backgroundImage}')`,
                backgroundSize: 'contain',
                maxWidth: '100%'
              }}
            />
          </div>
        )}

        <div className="container relative z-10 flex items-end min-h-[80px] sm:min-h-[120px] px-4 sm:px-6">
          <div className="text-center w-full pb-4 sm:pb-6 text-sm sm:text-lg md:text-xl lg:text-2xl">
            {topText && (
              <div className="font-medium text-white leading-tight mb-2">
                {topText}
              </div>
            )}
            <h2 className="font-medium text-white leading-tight">
              {bottomText}
            </h2>
          </div>
        </div>
      </section>
    );
  };

  if (isMobile) {
    return (
      <>
        {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Mobile Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/img/home/hero-home.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[black]/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#211824] to-transparent"></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="flex items-start mt-20 sm:mt-32 h-full text-center">
              <div className="w-full">
                <h1 className="font-semibold text-white mb-4 leading-none text-3xl sm:text-5xl">
                  VISUAAL
                </h1>

                <h2 className="font-semibold max-w-5xl text-white mb-4 sm:mb-6 leading-tight text-lg sm:text-xl mx-auto">
                  <MobileGradientText>Innovative visual solutions</MobileGradientText> to capture attention and <MobileGradientText>elevate your brand</MobileGradientText>.
                </h2>

                <p className="text-white leading-tight max-w-2xl text-sm sm:text-base mx-auto">
                  At VISUAAL, we design tailor-made visual experiences that combine creativity, technology, and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>
<div className='my-20'>


        <LogoCarousel />
        </div>


        <MobileTitleHome
          topText={<><MobileGradientText>EXPERTS</MobileGradientText> IN IMMERSIVE EXPERIENCES</>}
          bottomText="AND DIGITAL TRANSFORMATION"
          backgroundImage="aboutus.png"
        />

        {/* Mobile AboutUs Section */}
        <section className="relative overflow-hidden py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 mb-12 relative z-10">
              <div className="text-white space-y-6 text-center relative z-10">
            

                <div className="space-y-4 max-w-full text-sm">
                  <p>
                    In a world where digital engagement defines brand success, VISUAAL offers a complete suite of high-impact solutions designed to captivate, connect, and convert. Based in Dubai, Paris and Shenzhen, VISUAAL brings together a team of experts who are reshaping the digital landscape.
                  </p>

                  <p>
                    VISUAAL is it the meeting of entrepreneurs from different backgrounds who bring their expertise in experience creation, advertising, and digital transformation to serve brands and publishers around immersive and innovative experiences.
                  </p>
                </div>

                <div className="flex justify-center">
                  <MobileGradientButton href="/about" text="Read more" className="text-sm h-[40px] w-[160px]"/>
                </div>
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
          </div>
        </section>

        <div className="pb-20"></div>



        <MobileTitleHome
          topText={<>THE BENEFITS OF USING OUR <MobileGradientText>DIGITAL SIGNAGE</MobileGradientText></>}
          bottomText=""
          backgroundImage="working.png"
        />

        {/* Mobile Working Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 gap-12">
            <div className="flex flex-col items-center text-center">
           

              <div className="max-w-lg space-y-4">
                <h3 className="text-lg font-bold text-white">INFORM – We guide you</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  At VISUAAL, we help businesses harness the power of Digital Signage to enhance sales and brand visibility. Whether in retail stores, banks, or restaurants, we create impactful visual communication that resonates with music in popular clothing stores—that captivates audiences and drive engagement.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
          

              <div className="max-w-lg space-y-4">
                <h3 className="text-lg font-bold text-white">SUPPORT – We advise you</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Our experts work closely with brands to design and implement interactive Digital Signage solutions across transportation hubs, theaters, and high-traffic public spaces. By crafting compelling engaging content, we maximize advertising impact and boost revenue for multiple brands.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
        

              <div className="max-w-lg space-y-4">
                <h3 className="text-lg font-medium text-white">MODERNIZE – We transform experiences</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  From hospitality and healthcare to educational venues, our customized Digital Signage solutions elevate customer interactions. We craft immersive digital experiences that inform, entertain, and inspire—creating seamless and memorable experiences for every audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-12"></div>

        <MobileTitleHome
          topText={<><MobileGradientText>END-TO-END</MobileGradientText> DIGITAL SIGNAGE SOLUTIONS</>}
          bottomText=""
          backgroundImage="support.png"
        />

        <SupportCarousel />

        <MobileTitleHome
          topText={<><MobileGradientText>OUR</MobileGradientText> PRODUCTS PORTFOLIO</>}
          bottomText=""
          backgroundImage="product.png"
        />

        <ProductsSection />

        <div className="pb-12"></div>
      </>
    );
  }

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero 
        backgroundVideo="/img/home/hero-home.mp4"
        title="VISUAAL"
        subtitle={<><GradientText>Innovative visual solutions</GradientText> to capture attention and <GradientText>elevate your brand</GradientText>.</>}
        description="At VISUAAL, we design tailor-made visual experiences that combine creativity, technology, and performance."
      />

      <LogoCarousel />
      
      <TitleHome
        topText={<><GradientText>EXPERTS</GradientText> IN IMMERSIVE EXPERIENCES</>}
        bottomText="AND DIGITAL TRANSFORMATION"
        backgroundImage="aboutus.png"
      />
      


      <AboutUs />
      <div className="pb-20 sm:pb-40 lg:pb-80"> </div>

      <TitleHome
        topText="THE BENEFITS OF USING OUR"
        bottomText={<><GradientText>DIGITAL SIGNAGE</GradientText></>}
        backgroundImage="working.png"
      />

      <Working />
      <div className="pb-16 sm:pb-32 lg:pb-60"> </div>
      
      <TitleHome
        topText={<><GradientText>END-TO-END</GradientText> DIGITAL SIGNAGE</>}
        bottomText="SOLUTIONS"
        backgroundImage="support.png"
      />

      <SupportCarousel />
      

            
      <TitleHome
        topText={<><GradientText>END-TO-END</GradientText> DIGITAL SIGNAGE</>}
        bottomText="SOLUTIONS"
        backgroundImage="product.png"
      />
      
      <ProductsSection />
      <div className="pb-16 sm:pb-32 lg:pb-60"> </div>
      <GradientLine width={"90%"} padding="pb-[1px]" />

    </>
  );
}
