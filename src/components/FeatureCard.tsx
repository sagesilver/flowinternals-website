
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div className={cn("feature-card group glass-card", className)}>
      <div className="mb-4 text-dynamous-400 p-3 bg-dynamous-950/50 w-fit rounded-lg group-hover:bg-dynamous-900/70 group-hover:text-dynamous-300 transition-colors">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-dynamous-400 transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
