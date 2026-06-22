import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import TestsSection from "@/components/home/TestsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BookingSection from "@/components/home/BookingSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <TestsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
