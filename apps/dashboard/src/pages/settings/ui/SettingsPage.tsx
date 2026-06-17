import { Card, PageShell } from '@repo/ui';

export function SettingsPage() {
  return (
    <PageShell
      title="Settings"
      subtitle="Módulo de configurações — evolui independentemente das outras zonas."
    >
      <div className="repo-grid repo-grid--2">
        <Card title="Notificações">
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
            }}
          >
            <input type="checkbox" defaultChecked />
            Receber alertas de deploy
          </label>
        </Card>
        <Card title="Tema">
          <p
            style={{
              margin: 0,
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Design system compartilhado via @repo/ui — altere uma vez, reflita
            em todas as zonas.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
