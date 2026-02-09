import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors, Sparkles, Droplets, User, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const highlights = [
  {
    icon: Scissors,
    title: 'Hair Cutting & Styling',
    description: 'Expert cuts and styles for all hair types and preferences',
  },
  {
    icon: Sparkles,
    title: 'Hair Spa & Treatments',
    description: 'Rejuvenating treatments for healthy, shiny hair',
  },
  {
    icon: Droplets,
    title: 'Hair Keratin & Smoothening',
    description: 'Smooth, frizz-free hair that lasts for months',
  },
  {
    icon: User,
    title: 'Beard Grooming',
    description: 'Professional beard trimming and styling services',
  },
  {
    icon: Heart,
    title: 'Facial & Skin Care',
    description: 'Luxurious facials and treatments for glowing skin',
  },
];

export default function ServiceHighlightsSection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
          Our Premium <span className="text-gold">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {highlights.map((service, idx) => (
            <Card
              key={idx}
              className="border-border/40 bg-card/50 backdrop-blur hover-lift"
            >
              <CardHeader>
                <div className="p-3 rounded-full bg-gold/10 w-fit mb-4">
                  <service.icon className="h-8 w-8 text-gold" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-black"
            onClick={() => navigate({ to: '/services' })}
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
