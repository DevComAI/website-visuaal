import { ReactNode } from 'react'

interface TitlePageProps {
  title: string | ReactNode;
  paragraphs: string[];
  backgroundImage?: string;
  className?: string;
}

const TitlePage = ({ 
  title, 
  paragraphs, 
  backgroundImage,
  className = "" 
}: TitlePageProps) => {
  return (
    <section className={`relative py-16 lg:py-20 xl:py-28 ${className}`}>
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 flex items-start justify-center px-4 pt-12 lg:pt-20">
          <div
            className="w-full h-[150px] sm:h-[200px] lg:h-[260px] bg-no-repeat bg-center opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url('/img/${backgroundImage}')`,
              backgroundSize: 'contain',

            }}
          >
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center min-h-[150px] lg:min-h-[250px] text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight mb-8 lg:mb-12 pt-20 sm:pt-28 lg:pt-40 uppercase">
          {title}
        </h1>
        <div className="space-y-6 lg:space-y-8 max-w-full lg:max-w-6xl xl:max-w-7xl pt-6 lg:pt-12">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-normal leading-relaxed pb-4 lg:pb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TitlePage;