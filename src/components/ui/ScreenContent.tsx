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
      <div className="w-full lg:w-[1650px] px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-xl md:text-3xl lg:text-[40px] font-medium text-white mb-4 md:mb-6 uppercase">
              {title}
            </h2>
            <p className="text-base md:text-xl lg:text-[32px] text-white font-normal leading-relaxed">
              {paragraph}
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <AnimatedBorder className="w-full" borderRadius="0.5rem">
              <Image
                  src={imageUrl}
                  alt={typeof title === 'string' ? title : 'Screen content'}
                  width={1200}
                  height={850}
                  className="w-full h-auto object-cover rounded-lg"
                />
            </AnimatedBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenContent;