'use client'

import { useEffect, useState } from 'react'
import GradientText from '@/components/ui/GradientText'

interface TimelineItem {
  title: string
  description: string
  image: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline-section')
      if (!timelineSection) return

      const rect = timelineSection.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Simplified smooth progress calculation
      let progress = 0
      
      // Start animation when section top reaches bottom of viewport
      // End animation when section bottom reaches top of viewport
      const startPoint = windowHeight
      const endPoint = -rect.height
      const totalDistance = startPoint - endPoint
      const currentDistance = rect.top - endPoint
      
      progress = 1 - (currentDistance / totalDistance)
      progress = Math.max(0, Math.min(1, progress))
      
      setScrollProgress(progress)
      
      // Calculate active index based on progress
      const itemIndex = Math.floor(progress * items.length)
      setActiveIndex(Math.min(itemIndex, items.length - 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items.length])

  return (
    <section id="timeline-section" className="py-20 bg-[#1a1625] text-white">
      <div className="container mx-auto px-4">
        <div className="relative pt-20 pb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[5px] bg-[#363986] transform -translate-x-1/2"></div>
          
          {/* Moving glow orb */}
          <div 
            className="absolute left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-3 z-20"
            style={{
              top: `${scrollProgress * 100}%`,
              background: 'radial-gradient(circle, rgba(54,57,134,1) 0%, rgba(54,57,134,0.8) 30%, rgba(54,57,134,0.4) 60%, transparent 100%)',
              boxShadow: '0 0 30px rgba(54,57,134,1), 0 0 60px rgba(54,57,134,0.6), 0 0 90px rgba(54,57,134,0.3)',
              borderRadius: '50%',
              filter: 'blur(1px)',
              willChange: 'top'
            }}
          ></div>
          
          <div className="space-y-20">
            {items.map((item, index) => (
              <div key={index} className="relative flex justify-center">
                {/* Content Container */}
                <div className={`flex w-full max-w-6xl ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="flex-1 max-w-md">
                    <div className="text-left">
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-4">
                          {item.title}
                        </h3>
                        
                        {/* Timeline center elements at title level */}
                        <div className={`absolute top-2 flex flex-col items-center z-10 ${
                          index % 2 === 0 ? 'left-full ml-8' : 'right-full mr-8'
                        }`}>
                          <div className="w-24 h-[5px] bg-[#363986]"></div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Image */}
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty space for alternate side */}
                  <div className="flex-1 max-w-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline