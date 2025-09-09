import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'
import ScreenContent from '@/components/ui/ScreenContent'
import ProductService from '@/components/ui/ProductService'
import GradientButton from '@/components/ui/GradientButton'
import GradientText from '@/components/ui/GradientText'

export const metadata: Metadata = {
  title: 'Écrans Interactifs | Visuaal',
  description: 'Solutions d&apos;écrans tactiles interactifs pour engager vos clients. Multi-touch, haute résolution et applications personnalisées.',
  keywords: ['écrans interactifs', 'écrans tactiles', 'multi-touch', 'interface tactile', 'digital signage'],
}

const ScreenPage = () => {
  const services = [
    {
      title: <>INDOOR LED <GradientText>SCREENS</GradientText></>,
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
      title: <><GradientText>OUTDOOR</GradientText> LED SCREENS</>,

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
      title: <>LED SCREENS FOR <GradientText>SHOP WINDOWS</GradientText> & <GradientText>ADVERTISING</GradientText></>,

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
      title: <>LED WALLS FOR <GradientText>EVENTS</GradientText> & <GradientText>SHOWS</GradientText> ANY SIZE POSSIBLE</>,

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
        subtitle={<>LED <GradientText>solutions</GradientText> designed for <GradientText>enhance</GradientText> your brand image with <GradientText>high-visibility</GradientText>.</>}
        showScrollIndicator={false}
      />
<TitlePage

title={<>What are <GradientText>led screens</GradientText> for ?</>}

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
          <h2 className="text-[40px] font-medium text-white text-center uppercase absolute top-40 left-0 right-0 z-20">LED SCREEN BY <><GradientText>VISUAAL</GradientText> </></h2>


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
        title={<><GradientText>EXCEPTIONAL IMAGE QUALITY</GradientText> </>}
        paragraph="Our LED screens offer high-definition resolution and vibrant colors that immediately capture attention. Thanks to optimal brightness and advanced technology, your content is visible and impactful, day or night."
        imageUrl="/img/screen/screencontent-1.png"
      />

<ScreenContent 
        title={<><GradientText>Quick and professional installation</GradientText> </>}
        paragraph="Our team of specialized technicians provides fast and secure turnkey installation. We take care of everything: site assessment, selection of suitable equipment, assembly, and commissioning, so that you can start using your screens right away."
        imageUrl="/img/screen/screencontent-2.png"
      />

<ScreenContent 
        title={<><GradientText>Customized solutions tailored to your project</GradientText> </>}
        paragraph="Every project is unique. Whether you are a shop, a community, a theater, or a business, we design customized solutions that meet your specific needs: size, location, indoor or outdoor use."
        imageUrl="/img/screen/screencontent-3.png"
      />


<div className="pb-60"> </div>


      <ProductService 
        title={<>OUR <GradientText>PRODUCTS</GradientText> & <GradientText>SERVICES</GradientText></>}
        paragraphs={[
          "We offer a wide range of LED screens suitable for all needs: visual communication, advertising, events, professional displays, or digital decoration.",
          "Whether for indoor or outdoor use, for a store, a business, a community, or a show, we have the ideal solution.",
          "Each LED screen is selected and installed according to your technical constraints and objectives to ensure maximum visibility and a strong visual impact."
        ]}
        services={services}
      />

      {/* Custom LED Screens Section */}
      <section className="py-20 flex justify-center">
        <div className=" px-4">
          <div className="text-left max-w-[1500px] mx-auto">
            {/* Title */}
            <h2 className="text-[40px] font-medium text-white mb-12 uppercase text-center">
              <GradientText>CUSTOM</GradientText> LED SCREENS
            </h2>

            {/* Main Description */}
            <p className="text-[32px] text-white font-medium leading-relaxed mb-12">
              Because every project is unique, we design customized LED solutions that perfectly suit your needs. Whether you want a giant screen for a shopping mall, an LED column for a showroom, or original shapes for an architectural project, we bring your ideas to life.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-12 font-regular ml-8">
              <li className="text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                100% customizable dimensions and formats
              </li>
              <li className="text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Special designs available (curved walls, columns, transparent screens, etc.)
              </li>
              <li className="text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Seamless integration into your indoor or outdoor spaces
              </li>
              <li className="text-[32px] text-white leading-relaxed flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Comprehensive support: design, manufacturing, installation, and commissioning
              </li>
            </ul>

            {/* Bottom Description */}
            <p className="text-[32px] font-medium text-white leading-relaxed mb-16">
              These custom LED screens are the ideal solution to stand out and offer your audience an unforgettable visual experience.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <GradientButton 
                href="/contact"
                text="I want this"
                className="w-[150px] h-[50px]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="pb-60"> </div>
      
    </div>
  )
}

export default ScreenPage