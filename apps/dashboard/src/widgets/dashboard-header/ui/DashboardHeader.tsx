import { useLocation } from 'react-router-dom';
import { Header } from '@repo/ui';
import { ROUTES } from '@/shared/config/routes';

const navItems = [
  { href: '/dashboard', label: 'Overview' },
  { href: `/dashboard${ROUTES.users}`, label: 'Users' },
  { href: `/dashboard${ROUTES.settings}`, label: 'Settings' },
  { href: '/', label: 'Marketing' },
];

export function DashboardHeader() {
  const { pathname } = useLocation();

  return (
    <Header
      brand="Dashboard"
      brandHref="/dashboard"
      navItems={navItems}
      currentPath={pathname}
      badge={
        <span className="repo-badge" style={{ marginLeft: '0.5rem' }}>
          dashboard :3001
        </span>
      }
    />
  );
}
