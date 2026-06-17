import type { ReactNode } from 'react';

export interface PageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  actions?: ReactNode;
}

export function PageShell({
  title,
  subtitle,
  children,
  actions,
}: PageShellProps) {
  return (
    <main className="repo-page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
          marginBottom: subtitle ? undefined : '2rem',
        }}
      >
        <div>
          <h1 className="repo-page__title">{title}</h1>
          {subtitle && <p className="repo-page__subtitle">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children}
    </main>
  );
}
