import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import GradientText from '@/components/ui/GradientText'
import SupportCarousel from '@/components/sections/SupportCarousel'
import HoloFeatures from '@/components/sections/HoloFeatures'

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

title="WHAT IS hologram ?"
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
          <h2 className="text-[40px] font-medium text-white text-center uppercase absolute top-40 left-0 right-0 z-20">LED SCREEN BY <><GradientText>VISUAAL</GradientText> </></h2>


            <div className="w-full h-full rounded-3xl overflow-hidden" style={{ backgroundColor: '#211824' }}>
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js"></script>
              <spline-viewer url="https://prod.spline.design/63D-bD0D4e6xHPvT/scene.splinecode" style={{ width: '100%', height: '100%' }}></spline-viewer>
            </div>
          </div>
          </div>
        </div> 
      </section>

      <SupportCarousel 
        images={[
          '/img/humanbox/carousel1/project1.png',
          '/img/humanbox/carousel1/project2.png',
          '/img/humanbox/carousel1/project3.png'
        ]}
      />

      <SupportCarousel 
        images={[
          '/img/humanbox/carousel2/project1.png',
          '/img/humanbox/carousel2/project2.png',
          '/img/humanbox/carousel2/project3.png'
        ]}
      />

      <HoloFeatures
        title="Human Box"
        description="From real-time streaming to live recorded content, the Holobox delivers versatile performance with seamless WiFi and Bluetooth connectivity. Whether it's showcasing products, welcoming guests with a holographic host, enabling remote consultations, delivering lectures, or acting as a dynamic display, the Holobox adapts to every use case. Easily manage and customize your content — our technology is designed to meet your needs with efficiency and impact."
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

      <HoloFeatures
        title="Human Box"
        description="The Holobox Mini is our compact tabletop model, ideal for product placement, feature highlights, or adding a cutting-edge tech touch. Affordable and versatile, it's a smart solution for businesses of all sizes looking to leverage high-quality holographic displays. Its vivid holograms enhance visibility, engagement, and memorability, offering a new level of interactivity."
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

    </div>
  )
}

export default HoloPage