import { Card, PageShell } from '@repo/ui';
import { ZONES } from '@repo/shared';

export function FeaturesPage() {
  return (
    <PageShell
      title="Features do workspace"
      subtitle="Componentes e ferramentas incluídos neste monorepo de estudo."
    >
      <div className="repo-grid repo-grid--2">
        <Card title="Ferramentas">
          <ul
            style={{
              margin: '0.5rem 0 0',
              paddingLeft: '1.25rem',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
            }}
          >
            <li>Turborepo — orquestração e cache</li>
            <li>Vite — bundler rápido para SPAs</li>
            <li>TSUp — build de packages TypeScript</li>
            <li>Syncpack — versões consistentes</li>
            <li>ESLint com regras FSD</li>
          </ul>
        </Card>
        <Card title="Zonas ativas">
          <ul
            style={{
              margin: '0.5rem 0 0',
              paddingLeft: '1.25rem',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
            }}
          >
            {ZONES.map((zone) => (
              <li key={zone.name}>
                <strong>{zone.name}</strong> — porta {zone.port}
                {zone.basePath ? ` (${zone.basePath})` : ''}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </PageShell>
  );
}
