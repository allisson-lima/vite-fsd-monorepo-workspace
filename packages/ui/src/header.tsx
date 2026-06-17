import type { ReactNode } from 'react';
import { NavLink } from './nav-link';

export interface NavItem {
  href: string;
  label: string;
}

export interface HeaderProps {
  brand: string;
  brandHref?: string;
  navItems: NavItem[];
  currentPath?: string;
  badge?: ReactNode;
}

export function Header({
  brand,
  brandHref = '/',
  navItems,
  currentPath,
  badge,
}: HeaderProps) {
  const resolvedPath = currentPath ?? '';
  return (
    <header className="repo-header">
      <div className="repo-header__inner">
        <a href={brandHref} className="repo-header__brand">
          {brand}
        </a>
        <nav className="repo-header__nav" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={
                item.href === '/'
                  ? resolvedPath === '/'
                  : resolvedPath.startsWith(item.href)
              }
            >
              {item.label}
            </NavLink>
          ))}
          {badge}
        </nav>
      </div>
    </header>
  );
}
