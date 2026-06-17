import { PageShell } from '@repo/ui';
import { FilterUsers, UsersFilterProvider } from '@/features/filter-users';
import { UsersTable } from '@/widgets/users-table';

export function UsersPage() {
  return (
    <UsersFilterProvider>
      <PageShell
        title="Users"
        subtitle="Demonstração FSD: feature filter-users + widget users-table + entity user."
        actions={<FilterUsers />}
      >
        <UsersTable />
      </PageShell>
    </UsersFilterProvider>
  );
}
