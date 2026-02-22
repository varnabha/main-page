import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Ticket, PartyPopper } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Create or Discover',
    description:
      'Clubs list events with beautiful pages, students browse and find what interests them.',
  },
  {
    number: '02',
    icon: Ticket,
    title: 'Register in Seconds',
    description:
      'One-tap registration with automatic calendar invites and reminders.',
  },
  {
    number: '03',
    icon: PartyPopper,
    title: 'Show Up & Enjoy',
    description:
      'Get reminders, attend events, make memories, and share with friends.',
  },
];

export function HowItWorks() {
  const lineRef = useRef<SVGPathElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="bg-cream py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-dark-bg">
              How CampusMeet
              <span className="italic"> works</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-gray-600">
              Three simple steps to transform your campus event experience.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <svg
            className="absolute top-24 left-0 right-0 w-full h-2 hidden lg:block"
            preserveAspectRatio="none"
          >
            <motion.path
              ref={lineRef}
              d="M 100 1 L 900 1"
              stroke="#E5E5E5"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
            />
          </svg>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 0.2}>
                <motion.div
                  className="relative text-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step number circle */}
                  <div className="relative z-10 mx-auto w-20 h-20 bg-white rounded-2xl shadow-card flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-dark-bg" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-lavender rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-dark-bg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
