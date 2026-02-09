import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Gift, Star, Zap } from 'lucide-react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const benefits = [
  {
    icon: Star,
    title: 'Priority Booking',
    description: 'Get preferred appointment slots and skip the wait',
  },
  {
    icon: Gift,
    title: 'Exclusive Discounts',
    description: '15% off on all services throughout the year',
  },
  {
    icon: Zap,
    title: 'Complimentary Services',
    description: 'Free head massage with every visit',
  },
  {
    icon: Crown,
    title: 'Birthday Special',
    description: 'Special birthday discount and complimentary styling',
  },
];

export default function MembershipCardSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 bg-card transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-gold/50 bg-gradient-to-br from-card via-card to-gold/5 backdrop-blur overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <CardHeader className="text-center relative z-10">
              <div className="mx-auto w-fit p-4 rounded-full bg-gold/10 mb-4">
                <Crown className="h-12 w-12 text-gold" />
              </div>
              <CardTitle className="font-serif text-3xl md:text-4xl">
                Baidees <span className="text-gold">Premium Membership</span>
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Join our exclusive membership program and enjoy VIP treatment with every visit
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="p-3 rounded-full bg-gold/10 h-fit">
                      <benefit.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gold text-black hover:bg-gold/90"
                  asChild
                >
                  <a href="/contact">
                    Inquire About Membership
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Visit our salon or contact us to learn more about membership benefits
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
