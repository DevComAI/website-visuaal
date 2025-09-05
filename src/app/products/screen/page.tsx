import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import ScreenContent from '@/components/ui/ScreenContent'
import ProductService from '@/components/ui/ProductService'

export const metadata: Metadata = {
  title: 'Écrans Interactifs | Visuaal',
  description: 'Solutions d&apos;écrans tactiles interactifs pour engager vos clients. Multi-touch, haute résolution et applications personnalisées.',
  keywords: ['écrans interactifs', 'écrans tactiles', 'multi-touch', 'interface tactile', 'digital signage'],
}

const ScreenPage = () => {
  const services = [
    {
      title: "INDOOR LED SCREENS",
      image: "/img/screen/productservice-1.png",
      description: "Ideal for meeting rooms, reception areas, shops, or trade shows.",
      bulletPoints: [
        "High resolution for a clear image even up close",
        "Optimized brightness for maximum comfort indoors",
        "Available in various sizes and formats",
        "Perfect for digital signage, presentations, or events"
      ]
    },
    {
      title: "OUTDOOR LED SCREENS",
      image: "/img/screen/productservice-2.png", 
      description: "Designed to withstand weather conditions (rain, sun, wind).",
      bulletPoints: [
        "Powerful brightness, visible even in direct sunlight",
        "Robust and waterproof casing",
        "Long-lasting and energy-efficient",
        "Ideal for advertising displays, signage, or urban communication"
      ]
    },
    {
      title: "LED SCREENS FOR SHOP WINDOWS & ADVERTISING",
      image: "/img/screen/productservice-3.png",
      description: "Attract your customers' attention with dynamic visuals.",
      bulletPoints: [
        "Ultra-thin design to capture attention through shop windows",
        "Quick and easy installation becoming to the size of your storefront",
        "Perfect for stores, restaurants, and real estate agencies",
        "Maximizes the visual impact with traditional advertising supports"
      ]
    },
    {
      title: "LED WALLS FOR EVENTS & SHOWS ANY SIZE POSSIBLE",
      image: "/img/screen/productservice-4.png",
      description: "Showcase your visual contents at your events.",
      bulletPoints: [
        "Modular panels for custom sizes and creative shapes",
        "Immersive high-definition image",
        "Temporary or permanent installation",
        "Ideal for concerts, exhibitions, trade shows, and conferences"
      ]
    }
  ];

  return (
    <div className="min-h-screen">

      <Hero 
        backgroundImage="/img/screen/hero.png"
        title="SCREEN LED"
        subtitle="LED solutions designed for enhance your brand image with high-visibility."
        showScrollIndicator={false}
      />
<TitlePage

title="WHAT IS les screens for ?"
paragraphs={[
  "LED displays are a powerful visual medium that brings content to life, bright, vibrant, and impossible to ignore. Whether used indoors or outdoors, for retail, events, or corporate spaces, LED screens offer unmatched flexibility in size, shape, and impact.",
  "From immersive brand storytelling to high-visibility messaging, they deliver stunning visuals in any environment.",
  "A cutting-edge solution to elevate your communication and captivate your audience."
]}
backgroundImage="SCREEN.png"
/>


<section className="py-20 relative">
        <div className="container">
          <div className="flex justify-center relative">
          <div 
            className="p-1 rounded-3xl relative z-10"
            style={{ 
              background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)',
              width: '1441.43px', 
              height: '709.46px' 
            }}
          >
          <h2 className="text-[40px] font-medium text-white text-center uppercase absolute top-40 left-0 right-0 z-20">LED SCREEN BY VISUAAL</h2>
            <div className="w-full h-full rounded-3xl overflow-hidden" style={{ backgroundColor: '#211824' }}>
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js"></script>
              <spline-viewer url="https://prod.spline.design/qDj32pWs0uTcm5kM/scene.splinecode" style={{ width: '100%', height: '100%' }}></spline-viewer>
            </div>
          </div>
          </div>
        </div> 
      </section>
      <div className="pb-60"> </div>

      <ScreenContent 
        title="EXCEPTIONAL IMAGE QUALITY"
        paragraph="Our LED screens offer high-definition resolution and vibrant colors that immediately capture attention. Thanks to optimal brightness and advanced technology, your content is visible and impactful, day or night."
        imageUrl="/img/screen/screencontent-1.png"
      />

<ScreenContent 
        title="Quick and professional installation"
        paragraph="Our team of specialized technicians provides fast and secure turnkey installation. We take care of everything: site assessment, selection of suitable equipment, assembly, and commissioning, so that you can start using your screens right away."
        imageUrl="/img/screen/screencontent-2.png"
      />

<ScreenContent 
        title="Customized solutions tailored to your project"
        paragraph="Every project is unique. Whether you are a shop, a community, a theater, or a business, we design customized solutions that meet your specific needs: size, location, indoor or outdoor use."
        imageUrl="/img/screen/screencontent-3.png"
      />

      <ProductService 
        title="OUR PRODUCTS & SERVICES"
        paragraph="We offer a wide range of LED screens suitable for all needs: visual communication, advertising, events, professional displays, or digital decoration. Whether for indoor or outdoor use, for a store, a business, a community, or a show, we have the ideal solution. Each LED screen is selected and installed according to your technical constraints and objectives to ensure maximum visibility and a strong visual impact."
        services={services}
      />

      
    </div>
  )
}

export default ScreenPage