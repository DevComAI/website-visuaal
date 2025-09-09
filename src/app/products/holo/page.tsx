import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import GradientText from '@/components/ui/GradientText'
import SupportCarousel from '@/components/sections/SupportCarousel'
import HoloFeatures from '@/components/sections/HoloFeatures'
import GradientButton from '@/components/ui/GradientButton'

export const metadata: Metadata = {
  title: 'Hologrammes | Visuaal',
  description: 'Technologie holographique révolutionnaire pour des présentations spectaculaires. Projections 3D et effets visuels saisissants.',
  keywords: ['hologrammes', 'projection 3D', 'technologie holographique', 'effets visuels', 'présentation spectaculaire'],
}

const HoloPage = () => {

  return (
    <div className="min-h-screen">

      <Hero 
        backgroundImage="/img/humanbox/hero.png"
        title="HUMAN BOX"
        subtitle={<>An <GradientText>immersive cabin</GradientText> creating a <GradientText>3D holographic</GradientText> effect</>}
        showScrollIndicator={false}
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




      <section className="py-20 relative">
        <div className="container">
          <div className="flex justify-center relative">
          <div 
            className="p-1 rounded-3xl relative z-10 w-full h-[1200px]"

          >
              {/* PRE-RECORDED section - top right */}
              <div className="absolute top-10 right-8 z-30 pointer-events-none" >
                <h3 className="text-[40px] mb-4">
                  
                  <><GradientText>PRE-RECORDED</GradientText> </>
                </h3>


                <p className="text-white text-[32px] font-regular leading-tight w-[730px] h-[370px] p-6 rounded-lg backdrop-blur-[20px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                  Pre-recorded content lets you control your holographic message with precision. 
                  Record in our studio or on location, with autocue support for smooth delivery. 
                  Showcase people or products (3D or physical), and enhance the experience with text, 
                  QR codes, or visuals, ideal for events and advertising.
                </p>
              </div>

              {/* 4K LIVE section - bottom left */}
              <div className="absolute bottom-10 left-8 z-30 pointer-events-none">
                <h3 className="text-[40px] mb-4" >
                                   <><GradientText> 4K LIVE</GradientText> </>

                </h3>
                <p className="text-white text-[32px] font-regular leading-tight w-[730px] h-[370px] p-6 rounded-lg backdrop-blur-[20px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                With our 4K live connection, stream directly to a local Holobox in real time, 
                  all you need is a stable internet connection. Recordings can be done in our studio or on-site.
                  <br /><br />
                  Perfect for live performances, digital hosts, education, telehealth, keynote talks, and more.
                </p>
              </div>
            <div className="w-full h-full rounded-3xl overflow-hidden" style={{ backgroundColor: '#211824' }}>
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js"></script>
              <spline-viewer url="https://prod.spline.design/63D-bD0D4e6xHPvT/scene.splinecode" style={{ width: '100%', height: '100%' }}></spline-viewer>
            </div>
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
      <div className="pb-60"> </div>

   
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
          <div className="flex items-center gap-12">
            {/* Image à gauche - 1/3 */}
            <div className="w-1/2">
              <div className="flex justify-center">
                <Image 
                  src="/img/humanbox/humanbox1.png" 
                  alt="Human Box device" 
                  width={300}
                  height={400}
                  className="w-full max-w-[400px] h-auto mix-blend-screen mt-20"
                />
              </div>
            </div>
            
            {/* Contenu à droite - 2/3 */}
            <div className="w-1/2 -ml-40">
              {/* Titre */}
              <h2 className="text-white text-[32px] font-semibold mb-20">
                We have several other box sizes available :
              </h2>
              
              {/* Grille des tailles - 2 lignes de 5 */}
              <div className="space-y-1 mb-8">
                {/* Première ligne */}
                <div className="flex ml-14">
                  {['21.5"', '32"', '43"', '49"', '55"'].map((size, index) => (
                    <div 
                      key={index}
                      className="w-[180px] -ml-6 h-[80px] bg-no-repeat bg-center bg-contain flex items-center justify-center"
                      style={{ backgroundImage: "url('/forme/para3.png')" }}
                    >
                      <div className="text-[30px] font-semibold relative -ml-2 z-10 px-2 text-center leading-tight">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Deuxième ligne */}
                <div className="flex ">
                  {['65"', '75"', '86"', '98"', '+'].map((size, index) => (
                    <div 
                      key={index}
                      className="w-[180px] -ml-6 h-[80px] bg-no-repeat bg-center bg-contain flex items-center justify-center"
                      style={{ backgroundImage: "url('/forme/para3.png')" }}
                    >
                      <div className="text-[30px] font-semibold relative -ml-2 z-10 px-2 text-center leading-tight">
                        {size}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Phrase descriptive */}
              <p className="text-white text-[32px]  mt-20">
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
      <div className="pb-60"> </div>

    </div>
  )
}

export default HoloPage