import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const events = [
  {
    id: 1,
    title: 'Tech Talk: AI in 2025',
    club: 'Coding Club',
    date: 'Jan 25',
    time: '6:00 PM',
    location: 'Engineering Hall',
    attendees: 128,
    image: '/images/event-tech.jpg',
    category: 'Tech',
  },
  {
    id: 2,
    title: 'Spring Music Festival',
    club: 'Music Society',
    date: 'Jan 28',
    time: '4:00 PM',
    location: 'Main Quad',
    attendees: 342,
    image: '/images/event-music.jpg',
    category: 'Music',
  },
  {
    id: 3,
    title: 'Startup Pitch Night',
    club: 'Entrepreneurship Club',
    date: 'Jan 30',
    time: '7:00 PM',
    location: 'Business School',
    attendees: 89,
    image: '/images/event-pitch.jpg',
    category: 'Business',
  },
  {
    id: 4,
    title: 'Art Exhibition Opening',
    club: 'Fine Arts Club',
    date: 'Feb 1',
    time: '5:00 PM',
    location: 'Student Center',
    attendees: 156,
    image: '/images/event-art.jpg',
    category: 'Arts',
  },
];

interface EventCardProps {
  event: typeof events[0];
  index: number;
}

function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
            {event.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4" />
          <span>{event.date}</span>
          <span className="text-gray-300">|</span>
          <span>{event.time}</span>
        </div>

        <h3 className="font-serif text-xl font-medium text-dark-bg mb-2 group-hover:text-dark-green transition-colors">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">{event.club}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{event.attendees}</span>
            </div>
          </div>
        </div>

        <Button
          className="w-full mt-4 bg-lavender text-dark-bg hover:bg-lavender/90 rounded-full py-2.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Register Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export function FeaturedEvents() {
  return (
    <section id="featured-events" className="bg-cream py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <ScrollReveal>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-dark-bg">
                Happening this
                <span className="italic"> week</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Don't miss out on these amazing events happening on campus.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Button
              variant="outline"
              className="border-2 border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-white rounded-full px-6 py-5 text-sm font-medium self-start sm:self-auto"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
