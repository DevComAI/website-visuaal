interface GradientLineProps {
  width?: string | number;
  padding?: string;
  className?: string;
}

const GradientLine = ({ width = "100%", padding = "py-4", className = "" }: GradientLineProps) => {
  const widthStyle = typeof width === 'number' ? `${width}px` : width;
  
  return (
    <div className={`relative ${padding} ${className}`}>
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ width: widthStyle }}
      ></div>
    </div>
  );
};

export default GradientLine;