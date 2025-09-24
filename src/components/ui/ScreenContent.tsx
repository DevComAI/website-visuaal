import Image from 'next/image'
import AnimatedBorder from '@/components/ui/AnimatedBorder'

interface ScreenContentProps {
  title: string | React.ReactNode;
  paragraph: string;
  imageUrl: string;
  className?: string;
}

const ScreenContent = ({ 
  title, 
  paragraph, 
  imageUrl,
  className = "" 
}: ScreenContentProps) => {
  return (
    <section className={`pb-10 md:pb-20 flex justify-center ${className}`}>
      <div className="w-full lg:w-[1650px] px-4 md:px-6 lg:px-4">
        <div className="text-left mb-8 md:mb-18">
          <h2 className="text-xl md:text-3xl lg:text-[40px] font-medium text-white mb-4 uppercase">
            {title}
          </h2>
          <p className="text-base md:text-xl lg:text-[32px] text-white font-normal leading-relaxed max-w-6xl">
            {paragraph}
          </p>
        </div>
        
        <div className="flex justify-start">
          <AnimatedBorder className="w-fit" borderRadius="0.5rem">
            <Image
                src={imageUrl}
                alt={typeof title === 'string' ? title : 'Screen content'}
                width={851}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxWidth: '851px' }}
              />
          </AnimatedBorder>
        </div>
      </div>
    </section>
  );
};

export default ScreenContent;