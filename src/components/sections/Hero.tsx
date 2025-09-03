import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/img/home/hero-home.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex items-start pt-62 pl-18 h-full">
          <div>
            <h1 className="font-semibold text-white mb-4 leading-none" style={{fontSize: '96px'}}>
              VISUAAL
            </h1>
            
            <h2 className="font-semibold text-white mb-6 leading-tight" style={{fontSize: '48px'}}>
              Innovative visual solutions to capture<br />
              attention and elevate your brand.
            </h2>
            
            <p className="text-white leading-tight max-w-2xl" style={{fontSize: '18px'}}>
              At VISUAAL, we design tailor-made visual experiences that combine<br />
              creativity, technology, and performance.
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
  )
}

export default Hero