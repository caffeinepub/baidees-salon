import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

export default function OfferBanner() {
  return (
    <div className="bg-gold text-black py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center">
        <Sparkles className="h-5 w-5" />
        <p className="font-semibold text-sm md:text-base">
          Special Offer: Flat 20% off on Keratin Treatment - Limited Time Only!
        </p>
        <Sparkles className="h-5 w-5" />
      </div>
    </div>
  );
}
