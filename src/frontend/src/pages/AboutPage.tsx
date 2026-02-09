import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Shield, Award, Heart } from 'lucide-react';
import StylistsSection from '../components/sections/StylistsSection';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function AboutPage() {
  const { ref: headerRef, isVisible: headerVisible } = useRevealOnScroll();
  const { ref: storyRef, isVisible: storyVisible } = useRevealOnScroll();
  const { ref: whyRef, isVisible: whyVisible } = useRevealOnScroll();

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expert Stylists',
      description: 'Our team consists of certified professionals with years of experience',
    },
    {
      icon: Shield,
      title: 'Premium Products',
      description: 'We use only the finest, internationally recognized hair and skin care brands',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every client receives customized service tailored to their unique needs',
    },
    {
      icon: CheckCircle2,
      title: 'Hygiene Standards',
      description: 'We maintain the highest standards of cleanliness and sanitization',
    },
  ];

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
            About <span className="text-gold">Baidees Salon</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in beauty and grooming excellence
          </p>
        </div>

        {/* Story Section */}
        <div
          ref={storyRef}
          className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${
            storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a passion for beauty and a commitment to excellence, Baidees Salon has
                become a trusted name in the community. Our journey began with a simple vision: to
                create a space where everyone feels welcome, valued, and beautiful.
              </p>
              <p>
                Over the years, we've grown from a small neighborhood salon to a premier destination
                for hair and beauty services. Our success is built on the trust of our clients and
                the dedication of our talented team. We continuously invest in training and the
                latest techniques to ensure we deliver nothing but the best.
              </p>
              <p>
                At Baidees Salon, we believe that beauty is not just about appearance—it's about
                confidence, self-expression, and feeling great in your own skin. That's why we take
                the time to understand each client's unique needs and preferences, creating
                personalized experiences that exceed expectations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stylists Section */}
        <StylistsSection />

        {/* Hygiene & Premium Products */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">
                Hygiene & Premium Products
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Your safety and comfort are our top priorities. We maintain rigorous hygiene
                standards, with all tools and equipment thoroughly sanitized after each use. Our
                salon is regularly deep-cleaned, and we follow industry best practices to ensure a
                safe environment for everyone.
              </p>
              <p>
                We exclusively use premium, internationally recognized brands for all our services.
                From hair care products to skin treatments, we carefully select only the finest
                formulations that deliver exceptional results while being gentle on your hair and
                skin. Our product selection includes leading names trusted by professionals
                worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div
          ref={whyRef}
          className={`transition-all duration-1000 ${
            whyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-gold">Baidees Salon</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <Card key={idx} className="border-border/40 hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gold/10">
                      <item.icon className="h-6 w-6 text-gold" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
