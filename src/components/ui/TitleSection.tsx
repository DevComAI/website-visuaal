interface TitleHomeProps {
  topText?: string;
  bottomText: string;
  backgroundImage?: string;
  className?: string;
}

const TitleHome = ({ 
  topText, 
  bottomText, 
  backgroundImage,
  className = "" 
}: TitleHomeProps) => {
  return (
    <section className={`relative py-20 ${className}`} style={{backgroundColor: '#2D2436'}}>
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-4">
          <div 
            className="w-full h-full bg-no-repeat bg-center opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url('/title/${backgroundImage}')`,
              backgroundSize: 'contain',
              maxWidth: '100%'
            }}
          >
          </div>
        </div>
      )}
      
      <div className="container relative z-10 flex items-end min-h-[150px] lg:min-h-[250px]">
        <div className="text-left pb-8 pl-4 lg:pl-8 text-lg md:text-2xl lg:text-4xl">
          {topText && (
            <div className=" font-medium text-white leading-tight">
              {topText}
            </div>
          )}
          <h2 className="font-medium text-white leading-tight">
            {bottomText}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TitleHome;