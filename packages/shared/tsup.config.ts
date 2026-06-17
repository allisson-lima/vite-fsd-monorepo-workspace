import { defineConfig } from 'tsup';

const isWatch = process.argv.includes('--watch');

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: !isWatch,
  sourcemap: true,
});
