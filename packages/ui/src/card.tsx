import type { ReactNode } from 'react';
import { cn } from '@repo/shared';

export interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ title, description, children, className }: CardProps) {
  return (
    <div className={cn('repo-card', className)}>
      {title && <h3 className="repo-card__title">{title}</h3>}
      {description && <p className="repo-card__description">{description}</p>}
      {children}
    </div>
  );
}
