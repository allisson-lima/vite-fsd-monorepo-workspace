# Feature-Sliced Design — Guia de estudo

Este documento explica como o FSD está aplicado neste monorepo e como decidir onde colocar código novo.

---

## O que é FSD?

**Feature-Sliced Design** é uma metodologia de arquitetura frontend que organiza código em **camadas horizontais** e **slices verticais** (por domínio/feature).

Benefícios para aprendizado e times:

- Limites claros — cada camada tem responsabilidade definida
- Escalabilidade — novos módulos sem bagunçar o existente
- Onboarding — estrutura previsível em qualquer app
- Testabilidade — slices isolados com public API

Documentação oficial: [feature-sliced.design](https://feature-sliced.design/)

---

## Camadas (de cima para baixo)

```
app → pages → widgets → features → entities → shared
```

| Camada | Responsabilidade | Exemplo neste repo |
|--------|------------------|-------------------|
| **app** | Bootstrap, providers, router, estilos globais | `apps/marketing/src/app/` |
| **pages** | Composição de uma rota/tela | `pages/home`, `pages/users` |
| **widgets** | Blocos UI compostos, reutilizáveis na page | `widgets/site-header` |
| **features** | Ação/interação do usuário | `features/theme-toggle`, `features/filter-users` |
| **entities** | Modelo de negócio + UI mínima | `entities/user` |
| **shared** | Utilitários locais do app (não confundir com `@repo/shared`) | `shared/config/routes` |

### Regra de import

Uma camada **só importa de camadas abaixo** (e de `@repo/ui` / `@repo/shared`):

```
✅ pages/home → widgets/site-header
✅ widgets/users-table → features/filter-users
✅ features/filter-users → entities/user
✅ entities/user → @repo/shared

❌ entities/user → features/filter-users  (invertido!)
❌ shared/config → pages/home             (invertido!)
```

O ESLint em `@repo/eslint-config/vite` reforça parte dessas regras via `no-restricted-imports`.

---

## Slices e segments

Cada slice vive em sua própria pasta:

```
features/filter-users/
├── ui/
│   └── FilterUsers.tsx      # segment ui — componentes
├── model/
│   └── users-filter-context.tsx  # segment model — estado/lógica
└── index.ts                 # public API — único ponto de export
```

### Public API

Sempre importe slices pelo `index.ts`:

```typescript
// ✅ Correto
import { FilterUsers } from '@/features/filter-users';

// ❌ Evite — acopla ao internals
import { FilterUsers } from '@/features/filter-users/ui/FilterUsers';
```

---

## Onde colocar código?

| Código | Onde |
|--------|------|
| Button, Card, PageShell (genérico, 2+ apps) | `@repo/ui` |
| Types User, MOCK_USERS, cn(), formatDate | `@repo/shared` |
| Rotas específicas do app | `shared/config/routes.ts` |
| Header do marketing | `widgets/site-header` |
| Toggle de tema (só marketing) | `features/theme-toggle` |
| Linha da tabela de usuário | `entities/user` |
| Filtro por role (só dashboard) | `features/filter-users` |

### Packages vs FSD local

- **Packages** (`@repo/ui`, `@repo/shared`): código **cross-app**, sem regra de camada FSD
- **Slices FSD**: código **específico do app**, com regras de import

Extraia para package quando **2+ apps** precisarem do mesmo código **e** ele for estável.

---

## Fluxo: adicionar tela de produtos

1. Criar slice `entities/product` (model + ProductCard)
2. Criar slice `features/add-to-cart` (botão + lógica)
3. Criar slice `widgets/product-grid` (compõe entities + features)
4. Criar slice `pages/products` (compõe widgets)
5. Registrar rota em `app/providers/router.tsx`
6. Exportar tudo via `index.ts` em cada slice

Veja checklist completo em [ADD-NEW-SLICE.md](./ADD-NEW-SLICE.md).

---

## Exemplos por app

### marketing

```
src/
├── app/providers/router.tsx    # React Router
├── pages/home|about|features
├── widgets/site-header
├── features/theme-toggle
└── shared/config/routes.ts
```

### dashboard

```
src/
├── app/providers/router.tsx    # basename="/dashboard"
├── pages/dashboard-home|users|settings
├── widgets/dashboard-header|users-table
├── features/filter-users
├── entities/user
└── shared/config/routes.ts
```

### web (shell)

Apenas `app/` — proxy dev, sem camadas FSD de negócio. Foco didático no papel de agregador.

---

## Alias `@/`

Configurado em `vite.config.ts` e `tsconfig.json`:

```typescript
import { HomePage } from '@/pages/home';
```

Mapeia para `src/` de cada app.

---

## Leitura complementar

- [ARCHITECTURE.md](./ARCHITECTURE.md) — proxy shell e packages
- [ADD-NEW-SLICE.md](./ADD-NEW-SLICE.md) — checklist prático
