import type { ReactNode } from 'react';
import { cn } from '@repo/shared';

export interface NavLinkProps {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export function NavLink({
  href,
  children,
  active = false,
  className,
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn('repo-nav-link', active && 'repo-nav-link--active', className)}
    >
      {children}
    </a>
  );
}
