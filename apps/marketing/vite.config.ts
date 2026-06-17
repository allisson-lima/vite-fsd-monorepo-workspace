import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoRoot = path.resolve(__dirname, '../..');

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3002,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@repo/ui': path.resolve(repoRoot, 'packages/ui/src'),
      '@repo/ui/styles.css': path.resolve(repoRoot, 'packages/ui/src/styles.css'),
      '@repo/shared': path.resolve(repoRoot, 'packages/shared/src'),
    },
  },
});
