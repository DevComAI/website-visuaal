'use client'

import { Button } from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'

const AboutContent = () => {
  return (
    <section className="py-20  text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Our Missions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                OUR <GradientText>MISSIONS</GradientText>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                At VISUAAL, we bring LED screens to life! Our mission is to transform spaces into dynamic digital experiences, offering cutting-edge content, expert consulting, seamless installation, and smart monetisation strategies. From 3D and holographic storytelling to tailored solutions, we make digital signage more than just a screen—it's an immersive journey.
              </p>
            </div>

            {/* Our Goals */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                OUR <GradientText>GOALS</GradientText>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We transform digital experiences with impactful visuals and cutting-edge technology. Our goal is to help businesses harness LED solutions to boost engagement and drive revenue. 
                With end-to-end expertise, we make digital signage effortless—from concept to execution—delivering tailored, high-performance solutions that turn every project into a powerful communication tool.
              </p>
            </div>

            {/* Why Us */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                WHY <GradientText>US</GradientText>
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Because we don't just sell screens—we create unforgettable experiences! With expertise at every step, next-gen content, and a commitment to innovation, we're your partners in transformative digital signage success. Plus, we make monetisation work for you. More impact, more engagement, more ROI. Let me know if you'd like any tweaks!
              </p>
            </div>

            {/* Get Started Button */}
            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#1a1625]"
              >
                Get started
              </Button>
            </div>
          </div>

          {/* Spline */}
          <div className="relative h-96 lg:h-[500px] mix-blend-lighten">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js"></script>
            <spline-viewer 
              url="https://prod.spline.design/b5QNjdMLUJW-blFk/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            ></spline-viewer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent