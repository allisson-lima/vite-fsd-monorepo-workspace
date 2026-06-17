import { Card, PageShell } from '@repo/ui';
import { ZONES } from '@repo/shared';

export function ShellFallback() {
  return (
    <PageShell
      title="Shell — Ponto de entrada"
      subtitle="Em dev, acesse localhost:3000 — o proxy encaminha rotas para marketing e dashboard."
    >
      <div className="repo-grid repo-grid--2">
        <Card title="Como funciona">
          <p
            style={{
              margin: '0.5rem 0 0',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
            }}
          >
            O shell usa <code>server.proxy</code> do Vite — equivalente aos
            rewrites do Next.js Multi-Zones. Você vê esta página apenas quando
            acessa o shell diretamente sem proxy ativo.
          </p>
        </Card>
        <Card title="Zonas">
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
                <strong>{zone.name}</strong> — :{zone.port} — {zone.description}
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <p style={{ marginTop: '2rem', fontSize: '0.875rem' }}>
        <a href="/" style={{ color: 'var(--color-primary)' }}>
          Ir para Marketing (/)
        </a>
        {' · '}
        <a href="/dashboard" style={{ color: 'var(--color-primary)' }}>
          Ir para Dashboard (/dashboard)
        </a>
      </p>
    </PageShell>
  );
}
