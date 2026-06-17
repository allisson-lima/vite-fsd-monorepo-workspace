import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import baseConfig from './base.js';

/** FSD layer import rules — didactic enforcement */
const fsdLayers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

function layerPattern(layer) {
  return `@/${layer}/**/*`;
}

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  {
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/app/**'],
              message:
                'FSD: camadas inferiores não importam app. Use pages/widgets/features/entities/shared.',
            },
          ],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/src/shared/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/entities/**',
                '@/features/**',
                '@/widgets/**',
                '@/pages/**',
                '@/app/**',
              ],
              message: 'FSD: shared não importa camadas superiores.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/src/entities/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/features/**',
                '@/widgets/**',
                '@/pages/**',
                '@/app/**',
              ],
              message: 'FSD: entities não importa features, widgets, pages ou app.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/src/features/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/widgets/**', '@/pages/**', '@/app/**'],
              message: 'FSD: features não importa widgets, pages ou app.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/src/widgets/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/pages/**', '@/app/**'],
              message: 'FSD: widgets não importa pages ou app.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/src/pages/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/app/**'],
              message: 'FSD: pages não importa app diretamente (use widgets/features).',
            },
          ],
        },
      ],
    },
  },
];

// Export layer list for documentation reference
export { fsdLayers, layerPattern };
