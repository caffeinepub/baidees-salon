import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Sparkles } from 'lucide-react';
import FaqAccordion from '../components/sections/FaqAccordion';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const serviceCategories = [
  {
    title: 'Hair Services',
    services: [
      {
        name: 'Haircut (Men)',
        price: '₹300',
        duration: '30 min',
        benefits: 'Professional styling tailored to your face shape and lifestyle',
      },
      {
        name: 'Haircut (Women)',
        price: '₹500',
        duration: '45 min',
        benefits: 'Expert cutting techniques for all hair types and lengths',
      },
      {
        name: 'Haircut (Kids)',
        price: '₹250',
        duration: '20 min',
        benefits: 'Gentle, patient service in a fun, comfortable environment',
      },
      {
        name: 'Hair Styling',
        price: '₹400',
        duration: '40 min',
        benefits: 'Perfect for special occasions, weddings, and events',
      },
      {
        name: 'Hair Coloring',
        price: '₹1500+',
        duration: '2-3 hours',
        benefits: 'Premium color products for vibrant, long-lasting results',
      },
      {
        name: 'Beard Styling',
        price: '₹200',
        duration: '20 min',
        benefits: 'Precision trimming and shaping for a polished look',
      },
    ],
  },
  {
    title: 'Hair Treatments',
    services: [
      {
        name: 'Hair Spa',
        price: '₹800',
        duration: '60 min',
        benefits: 'Deep conditioning and relaxation for healthy, shiny hair',
      },
      {
        name: 'Keratin Treatment',
        price: '₹3000+',
        duration: '3-4 hours',
        benefits: 'Smooth, frizz-free hair that lasts for months',
      },
      {
        name: 'Smoothening',
        price: '₹2500+',
        duration: '2-3 hours',
        benefits: 'Silky, manageable hair with reduced styling time',
      },
      {
        name: 'Rebonding',
        price: '₹3500+',
        duration: '4-5 hours',
        benefits: 'Permanently straight hair with a sleek finish',
      },
      {
        name: 'Anti-Dandruff Treatment',
        price: '₹600',
        duration: '45 min',
        benefits: 'Targeted therapy to eliminate flakes and soothe scalp',
      },
      {
        name: 'Hair Fall Treatment',
        price: '₹700',
        duration: '50 min',
        benefits: 'Strengthening treatment to reduce hair loss and promote growth',
      },
    ],
  },
  {
    title: 'Skin & Grooming',
    services: [
      {
        name: 'Facial',
        price: '₹800',
        duration: '60 min',
        benefits: 'Deep cleansing and rejuvenation for glowing skin',
      },
      {
        name: 'Cleanup',
        price: '₹500',
        duration: '40 min',
        benefits: 'Quick refresh to remove impurities and brighten complexion',
      },
      {
        name: 'Detan',
        price: '₹600',
        duration: '45 min',
        benefits: 'Remove tan and restore your natural skin tone',
      },
      {
        name: 'Head Massage',
        price: '₹300',
        duration: '30 min',
        benefits: 'Relaxing massage to relieve stress and improve circulation',
      },
    ],
  },
];

export default function ServicesPage() {
  const { ref: headerRef, isVisible: headerVisible } = useRevealOnScroll();

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of premium salon services designed to enhance your natural beauty
          </p>
        </div>

        {/* Services Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {serviceCategories.map((category, idx) => (
              <AccordionItem
                key={idx}
                value={`category-${idx}`}
                className="border border-border/40 rounded-lg overflow-hidden bg-card hover-lift"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-gold" />
                    <span className="font-serif text-xl font-semibold">{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4 pt-4">
                    {category.services.map((service, serviceIdx) => (
                      <Card key={serviceIdx} className="border-border/40 hover-lift">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{service.name}</CardTitle>
                            <span className="text-gold font-semibold text-lg">{service.price}</span>
                          </div>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            {service.duration}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{service.benefits}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ Section */}
        <FaqAccordion />
      </div>
    </div>
  );
}
