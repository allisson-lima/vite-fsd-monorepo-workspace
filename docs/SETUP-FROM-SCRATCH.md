# Setup from scratch

Passo a passo para recriar este monorepo do zero.

---

## 1. Raiz

```bash
mkdir vite-fsd-monorepo-workspace && cd vite-fsd-monorepo-workspace
npm init -y
```

Edite `package.json`:

- `workspaces`: `["apps/*", "packages/*"]`
- Scripts: `dev`, `build`, `lint`, `type-check`, `syncpack:*`, `format`
- DevDeps: `turbo@2.5.4`, `typescript`, `prettier`, `syncpack`

Crie `turbo.json`, `.prettierrc`, `.nvmrc`, `.syncpackrc.cjs`, `.gitignore`.

---

## 2. Packages de config

### `@repo/typescript-config`

```
packages/typescript-config/
├── package.json
├── base.json
├── vite.json
└── react-library.json
```

`vite.json` estende `base.json` com `moduleResolution: bundler` e `jsx: react-jsx`.

### `@repo/eslint-config`

```
packages/eslint-config/
├── package.json
├── base.js
└── vite.js    # React + regras FSD
```

---

## 3. Packages de código

### `@repo/shared`

```bash
mkdir -p packages/shared/src/utils
```

- TSUp config, types, utils, mocks
- `npm run build --workspace=@repo/shared`

### `@repo/ui`

- Componentes React + `styles.css`
- TSUp **sem** banner `"use client"`
- Peer deps: `react`, `react-dom`

---

## 4. Apps Vite

Para cada app (`marketing`, `dashboard`, `web`):

```bash
mkdir -p apps/marketing/src/app
```

Arquivos mínimos:

- `package.json` — vite, @vitejs/plugin-react, react-router-dom (zonas)
- `vite.config.ts` — alias `@/`, porta, `base` (dashboard)
- `tsconfig.json` — extends `@repo/typescript-config/vite.json`
- `index.html` — entry `/src/app/main.tsx`
- `eslint.config.js` — extends `@repo/eslint-config/vite`

### marketing

Estrutura FSD: `pages/`, `widgets/`, `features/`, `shared/`

### dashboard

- `base: '/dashboard/'`
- `BrowserRouter basename="/dashboard"`
- FSD: `entities/`, `features/`

### web (shell)

- `appType: 'custom'`
- `server.proxy` para dashboard e marketing
- Env: `DASHBOARD_URL`, `MARKETING_URL`

---

## 5. Instalar e validar

```bash
npm install
npm run build
npm run type-check
npm run dev
```

Acesse http://localhost:3000

---

## 6. Documentação

Crie `docs/` com FSD-GUIDE, ARCHITECTURE, TURBOREPO-GUIDE, ADD-NEW-SLICE.

---

## Checklist final

- [ ] `npm run build` passa
- [ ] `npm run type-check` passa
- [ ] Shell :3000 proxy funciona
- [ ] Dashboard :3001 com `/dashboard/` base
- [ ] Marketing :3002 rotas `/`, `/about`, `/features`
- [ ] Syncpack sem mismatches
