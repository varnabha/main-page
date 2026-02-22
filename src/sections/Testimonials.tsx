import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const testimonials = [
  {
    id: 1,
    quote:
      "CampusMeet doubled our event attendance in just one semester! It's incredibly easy to use.",
    author: 'Sarah Chen',
    role: 'President, Coding Club',
    avatar: '/images/avatar-1.jpg',
  },
  {
    id: 2,
    quote:
      "I discovered so many events I would have missed otherwise. Campus life has never been better!",
    author: 'Mike Johnson',
    role: 'Sophomore, Computer Science',
    avatar: '/images/avatar-2.jpg',
  },
  {
    id: 3,
    quote:
      'Managing registrations has never been easier. The analytics help us understand our audience better.',
    author: 'Alex Rivera',
    role: 'Event Coordinator, Student Union',
    avatar: '/images/avatar-3.jpg',
  },
];

export function Testimonials() {
  return (
    <section className="bg-dark-bg rounded-t-4xl -mt-8 relative z-10 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white">
              Loved by clubs
              <br />
              <span className="italic">and students</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.15}>
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10 h-full"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="w-10 h-10 text-lavender mb-6" />
                <p className="text-white text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
