import { Metadata } from 'next'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import GradientText from '@/components/ui/GradientText'
import SupportCarousel from '@/components/sections/SupportCarousel'
import HoloFeatures from '@/components/sections/HoloFeatures'
import GradientButton from '@/components/ui/GradientButton'
import OptimizedSplineViewer from '@/components/ui/OptimizedSplineViewer'
import { humanBoxProductSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Human Box - Holographic Displays',
  description: 'Holographic boxes offering a spectacular way to showcase your content in 3D. Available in three sizes, from compact units to life-size formats.',
  keywords: ['holographic display', 'hologram', '3D hologram', 'human box', 'holographic technology', 'visual display'],
  openGraph: {
    title: 'Human Box - Holographic Displays | Visuaal',
    description: 'Holographic boxes offering a spectacular way to showcase your content in 3D. No headset or glasses required.',
    images: [
      {
        url: '/img/humanbox/hero.png',
        width: 1200,
        height: 630,
        alt: 'Human Box - Holographic Display Technology',
      },
    ],
  },
}

const HoloPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      humanBoxProductSchema,
      breadcrumbSchema([
        { name: 'Home', url: 'https://visuaal.ai' },
        { name: 'Products', url: 'https://visuaal.ai/products/holo' },
        { name: 'Human Box', url: 'https://visuaal.ai/products/holo' }
      ])
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        backgroundImage="/img/humanbox/hero.png"
        title="HUMAN BOX"
        subtitle={<>An <GradientText>immersive cabin</GradientText> creating a <GradientText>3D holographic</GradientText> effect</>}
        showScrollIndicator={false}
        backgroundPosition="65% center"
      />



          <TitlePage
          title={<>WHAT IS <GradientText>hologram</GradientText> ?</>}

          paragraphs={[
            "Holographic boxes offer a spectacular way to showcase your content in 3D, floating in space, no headset or glasses required. Available in three size, from compact units for counters and displays, to life-size formats for full-scale experiences, these devices instantly grab attention.",
            "Perfect for retail, events, or product launches, they combine cutting-edge technology with immersive storytelling.",
            "A futuristic — yet fully real — solution to leave a lasting impression."
          ]}
          backgroundImage="HOLO.png"
          />




      <section className="py-10 md:py-20 relative hidden md:block">
        <div className="container">
          <div className="flex justify-center relative">
          <div
            className="p-1 rounded-3xl relative z-10 w-full h-[600px] md:h-[800px] lg:h-[1200px]"

          >
              {/* PRE-RECORDED section - top right */}
              <div className="absolute top-5 md:top-10 right-4 md:right-8 z-30 pointer-events-none" >
                <h3 className="text-xl md:text-3xl lg:text-[40px] mb-2 md:mb-4">

                  <><GradientText>PRE-RECORDED</GradientText> </>
                </h3>


                <p className="text-white text-sm md:text-xl lg:text-[32px] font-regular leading-tight w-[280px] md:w-[500px] lg:w-[730px] h-auto md:h-[280px] lg:h-[370px] p-3 md:p-4 lg:p-6 rounded-lg backdrop-blur-[20px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <span className="hidden md:inline">Pre-recorded content lets you control your holographic message with precision.
                  Record in our studio or on location, with autocue support for smooth delivery.
                  Showcase people or products (3D or physical), and enhance the experience with text,
                  QR codes, or visuals, ideal for events and advertising.</span>
                  <span className="md:hidden">Pre-recorded content for precise holographic messages. Studio or on-location recording with autocue support.</span>
                </p>
              </div>

              {/* 4K LIVE section - bottom left */}
              <div className="absolute bottom-5 md:bottom-10 left-4 md:left-8 z-30 pointer-events-none">
                <h3 className="text-xl md:text-3xl lg:text-[40px] mb-2 md:mb-4" >
                                   <><GradientText> 4K LIVE</GradientText> </>

                </h3>
                <p className="text-white text-sm md:text-xl lg:text-[32px] font-regular leading-tight w-[280px] md:w-[500px] lg:w-[730px] h-auto md:h-[280px] lg:h-[370px] p-3 md:p-4 lg:p-6 rounded-lg backdrop-blur-[20px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  <span className="hidden md:inline">With our 4K live connection, stream directly to a local Holobox in real time,
                  all you need is a stable internet connection. Recordings can be done in our studio or on-site.
                  <br /><br />
                  Perfect for live performances, digital hosts, education, telehealth, keynote talks, and more.</span>
                  <span className="md:hidden">4K live streaming to Holobox. Perfect for performances, education, telehealth, and more.</span>
                </p>
              </div>
            <div className="w-full h-full rounded-3xl overflow-hidden relative z-20  " >
              <OptimizedSplineViewer
                scene="https://prod.spline.design/63D-bD0D4e6xHPvT/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
                interactive={true}
                priority={false}
                loadingDelay={200}
                placeholderVariant="gradient"
              />
            </div>
          </div>
          </div>
        </div> 
      </section>

      {/* Mobile Version */}
      <section className="py-10 block md:hidden">
        <div className="container px-4">
          <div className="space-y-8">
            {/* PRE-RECORDED Section */}
            <div className="text-center">
              <h3 className="text-2xl mb-4">
                <GradientText>PRE-RECORDED</GradientText>
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Pre-recorded content lets you control your holographic message with precision.
                Record in our studio or on location, with autocue support for smooth delivery.
                Showcase people or products (3D or physical), and enhance the experience with text,
                QR codes, or visuals, ideal for events and advertising.
              </p>
            </div>

           

            {/* 4K LIVE Section */}
            <div className="text-center">
              <h3 className="text-2xl mb-4">
                <GradientText>4K LIVE</GradientText>
              </h3>
              <p className="text-white text-sm leading-relaxed">
                With our 4K live connection, stream directly to a local Holobox in real time,
                all you need is a stable internet connection. Recordings can be done in our studio or on-site.
                <br /><br />
                Perfect for live performances, digital hosts, education, telehealth, keynote talks, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HoloFeatures
        title={<><GradientText>Human Box</GradientText></>}
        description={`From real-time streaming to live recorded content, the Holobox delivers versatile performance with seamless WiFi and Bluetooth connectivity. Whether it's showcasing products, welcoming guests with a holographic host, enabling remote consultations, delivering lectures, or acting as a dynamic display, 
          the Holobox adapts to every use case.

Easily manage and customize your content — our technology is designed to meet your needs with efficiency and impact.`}
        mainImage="/img/humanbox/humanbox1.png"
        features={[
          {
            icon: '86"',
            title: 'Large Display',
            description: 'Transparent LCD screen for life size and 3D holographic images.'
          },
          {
            icon: 'ANTI-GLARE GLASS',
            title: 'High Quality Display',
            description: 'High-resolution image brightness in daylight or low-light conditions.'
          },
          {
            icon: 'TOUCH SCREEN',
            title: 'Interactive Control',
            description: 'Offers 20-point IR Control or optional hand-held remote control.'
          }
        ]}
        reverse={true}
      />
      <SupportCarousel 
        images={[
          '/img/humanbox/carousel1/project1.png',
          '/img/humanbox/carousel1/project2.png',
          '/img/humanbox/carousel1/project3.png'
        ]}
      />
      <div className="pb-20 md:pb-40 lg:pb-60"> </div>

   
      <HoloFeatures
        title={<><GradientText>Human Box</GradientText></>}
        description={`The Holobox Mini is our compact tabletop model, ideal for product placement, feature highlights,
        or adding a cutting-edge tech touch.
         Affordable and versatile, it's a smart solution for businesses of all sizes looking to leverage high-quality holographic displays.

         Its vivid holograms enhance visibility, engagement, and memorability, offering a new level of interactivity.`}
        mainImage="/img/humanbox/humanbox2.png"
        features={[
          {
            icon: '21.5"',
            title: 'Compact Size',
            description: 'Enjoy stunning holograms, even in compact spaces. Making it perfect for smaller spaces.'
          },
          {
            icon: 'SMALL',
            title: 'Perfect Size',
            description: 'Perfect for small objects, this technology brings the enchantment of holography to a new level.'
          },
          {
            icon: '31LBS',
            title: 'Lightweight',
            description: 'Enjoy the futuristic charm in any setting with this easily transportable and interconnected holographic solution.'
          }
        ]}
        className="sm:pt-60"
      />

