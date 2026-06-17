import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const repoRoot = path.resolve(__dirname, '../..');

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, repoRoot, '');
  const dashboardUrl = env.DASHBOARD_URL ?? 'http://localhost:3001';
  const marketingUrl = env.MARKETING_URL ?? 'http://localhost:3002';

  return {
    appType: 'custom',
    plugins: [react()],
    base: '/',
    server: {
      port: 3000,
      strictPort: true,
      proxy: {
        '/dashboard': {
          target: dashboardUrl,
          changeOrigin: true,
        },
        '/@vite': {
          target: marketingUrl,
          changeOrigin: true,
        },
        '/@fs': {
          target: marketingUrl,
          changeOrigin: true,
        },
        '/src': {
          target: marketingUrl,
          changeOrigin: true,
        },
        '/node_modules': {
          target: marketingUrl,
          changeOrigin: true,
        },
        '/assets': {
          target: marketingUrl,
          changeOrigin: true,
        },
        '^/(?!dashboard).*': {
          target: marketingUrl,
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@repo/ui': path.resolve(repoRoot, 'packages/ui/src'),
        '@repo/ui/styles.css': path.resolve(
          repoRoot,
          'packages/ui/src/styles.css',
        ),
        '@repo/shared': path.resolve(repoRoot, 'packages/shared/src'),
      },
    },
  };
});
