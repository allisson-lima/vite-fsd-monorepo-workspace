import { Button, Card, PageShell } from '@repo/ui';

export function HomePage() {
  return (
    <PageShell
      title="Monorepo Frontend com Vite + FSD"
      subtitle="Aprenda Feature-Sliced Design, microfrontends com proxy shell, packages compartilhados e cache do Turborepo."
      actions={
        <a href="/dashboard">
          <Button>Acessar Dashboard</Button>
        </a>
      }
    >
      <div className="repo-grid repo-grid--3">
        <Card
          title="Feature-Sliced Design"
          description="Código organizado em camadas (pages, widgets, features, entities, shared) com regras de import claras."
        />
        <Card
          title="Packages compartilhados"
          description="@repo/ui e @repo/shared são buildados com TSUp e consumidos por todas as zonas."
        />
        <Card
          title="Turborepo"
          description="Pipeline com cache inteligente — builds só rodam onde houve mudança."
        />
      </div>
    </PageShell>
  );
}
