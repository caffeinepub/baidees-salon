interface BrandLogoProps {
  variant?: 'horizontal' | 'square';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandLogo({ 
  variant = 'horizontal', 
  className = '',
  size = 'md'
}: BrandLogoProps) {
  const sizeClasses = {
    sm: variant === 'horizontal' ? 'h-8' : 'h-10',
    md: variant === 'horizontal' ? 'h-10' : 'h-12',
    lg: variant === 'horizontal' ? 'h-12' : 'h-16',
  };

  const logoSrc = variant === 'horizontal' 
    ? '/assets/generated/baidees-logo-horizontal.dim_1600x600.png'
    : '/assets/generated/baidees-logo.dim_1024x1024.png';

  return (
    <img 
      src={logoSrc}
      alt="Baidees Family Salon"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );
}
