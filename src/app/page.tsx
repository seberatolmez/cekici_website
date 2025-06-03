import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import WhyUs from '@/components/WhyUs';
import CallToAction from '@/components/CallToAction';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationsSection from '@/components/LocationsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <LocationsSection />
      <AboutSection />
      <ServicesPreview />
      <WhyUs />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
}
