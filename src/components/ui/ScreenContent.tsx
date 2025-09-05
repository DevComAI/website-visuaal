interface ScreenContentProps {
  title: string;
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
    <section className={`pb-20  flex justify-center ${className}`}>
      <div className="w-[1650px] px-4">
        <div className="text-left mb-18">
          <h2 className="text-[40px] font-medium text-white mb-4 uppercase">
            {title}
          </h2>
          <p className="text-[32px] text-white font-normal leading-relaxed max-w-6xl">
            {paragraph}
          </p>
        </div>
        
        <div className="flex justify-start4">
          <div 
            className="p-1 "
            style={{ 
  
              width: 'fit-content'
            }}
          >
            <img 
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover"
                style={{ maxWidth: '851px' }}
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenContent;