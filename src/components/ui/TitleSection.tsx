interface TitleHomeProps {
  topText?: string | React.ReactNode;
  bottomText: string | React.ReactNode;
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
    <section className={`relative py-12 sm:py-16 lg:py-20 ${className}`}>
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

      <div className="container relative z-10 flex items-end min-h-[120px] sm:min-h-[150px] lg:min-h-[250px] px-4 sm:px-6 lg:px-8">
        <div className="text-left pb-4 sm:pb-6 lg:pb-8 ml-0 sm:ml-6 lg:ml-18 text-base sm:text-lg md:text-2xl lg:text-4xl">
          {topText && (
            <div className="font-medium text-white leading-tight">
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