import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const transformations = [
  {
    title: 'Haircut Transformation',
    image: '/assets/generated/baidees-before-after-haircut.dim_2000x1000.png',
    description: 'Modern layered cut with styling',
  },
  {
    title: 'Keratin Treatment',
    image: '/assets/generated/baidees-before-after-keratin.dim_2000x1000.png',
    description: 'Smooth, frizz-free hair transformation',
  },
];

export default function BeforeAfterSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-border/40 overflow-hidden">
        <div className="relative aspect-[2/1]">
          <img
            src={transformations[currentIndex].image}
            alt={transformations[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="font-serif text-2xl font-bold mb-2">
              {transformations[currentIndex].title}
            </h3>
            <p className="text-white/90">{transformations[currentIndex].description}</p>
          </div>
        </div>
      </Card>
      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="border-gold text-gold hover:bg-gold hover:text-black"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          {transformations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-muted-foreground'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="border-gold text-gold hover:bg-gold hover:text-black"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