<SupportCarousel 
        images={[
          '/img/humanbox/carousel2/project1.png',
          '/img/humanbox/carousel2/project2.png',
          '/img/humanbox/carousel2/project3.png'
        ]}
      />
      <div className="pb-40"> </div>













      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image à gauche - 1/3 */}
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center">
                <Image
                  src="/img/humanbox/humanbox1.png"
                  alt="Human Box 86-inch holographic display cabinet showing transparent LCD screen for life-size 3D holographic images"
                  width={300}
                  height={400}
                  className="w-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px] h-auto mix-blend-screen mt-10 md:mt-16 lg:mt-20"
                />
              </div>
            </div>

            {/* Contenu à droite - 2/3 */}
            <div className="w-full lg:w-1/2 lg:-ml-40">
              {/* Titre */}
              <h2 className="text-white text-lg md:text-2xl lg:text-[32px] font-semibold mb-8 md:mb-12 lg:mb-20 text-center lg:text-left">
                We have several other box sizes available :
              </h2>
              
              {/* Grille des tailles - 2 lignes de 5 */}
              <div className="space-y-1 mb-8">
                {/* Première ligne */}
                <div className="flex justify-center lg:justify-start lg:ml-14">
                  {['21.5"', '32"', '43"', '49"', '55"'].map((size, index) => (
                    <div
                      key={index}
                      className="w-[70px] md:w-[120px] lg:w-[180px] -ml-2 md:-ml-4 lg:-ml-6 h-[50px] md:h-[65px] lg:h-[80px] bg-no-repeat bg-center bg-contain flex items-center justify-center"
                      style={{ backgroundImage: "url('/forme/para3.png')" }}
                    >
                      <div className="text-xs md:text-xl lg:text-[30px] font-semibold relative -ml-1 lg:-ml-2 z-10 px-1 lg:px-2 text-center leading-tight">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Deuxième ligne */}
                <div className="flex justify-center lg:justify-start">
                  {['65"', '75"', '86"', '98"', '+'].map((size, index) => (
                    <div
                      key={index}
                      className="w-[70px] md:w-[120px] lg:w-[180px] -ml-2 md:-ml-4 lg:-ml-6 h-[50px] md:h-[65px] lg:h-[80px] bg-no-repeat bg-center bg-contain flex items-center justify-center"
                      style={{ backgroundImage: "url('/forme/para3.png')" }}
                    >
                      <div className="text-xs md:text-xl lg:text-[30px] font-semibold relative -ml-1 lg:-ml-2 z-10 px-1 lg:px-2 text-center leading-tight">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phrase descriptive */}
              <p className="text-white text-base md:text-xl lg:text-[32px] mt-8 md:mt-12 lg:mt-20 text-center lg:text-left">
                Contact us for a quote for a custom size.
              </p>
              
             
            </div>
          </div>

         
        </div>
          {/* CTA Button */}
          <div className="flex justify-center">
              <GradientButton  
                href="/contact"
                text="I want this"
                className="w-[150px] h-[50px]"
              />
            </div>
      </section>
      <div className="pb-20 md:pb-40 lg:pb-60"> </div>

    </div>
  )
}

export default HoloPage