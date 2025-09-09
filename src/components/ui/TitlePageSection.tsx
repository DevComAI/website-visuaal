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
    <section className={`relative py-35 ${className}`}>
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 flex items-start justify-center px-4 pt-30">
          <div 
            className="w-full h-[260px] bg-no-repeat bg-center opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url('/img/${backgroundImage}')`,
              backgroundSize: 'contain',
 
            }}
          >
          </div>
        </div>
      )}
      
      <div className="container  relative z-10 flex flex-col items-center min-h-[150px] lg:min-h-[250px] text-center ">
        <h1 className=" text-[40px]  font-medium text-white leading-tight mb-12 pt-40 uppercase">
          {title}
        </h1>
        <div className="space-y-8 max-w-[1510px] pt-15">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[32px] text-white font-normal leading-relaxed pb-10">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TitlePage;