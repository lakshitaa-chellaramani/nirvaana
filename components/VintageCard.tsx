interface VintageCardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'orange' | 'teal' | 'purple' | 'pink' | 'yellow' | 'cream';
}

export default function VintageCard({ children, className = '', color = 'orange' }: VintageCardProps) {
  const colorClasses = {
    orange: 'bg-vintage-orange border-vintage-brown',
    teal: 'bg-vintage-teal border-vintage-darkBrown',
    purple: 'bg-vintage-purple border-vintage-darkBrown text-white',
    pink: 'bg-vintage-pink border-vintage-darkBrown text-white',
    yellow: 'bg-vintage-yellow border-vintage-brown',
    cream: 'bg-vintage-cream border-vintage-maroon',
  };

  return (
    <div className={`vintage-border ${colorClasses[color]} p-6 ${className}`}>
      {children}
    </div>
  );
}
