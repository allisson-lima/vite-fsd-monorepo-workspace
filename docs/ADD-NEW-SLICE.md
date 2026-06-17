# Adicionar novo slice FSD

Checklist para adicionar uma page, widget, feature ou entity.

---

## 1. Escolher a camada

| Preciso de… | Camada |
|-------------|--------|
| Nova rota/tela | `pages/` |
| Bloco UI composto (header, grid) | `widgets/` |
| Ação do usuário (form, filtro, toggle) | `features/` |
| Modelo de negócio (user, product) | `entities/` |
| Config/lib local do app | `shared/` |

---

## 2. Criar estrutura do slice

Exemplo: feature `export-users` no dashboard

```
apps/dashboard/src/features/export-users/
├── ui/
│   └── ExportUsersButton.tsx
├── model/
│   └── useExportUsers.ts
└── index.ts
```

---

## 3. Public API (`index.ts`)

```typescript
export { ExportUsersButton } from './ui/ExportUsersButton';
```

Exporte **apenas** o que outras camadas precisam.

---

## 4. Respeitar imports

- `features/export-users` pode importar `@/entities/user`, `@repo/shared`
- **Não** importar `@/pages/users` ou `@/widgets/users-table`

---

## 5. Conectar na page ou widget

```typescript
// pages/users/ui/UsersPage.tsx
import { ExportUsersButton } from '@/features/export-users';

// usar no JSX
```

---

## 6. Registrar rota (se for page nova)

```typescript
// app/providers/router.tsx
import { ProductsPage } from '@/pages/products';

<Route path="/products" element={<ProductsPage />} />
```

Adicionar path em `shared/config/routes.ts`.

---

## 7. Validar

```bash
npm run lint --workspace=dashboard
npm run type-check --workspace=dashboard
```

ESLint deve bloquear imports invertidos entre camadas.

---

## Extrair para package?

Mova para `@repo/ui` ou `@repo/shared` quando:

- [ ] 2+ apps precisam do mesmo código
- [ ] API está estável
- [ ] Não depende de contexto específico de um app

Veja [FSD-GUIDE.md](./FSD-GUIDE.md#onde-colocar-código).
