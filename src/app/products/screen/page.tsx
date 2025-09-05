import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TitlePage from '@/components/ui/TitlePageSection'

export const metadata: Metadata = {
  title: 'Écrans Interactifs | Visuaal',
  description: 'Solutions d&apos;écrans tactiles interactifs pour engager vos clients. Multi-touch, haute résolution et applications personnalisées.',
  keywords: ['écrans interactifs', 'écrans tactiles', 'multi-touch', 'interface tactile', 'digital signage'],
}

const ScreenPage = () => {


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

      
    </div>
  )
}

export default ScreenPage