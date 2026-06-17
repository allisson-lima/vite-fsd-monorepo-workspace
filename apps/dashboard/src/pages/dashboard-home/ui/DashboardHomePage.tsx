import { Card, PageShell } from '@repo/ui';
import { ROUTES } from '@/shared/config/routes';

export function DashboardHomePage() {
  return (
    <PageShell
      title="Dashboard Overview"
      subtitle="Zona admin servida em apps/dashboard com base /dashboard/ (FSD)."
    >
      <div className="repo-grid repo-grid--3">
        <Card
          title="Users"
          description="Gerencie usuários mock compartilhados via @repo/shared."
        >
          <a
            href={`/dashboard${ROUTES.users}`}
            style={{ fontSize: '0.875rem', color: 'var(--color-primary)' }}
          >
            Ver usuários →
          </a>
        </Card>
        <Card title="Settings" description="Configurações demo da zona dashboard.">
          <a
            href={`/dashboard${ROUTES.settings}`}
            style={{ fontSize: '0.875rem', color: 'var(--color-primary)' }}
          >
            Abrir settings →
          </a>
        </Card>
        <Card
          title="Proxy Shell"
          description="Esta página é acessível via shell em localhost:3000/dashboard."
        >
          <p
            style={{
              margin: '0.5rem 0 0',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Deploy independente: build e publique só o dashboard sem afetar
            marketing.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
