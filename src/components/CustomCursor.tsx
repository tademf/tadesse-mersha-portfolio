import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    // Add listeners for clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea');
    clickables.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clickables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  // Simple check for reduced motion or touch devices
  if (typeof window !== 'undefined' && (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 'ontouchstart' in window)) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border border-accent-violet rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
      animate={{ 
        x: position.x - 12, 
        y: position.y - 12,
        scale: isHovered ? 1.5 : 1
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-1 h-1 bg-accent-violet rounded-full"></div>
    </motion.div>
  );
}
