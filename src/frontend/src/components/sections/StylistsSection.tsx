import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const stylists = [
  {
    name: 'Rajesh Kumar',
    title: 'Master Stylist & Colorist',
    image: '/assets/generated/baidees-stylist-1.dim_800x1000.png',
    bio: 'With over 12 years of experience, Rajesh specializes in advanced cutting techniques and creative color transformations.',
  },
  {
    name: 'Meera Singh',
    title: 'Senior Hair Treatment Specialist',
    image: '/assets/generated/baidees-stylist-2.dim_800x1000.png',
    bio: 'Meera is an expert in hair treatments and restoration, helping clients achieve healthy, beautiful hair through specialized care.',
  },
];

export default function StylistsSection() {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <section
      ref={ref}
      className={`mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
        Meet Our <span className="text-gold">Expert Stylists</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {stylists.map((stylist, idx) => (
          <Card key={idx} className="border-border/40 overflow-hidden hover-lift">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={stylist.image}
                alt={stylist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">{stylist.name}</CardTitle>
              <p className="text-gold font-medium">{stylist.title}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{stylist.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
