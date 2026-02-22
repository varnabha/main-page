import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ value, suffix, label, delay }: StatItemProps) {
  const { count, elementRef } = useCountUp(value, 2000);

  return (
    <motion.div
      ref={elementRef}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white">
        {count}
        <span className="text-lavender">{suffix}</span>
      </div>
      <p className="mt-2 text-gray-400 text-sm sm:text-base">{label}</p>
    </motion.div>
  );
}

export function StatsBar() {
  const stats = [
    { value: 500, suffix: '+', label: 'Events Listed' },
    { value: 10000, suffix: '+', label: 'Students Connected' },
    { value: 50, suffix: '+', label: 'College Clubs' },
  ];

  return (
    <section className="bg-dark-bg rounded-t-4xl -mt-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.p
          className="text-center text-gray-400 text-sm mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by clubs and students across campuses
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
