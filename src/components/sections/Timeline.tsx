'use client'

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
  return (
    <section className="py-20 bg-[#1a1625] text-white">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400 transform -translate-x-1/2"></div>
          
          <div className="space-y-20">
            {items.map((item, index) => (
              <div key={index} className="relative flex items-center justify-center">
                {/* Content Container */}
                <div className={`flex items-center gap-8 w-full max-w-6xl ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="flex-1 max-w-md">
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-2xl font-bold mb-4 relative">
                        {item.title}
                        {/* Horizontal line from timeline to title */}
                        <div className={`absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 ${
                          index % 2 === 0 ? 'right-full mr-2' : 'left-full ml-2'
                        }`}></div>
                      </h3>
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
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full z-10 flex-shrink-0"></div>
                  
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