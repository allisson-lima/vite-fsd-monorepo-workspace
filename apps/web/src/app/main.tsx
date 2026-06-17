import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@repo/ui/styles.css';
import { ShellFallback } from './ShellFallback';
import './styles/index.css';

/**
 * O shell em dev funciona via proxy (vite.config.ts).
 * Esta UI só aparece se o proxy não estiver ativo ou em build estático.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShellFallback />
  </StrictMode>,
);
