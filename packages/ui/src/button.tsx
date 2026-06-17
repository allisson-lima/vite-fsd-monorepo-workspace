import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@repo/shared';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'repo-btn--primary',
  secondary: 'repo-btn--secondary',
  ghost: 'repo-btn--ghost',
};

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn('repo-btn', variantClass[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
