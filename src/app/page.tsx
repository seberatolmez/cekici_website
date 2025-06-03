import Image from "next/image";
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import WhyUs from '@/components/WhyUs';
import CallToAction from '@/components/CallToAction';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationsSection from '@/components/LocationsSection';

export default function Home() {
  const phoneNumber = "+90 541 676 5318"; // Telefon numarasını buraya ekleyin

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
