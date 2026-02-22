import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Users, BarChart3, Bell, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const features = [
  {
    icon: Palette,
    text: 'Custom event pages with your branding',
  },
  {
    icon: BarChart3,
    text: 'Real-time registration tracking',
  },
  {
    icon: Bell,
    text: 'Automated reminders for attendees',
  },
  {
    icon: Users,
    text: 'Analytics and insights',
  },
];

export function ForClubs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="for-clubs"
      ref={sectionRef}
      className="bg-dark-bg py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-lavender/20 text-lavender rounded-full text-sm font-medium mb-6">
                FOR CLUBS
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
                List events in
                <br />
                <span className="italic">minutes, not hours</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-gray-400 max-w-lg">
                Create beautiful event pages, manage registrations, and connect with
                students who care about what you do.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature.text}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-lavender/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-lavender" />
                    </div>
                    <span className="text-white">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-lavender text-dark-bg hover:bg-lavender/90 rounded-full px-8 py-6 text-base font-medium group"
                >
                  Start Listing Events
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium"
                >
                  See Demo
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="relative">
              {/* Orbiting icons */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                {[Calendar, Users, Bell, BarChart3].map((Icon, i) => {
                  const angle = (i * 90 * Math.PI) / 180;
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <div
                      key={i}
                      className="absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-dark-bg" />
                    </div>
                  );
                })}
              </motion.div>

              {/* Phone mockup */}
              <div className="relative z-10 mx-auto w-72 sm:w-80">
                <div className="bg-dark-bg rounded-[3rem] p-3 shadow-2xl border border-white/10">
                  <div className="bg-cream rounded-[2.5rem] overflow-hidden">
                    {/* App UI */}
                    <div className="p-4 bg-white">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Create Event</h3>
                        <span className="text-sm text-gray-500">Step 1/3</span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-10 bg-gray-100 rounded-lg" />
                        <div className="h-24 bg-gray-100 rounded-lg" />
                        <div className="flex gap-2">
                          <div className="h-10 flex-1 bg-gray-100 rounded-lg" />
                          <div className="h-10 flex-1 bg-gray-100 rounded-lg" />
                        </div>
                      </div>
                    </div>
                    <img
                      src="/images/event-tech.jpg"
                      alt="Event creation"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <button className="w-full bg-lavender text-dark-bg py-3 rounded-full font-medium">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Import for orbiting icons
import { Calendar } from 'lucide-react';
