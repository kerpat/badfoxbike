
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const ThreeDFoxLogo: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for rotation
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-20deg", "20deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center cursor-pointer z-30"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Ambient Glow behind (Subtle) */}
        <div 
            className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full"
            style={{ 
                transform: "translateZ(-50px)",
                scale: 0.8
            }}
        />

        {/* Floating Animation Wrapper */}
        <motion.div
            animate={{ 
                y: [0, -15, 0],
            }}
            transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
            }}
            className="relative w-full h-full drop-shadow-2xl"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* GEOMETRIC FOX SVG - Clean, Matte, No Glare */}
            <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
                <g transform="translate(50, 50) scale(0.8)">
                    {/* Left Ear */}
                    <path d="M110 50 L180 150 L80 180 Z" fill="#f1622d" stroke="#f1622d" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M110 50 L140 120 L80 180 Z" fill="#bf451a" stroke="#bf451a" strokeWidth="1" /> {/* Inner Shadow */}

                    {/* Right Ear */}
                    <path d="M390 50 L320 150 L420 180 Z" fill="#f1622d" stroke="#f1622d" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M390 50 L360 120 L420 180 Z" fill="#bf451a" stroke="#bf451a" strokeWidth="1" /> {/* Inner Shadow */}

                    {/* Forehead / Main Head */}
                    <path d="M180 150 L320 150 L250 250 Z" fill="#f1622d" stroke="#f1622d" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M180 150 L250 100 L320 150 Z" fill="#d3451b" stroke="#d3451b" strokeWidth="1" /> {/* Top Poly */}

                    {/* Cheeks (Side) */}
                    <path d="M80 180 L180 150 L160 250 L60 240 Z" fill="#f1622d" stroke="#f1622d" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M420 180 L320 150 L340 250 L440 240 Z" fill="#f1622d" stroke="#f1622d" strokeWidth="2" strokeLinejoin="round" />

                    {/* Cheeks (Lower/White) */}
                    <path d="M60 240 L160 250 L200 350 L150 380 Z" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1" strokeLinejoin="round" />
                    <path d="M440 240 L340 250 L300 350 L350 380 Z" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1" strokeLinejoin="round" />

                    {/* Snout */}
                    <path d="M160 250 L340 250 L250 350 Z" fill="#f1622d" stroke="#f1622d" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M250 250 L250 350 L200 350 Z" fill="#d3451b" opacity="0.3" /> {/* Snout shadow side */}

                    {/* Nose */}
                    <path d="M220 350 L280 350 L250 380 Z" fill="#111111" />
                    
                    {/* Eyes (Geometric) */}
                    <path d="M150 210 L210 230 L160 240 Z" fill="#111111" />
                    <path d="M350 210 L290 230 L340 240 Z" fill="#111111" />
                    
                    {/* Jaw/Chin */}
                    <path d="M200 350 L300 350 L250 420 Z" fill="#ffffff" stroke="#e5e5e5" strokeWidth="1" strokeLinejoin="round" />
                </g>
            </svg>
        </motion.div>
      </motion.div>
      
      {/* Floor Shadow (Subtle) */}
      <motion.div 
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.1, 0.05, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 w-[120px] h-4 bg-black blur-lg rounded-[100%]"
        style={{
            rotateX: "60deg",
            transform: "translateZ(-80px)"
        }}
      />
    </motion.div>
  );
};
