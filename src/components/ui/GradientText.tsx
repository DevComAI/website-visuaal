interface GradientTextProps {
  children: string;
  className?: string;
}

const GradientText = ({ children, className = "" }: GradientTextProps) => {
  return (
    <span 
      className={className}
      style={{ 
        background: 'linear-gradient(45deg, #473FB9, #4DA8D7, #9512B6)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent' 
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;