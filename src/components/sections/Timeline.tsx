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
        <div className="relative pt-20 pb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[5px] bg-[#363986] transform -translate-x-1/2"></div>
          
          <div className="space-y-20">
            {items.map((item, index) => (
              <div key={index} className="relative flex justify-center">
                {/* Content Container */}
                <div className={`flex w-full max-w-[1600px] ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="flex-1 max-w-2xl">
                    <div className="text-left">
                      <div className="relative">
                        <h3 className="text-[24px] font-bold mb-4">
                          {item.title}
                        </h3>
                        
                        {/* Timeline center elements at title level */}
                        <div className={`absolute top-2 flex flex-col items-center z-10 ${
                          index % 2 === 0 ? 'left-full ml-8' : 'right-full mr-8'
                        }`}>
                          <div className="w-24 h-[5px] bg-[#363986]"></div>
                        </div>
                      </div>
                      
                      <p className="text-[20px] text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Image */}
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-[600px] h-[337px] object-cover rounded-lg"
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