import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <motion.div
      className="w-full bg-dark-green text-white py-3 px-4"
      initial={{ y: -44, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <span>🎉 CampusMeet is now live! Start listing your events today.</span>
        <a
          href="#how-it-works"
          className="inline-flex items-center gap-1 font-medium underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Learn more
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
