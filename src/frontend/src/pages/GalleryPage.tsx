import { useState } from 'react';
import BeforeAfterSlider from '../components/media/BeforeAfterSlider';
import GalleryGrid from '../components/media/GalleryGrid';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function GalleryPage() {
  const { ref: headerRef, isVisible: headerVisible } = useRevealOnScroll();
  const { ref: gridRef, isVisible: gridVisible } = useRevealOnScroll();
  const { ref: beforeAfterRef, isVisible: beforeAfterVisible } = useRevealOnScroll();

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
            Our <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations and elegant salon spaces
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          ref={gridRef}
          className={`mb-20 transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <GalleryGrid />
        </div>

        {/* Before/After Section */}
        <div
          ref={beforeAfterRef}
          className={`transition-all duration-1000 ${
            beforeAfterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Before & After <span className="text-gold">Transformations</span>
          </h2>
          <BeforeAfterSlider />
        </div>
      </div>
    </div>
  );
}
