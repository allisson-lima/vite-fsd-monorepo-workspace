# Guia Turborepo

Referência prática para o pipeline, cache e ferramentas do monorepo Vite + FSD.

---

## turbo.json

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "dependsOn": ["^build"],
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

### Campos importantes

| Campo | Função |
|-------|--------|
| `dependsOn: ["^build"]` | Roda `build` das **dependências** antes (shared → ui → apps) |
| `outputs` | Arquivos cacheados — `dist/**` para Vite e TSUp |
| `cache: false` | Dev nunca cacheia (processos persistentes) |
| `persistent: true` | Dev servers ficam rodando |

O `^` significa **dependências do workspace** (packages em `dependencies` do `package.json`).

---

## Ordem de execução

```
npm run dev
  ├── @repo/shared build (TSUp)
  ├── @repo/ui build (TSUp)
  ├── marketing dev (:3002)
  ├── dashboard dev (:3001)
  └── web dev (:3000) — proxy
```

---

## Cache local

```bash
npm run build   # primeira vez
npm run build   # segunda vez: Cached (milissegundos)
```

Invalidar:

```bash
npx turbo build --force
```

---

## Filtros

```bash
npx turbo build --filter=dashboard
npx turbo dev --filter=marketing...
npx turbo build --filter=!web
npx turbo build --filter=@repo/*
```

---

## Syncpack

```bash
npm run syncpack:check
npm run syncpack:fix
```

Grupos em `.syncpackrc.cjs`:

- `react`, `react-dom`, `vite`, `typescript`, `eslint` — mesma versão em todos os workspaces
- `@repo/*` — protocolo `*`

Duas versões de React causam `Invalid hook call` em runtime.

---

## TSUp

Packages `@repo/shared` e `@repo/ui`:

```bash
npm run build --workspace=@repo/shared
npm run dev --workspace=@repo/shared   # watch
```

Apps Vite consomem o output `dist/` após `^build`.

---

## Workspaces npm

```json
"workspaces": ["apps/*", "packages/*"]
```

```bash
npm install axios --workspace=dashboard
npm install -D prettier -w .
```

**Turborepo** orquestra tasks; **npm workspaces** linka dependências `@repo/*`.

---

## Comandos úteis

```bash
npx turbo run build --graph
npx turbo run build --dry-run
npx turbo run build --output-logs=full
```

---

## CI/CD (sugestão)

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run syncpack:check
      - run: npm run build
      - run: npm run lint
      - run: npm run type-check
```
