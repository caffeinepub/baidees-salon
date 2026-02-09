import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const testimonials = [
  {
    name: 'Priya Sharma',
    service: 'Keratin Treatment',
    rating: 5,
    text: 'Absolutely love my keratin treatment! My hair has never been this smooth and manageable. The staff at Baidees Salon are true professionals.',
  },
  {
    name: 'Rahul Verma',
    service: 'Haircut & Beard Styling',
    rating: 5,
    text: 'Best salon experience I\'ve had! The attention to detail and the quality of service is outstanding. Highly recommend for anyone looking for a premium grooming experience.',
  },
  {
    name: 'Anjali Patel',
    service: 'Bridal Makeup & Hair',
    rating: 5,
    text: 'They made me look absolutely stunning on my wedding day! The team understood exactly what I wanted and delivered beyond my expectations. Thank you, Baidees Salon!',
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-card transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12">
          What Our Clients <span className="text-gold">Say</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-border/40 bg-background/50 backdrop-blur hover-lift">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
