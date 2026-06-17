import { useLocation } from 'react-router-dom';
import { Header } from '@repo/ui';
import { ThemeToggle } from '@/features/theme-toggle';
import { ROUTES } from '@/shared/config/routes';

const navItems = [
  { href: ROUTES.home, label: 'Início' },
  { href: ROUTES.about, label: 'Sobre' },
  { href: ROUTES.features, label: 'Features' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <Header
      brand="Vite FSD Monorepo"
      navItems={navItems}
      currentPath={pathname}
      badge={
        <>
          <ThemeToggle />
          <span className="repo-badge" style={{ marginLeft: '0.5rem' }}>
            marketing :3002
          </span>
        </>
      }
    />
  );
}
