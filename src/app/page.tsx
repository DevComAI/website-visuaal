import { headers } from 'next/headers'
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
import {
  MobileGradientText,
  MobileGradientButton,
  MobileTitleHome,
  WorkingCarousel
} from '@/components/pages/HomePageClient'
import ScrollIndicator from '@/components/ui/ScrollIndicator'
import AnimatedLine from '@/components/ui/AnimatedLine'

export default async function Home() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ||
                   (headersList.get('sec-ch-ua-mobile') === '?1')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema,
      websiteSchema
    ]
  }

  const workingScenes = [
    {
      image: "/temp-opti-img/home-2.1.png",
      alt: "INFORM - Digital Signage Solutions",
      title: "INFORM – We guide you",
      description: "At VISUAAL, we help businesses harness the power of Digital Signage to enhance sales and brand visibility. Whether in retail stores, banks, or restaurants, we create impactful visual communication that resonates with music in popular clothing stores—that captivates audiences and drive engagement."
    },
    {
      image: "/temp-opti-img/home-3.1.png",
      alt: "SUPPORT - Digital Signage Consulting",
      title: "SUPPORT – We advise you",
      description: "Our experts work closely with brands to design and implement interactive Digital Signage solutions across transportation hubs, theaters, and high-traffic public spaces. By crafting compelling engaging content, we maximize advertising impact and boost revenue for multiple brands."
    },
    {
      image: "/temp-opti-img/home-4.1.png",
      alt: "MODERNIZE - Digital Experience Transformation",
      title: "MODERNIZE – We transform experiences",
      description: "From hospitality and healthcare to educational venues, our customized Digital Signage solutions elevate customer interactions. We craft immersive digital experiences that inform, entertain, and inspire—creating seamless and memorable experiences for every audience."
    }
  ];

  if (isMobile) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Mobile Hero Section */}
        <Hero
          backgroundVideo="/img/home/hero-home.mp4"
          title="VISUAAL"
          subtitle={<><MobileGradientText>Innovative visual solutions</MobileGradientText> to capture attention and <MobileGradientText>elevate your brand</MobileGradientText>.</>}
          description="At VISUAAL, we design tailor-made visual experiences that combine creativity, technology, and performance."
        />
<div className='my-20'>


        <LogoCarousel />
        </div>


        <MobileTitleHome
          topText={<><MobileGradientText>EXPERTS</MobileGradientText> IN IMMERSIVE </>}
          bottomText="EXPERIENCES AND DIGITAL TRANSFORMATION"
          backgroundImage="aboutus.png"
        />

        {/* Mobile AboutUs Section */}
        <section className="relative overflow-hidden pb-0 sm:py-8">
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

        <WorkingCarousel scenes={workingScenes} />

        <div className="pb-12"></div>
        
<ScrollIndicator/>
        <MobileTitleHome
          topText={<><MobileGradientText>END-TO-END</MobileGradientText> DIGITAL SIGNAGE SOLUTIONS</>}
          bottomText=""
          backgroundImage="support.png"
        />

        <SupportCarousel />

<ScrollIndicator/>
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

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10">
        <div className="flex justify-center">
          <AnimatedLine orientation="vertical" size={100} thickness={3} />
        </div>
      </div>

      <TitleHome
        topText={<><GradientText>EXPERTS</GradientText> IN IMMERSIVE EXPERIENCES</>}
        bottomText="AND DIGITAL TRANSFORMATION"
        backgroundImage="aboutus.png"
      />



      <AboutUs />
      <div className="pb-20 sm:pb-40 lg:pb-80"> </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10">
        <div className="flex justify-center">
          <AnimatedLine orientation="vertical" size={100} thickness={3} />
        </div>
      </div>

      <TitleHome
        topText="THE BENEFITS OF USING OUR"
        bottomText={<><GradientText>DIGITAL SIGNAGE</GradientText></>}
        backgroundImage="working.png"
      />

      <Working />
      <div className="pb-16 sm:pb-32 lg:pb-60"> </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10">
        <div className="flex justify-center">
          <AnimatedLine orientation="vertical" size={100} thickness={3} />
        </div>
      </div>


      <TitleHome
        topText={<><GradientText>END-TO-END</GradientText> DIGITAL SIGNAGE</>}
        bottomText="SOLUTIONS"
        backgroundImage="support.png"
      />

      <SupportCarousel />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 lg:pb-10">
        <div className="flex justify-center">
          <AnimatedLine orientation="vertical" size={100} thickness={3} />
        </div>
      </div>


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
