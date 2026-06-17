import { Card, PageShell } from '@repo/ui';

export function AboutPage() {
  return (
    <PageShell
      title="Sobre este projeto"
      subtitle="Projeto de aprendizagem — não é um produto pronto para produção."
    >
      <div className="repo-grid repo-grid--2">
        <Card title="Por que monorepo?">
          <p
            style={{
              margin: '0.5rem 0 0',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
            }}
          >
            Centraliza código compartilhado, simplifica refactors e permite um
            único PR para mudanças que afetam múltiplas aplicações.
          </p>
        </Card>
        <Card title="Por que FSD?">
          <p
            style={{
              margin: '0.5rem 0 0',
              color: 'var(--color-text-muted)',
              fontSize: '0.875rem',
            }}
          >
            Feature-Sliced Design impõe limites arquiteturais que escalam com o
            time — cada camada tem responsabilidade e regras de import.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
