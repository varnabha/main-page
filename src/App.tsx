import { AnnouncementBar } from '@/sections/AnnouncementBar';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { StatsBar } from '@/sections/StatsBar';
import { ForClubs } from '@/sections/ForClubs';
import { ForStudents } from '@/sections/ForStudents';
import { HowItWorks } from '@/sections/HowItWorks';
import { FeaturedEvents } from '@/sections/FeaturedEvents';
import { Testimonials } from '@/sections/Testimonials';
import { Pricing } from '@/sections/Pricing';
import { CTABanner } from '@/sections/CTABanner';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <StatsBar />
        <ForClubs />
        <ForStudents />
        <HowItWorks />
        <FeaturedEvents />
        <Testimonials />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
