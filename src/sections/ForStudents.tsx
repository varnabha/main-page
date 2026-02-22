import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CalendarPlus, Share2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const features = [
  {
    icon: Sparkles,
    text: 'Personalized event recommendations',
  },
  {
    icon: CalendarPlus,
    text: 'One-tap registration',
  },
  {
    icon: Bookmark,
    text: 'Add to calendar automatically',
  },
  {
    icon: Share2,
    text: 'Share with friends',
  },
];

const categories = ['All', 'Tech', 'Music', 'Sports', 'Arts', 'Social'];

export function ForStudents() {
  return (
    <section
      id="for-students"
      className="bg-cream rounded-t-4xl -mt-8 relative z-10 py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual - Left side */}
          <ScrollReveal direction="right" className="order-2 lg:order-1">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative z-10 mx-auto w-72 sm:w-80">
                <div className="bg-dark-bg rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-cream rounded-[2.5rem] overflow-hidden">
                    {/* App UI */}
                    <div className="p-4 bg-white">
                      <h3 className="font-semibold mb-3">Discover Events</h3>
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((cat, catIdx) => (
                          <span
                            key={cat}
                            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                              catIdx === 0
                                ? 'bg-dark-bg text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 space-y-3 bg-cream">
                      {[
                        { img: '/images/event-music.jpg', title: 'Spring Music Fest', date: 'Jan 28' },
                        { img: '/images/event-art.jpg', title: 'Art Exhibition', date: 'Feb 1' },
                      ].map((event) => (
                        <motion.div
                          key={event.title}
                          className="bg-white rounded-2xl overflow-hidden shadow-sm"
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            src={event.img}
                            alt={event.title}
                            className="w-full h-24 object-cover"
                          />
                          <div className="p-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{event.title}</p>
                                <p className="text-xs text-gray-500">{event.date}</p>
                              </div>
                              <button className="w-8 h-8 bg-lavender rounded-full flex items-center justify-center">
                                <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-card z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">Recommended</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content - Right side */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                FOR STUDENTS
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-dark-bg leading-tight">
                Discover events
                <br />
                <span className="italic">that matter to you</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-gray-600 max-w-lg">
                From hackathons to music festivals, find events that match your
                interests and never miss out on campus life.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature.text}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-dark-bg">{feature.text}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-lavender text-dark-bg hover:bg-lavender/90 rounded-full px-8 py-6 text-base font-medium group"
                >
                  Find Events
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
