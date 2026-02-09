import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Sparkles, Droplets, User, Heart, Phone, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '../components/media/BeforeAfterSlider';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ServiceHighlightsSection from '../components/sections/ServiceHighlightsSection';
import OfferBanner from '../components/marketing/OfferBanner';
import MembershipCardSection from '../components/marketing/MembershipCardSection';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function HomePage() {
  const navigate = useNavigate();
  const { ref: heroRef, isVisible: heroVisible } = useRevealOnScroll();
  const { ref: introRef, isVisible: introVisible } = useRevealOnScroll();
  const { ref: beforeAfterRef, isVisible: beforeAfterVisible } = useRevealOnScroll();

  return (
    <div className="w-full">
      {/* Offer Banner */}
      <OfferBanner />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/generated/baidees-hero-salon.dim_2400x1200.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div
          ref={heroRef}
          className={`relative z-10 text-center px-4 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">
            Where Style Meets <span className="text-gold">Confidence</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience luxury grooming and styling at Baidees Salon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold text-black hover:bg-gold/90 text-lg px-8"
              onClick={() => navigate({ to: '/contact' })}
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-card">
        <div
          ref={introRef}
          className={`container mx-auto px-4 text-center max-w-3xl transition-all duration-1000 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-gold">Baidees Salon</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Baidees Salon, we believe that everyone deserves to look and feel their best. Our team
            of expert stylists combines years of experience with the latest trends and techniques to
            deliver exceptional results. Whether you're preparing for a special occasion or simply
            treating yourself to some self-care, we're here to help you shine.
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <ServiceHighlightsSection />

      {/* Before/After Section */}
      <section
        ref={beforeAfterRef}
        className={`py-16 md:py-24 bg-background transition-all duration-1000 ${
          beforeAfterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
            Transformations That <span className="text-gold">Inspire</span>
          </h2>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Membership */}
      <MembershipCardSection />
    </div>
  );
}
