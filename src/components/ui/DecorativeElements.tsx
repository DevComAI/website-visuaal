'use client';

import { useEffect, useState } from 'react';

export default function DecorativeElements() {
  const [elements, setElements] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: React.ReactElement[] = [];
      const baseSpacing = 800; // base pixels between elements
      const documentHeight = document.documentElement.scrollHeight;
      let currentPosition = 0;

      while (currentPosition < documentHeight + 500) {
        const isLeft = newElements.length % 2 === 0;
        
        // Add random variation of ±20% to spacing
        const variation = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
        const spacing = baseSpacing * variation;
        
        newElements.push(
          <div
            key={newElements.length}
            className={`absolute ${isLeft ? '-left-120' : '-right-120'} w-[1150px] h-[560px] rounded-full blur-3xl`}
            style={{
              top: `${currentPosition}px`,
              background: isLeft 
                ? 'radial-gradient(circle at center, rgba(53, 168, 207, 0.44) 0%, transparent 40%)'
                : 'radial-gradient(circle at center, rgba(128, 82, 164, 0.44) 0%, transparent 40%)'
            }}
          />
        );
        
        currentPosition += spacing;
      }
      
      setElements(newElements);
    };

    generateElements();

    // Recalculate on resize or when content changes
    const observer = new ResizeObserver(generateElements);
    observer.observe(document.body);

    window.addEventListener('resize', generateElements);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', generateElements);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full -z-10 overflow-hidden pointer-events-none" style={{ height: '100%' }}>
      {elements}
    </div>
  );
}