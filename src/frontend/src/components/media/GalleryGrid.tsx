const galleryImages = [
  { src: '/assets/generated/baidees-gallery-hairstyles-1.dim_1200x1200.png', alt: 'Hairstyle 1' },
  { src: '/assets/generated/baidees-gallery-interior-1.dim_1200x1200.png', alt: 'Salon Interior 1' },
  { src: '/assets/generated/baidees-gallery-hairstyles-1.dim_1200x1200.png', alt: 'Hairstyle 2' },
  { src: '/assets/generated/baidees-gallery-interior-1.dim_1200x1200.png', alt: 'Salon Interior 2' },
  { src: '/assets/generated/baidees-gallery-hairstyles-1.dim_1200x1200.png', alt: 'Hairstyle 3' },
  { src: '/assets/generated/baidees-gallery-interior-1.dim_1200x1200.png', alt: 'Salon Interior 3' },
  { src: '/assets/generated/baidees-gallery-hairstyles-1.dim_1200x1200.png', alt: 'Hairstyle 4' },
  { src: '/assets/generated/baidees-gallery-interior-1.dim_1200x1200.png', alt: 'Salon Interior 4' },
  { src: '/assets/generated/baidees-gallery-hairstyles-1.dim_1200x1200.png', alt: 'Hairstyle 5' },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((image, idx) => (
        <div
          key={idx}
          className="aspect-square overflow-hidden rounded-lg border border-border/40 hover-lift"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}
