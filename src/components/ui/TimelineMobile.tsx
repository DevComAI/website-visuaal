'use client'

import Image from 'next/image'
import AnimatedBorder from '@/components/ui/AnimatedBorder'

interface TimelineItem {
  title: string
  description: string
  image: string
}

interface TimelineMobileProps {
  items: TimelineItem[]
}

const TimelineMobile = ({ items }: TimelineMobileProps) => {
  return (
    <div className="py-10 px-4">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#363986]"></div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-4 h-4 bg-[#363986] rounded-full transform -translate-x-1/2 border-4 border-[#211824]"></div>

              {/* Content */}
              <div className="bg-[#2A1F2E]/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Image */}
                <AnimatedBorder className="inline-block w-full" borderRadius="0.5rem">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={169}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </AnimatedBorder>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimelineMobile