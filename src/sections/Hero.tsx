import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Apple, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RotatingText } from '@/components/RotatingText';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-cream pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-dark-bg"
              variants={itemVariants}
            >
              Where campus
              <br />
              <span className="italic">life comes alive</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              The easiest way for college clubs to list events and for students to
              discover their next unforgettable experience.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-lavender text-dark-bg hover:bg-lavender/90 rounded-full px-8 py-6 text-base font-medium group"
              >
                Explore Events
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-white rounded-full px-8 py-6 text-base font-medium transition-colors"
              >
                List Your Event
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <Apple className="w-4 h-4" />
                <span className="text-sm font-medium">iOS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Android</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Web</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            {/* Rotating text */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
              <RotatingText text="DISCOVER • CONNECT • EXPERIENCE • " size={180} />
            </div>

            {/* Phone mockup */}
            <div className="relative">
              {/* Floating event cards */}
              <motion.div
                className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-card z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-lavender rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Tech Talk</p>
                    <p className="text-xs text-gray-500">Today, 6 PM</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-card z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white" />
                  </div>
                  <p className="text-sm font-medium">+128 joining</p>
                </div>
              </motion.div>

              {/* Main phone */}
              <div className="relative w-72 sm:w-80 bg-dark-bg rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-cream rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/images/hero-event.jpg"
                    alt="Campus event"
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-lavender/50 rounded-full text-xs font-medium">
                        Music
                      </span>
                      <span className="text-xs text-gray-500">Jan 25</span>
                    </div>
                    <h3 className="font-semibold text-lg">Spring Festival 2026</h3>
                    <p className="text-sm text-gray-500">Main Campus Quad</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
