'use client';

import { useEffect, useState } from 'react';

export default function DecorativeElements() {
  const [elements, setElements] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements: React.ReactElement[] = [];

      // Responsive values based on screen width
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 640;
      const isTablet = screenWidth >= 640 && screenWidth < 1024;

      // Responsive spacing and dimensions
      let baseSpacing: number;
      let elementWidth: string;
      let elementHeight: string;
      let leftOffset: string;
      let rightOffset: string;
      let blurClass: string;

      if (isMobile) {
        baseSpacing = 400;
        elementWidth = '300px';
        elementHeight = '180px';
        leftOffset = '-left-32';
        rightOffset = '-right-32';
        blurClass = 'blur-2xl';
      } else if (isTablet) {
        baseSpacing = 600;
        elementWidth = '600px';
        elementHeight = '300px';
        leftOffset = '-left-60';
        rightOffset = '-right-60';
        blurClass = 'blur-3xl';
      } else {
        baseSpacing = 800;
        elementWidth = '1150px';
        elementHeight = '560px';
        leftOffset = '-left-120';
        rightOffset = '-right-120';
        blurClass = 'blur-3xl';
      }

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
            className={`absolute ${isLeft ? leftOffset : rightOffset} rounded-full ${blurClass}`}
            style={{
              top: `${currentPosition}px`,
              width: elementWidth,
              height: elementHeight,
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