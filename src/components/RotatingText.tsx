import { motion } from 'framer-motion';

interface RotatingTextProps {
  text: string;
  className?: string;
  size?: number;
}

export function RotatingText({ text, className = '', size = 200 }: RotatingTextProps) {
  const characters = text.split('');
  const radius = size / 2 - 20;
  const anglePerChar = 360 / characters.length;

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {characters.map((char, i) => {
        const angle = (i * anglePerChar - 90) * (Math.PI / 180);
        const x = radius * Math.cos(angle) + radius;
        const y = radius * Math.sin(angle) + radius;

        return (
          <span
            key={i}
            className="absolute text-sm font-medium tracking-wider text-gray-400"
            style={{
              left: x,
              top: y,
              transform: `rotate(${i * anglePerChar}deg)`,
              transformOrigin: 'center center',
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
}
