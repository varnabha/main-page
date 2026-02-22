import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={sectionRef} className="bg-cream py-12 px-4 sm:px-6">
      <motion.div
        className="relative max-w-7xl mx-auto rounded-[48px] overflow-hidden min-h-[500px] flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <img
            src="/images/cta-background.jpg"
            alt="Campus"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-dark-bg/70" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-16 max-w-2xl">
          <motion.h2
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to transform
            <br />
            <span className="italic">your campus events?</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Join thousands of students and clubs already using CampusMeet to
            connect and create unforgettable experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-lavender text-dark-bg hover:bg-lavender/90 rounded-full px-8 py-6 text-base font-medium group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium"
            >
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
