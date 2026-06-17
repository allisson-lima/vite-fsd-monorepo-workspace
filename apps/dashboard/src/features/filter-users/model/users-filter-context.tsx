import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { User } from '@repo/shared';
import { MOCK_USERS } from '@repo/shared';

type RoleFilter = User['role'] | 'all';

interface UsersFilterContextValue {
  role: RoleFilter;
  setRole: (role: RoleFilter) => void;
  filteredUsers: User[];
}

const UsersFilterContext = createContext<UsersFilterContextValue | null>(null);

export function UsersFilterProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<RoleFilter>('all');

  const filteredUsers = useMemo(() => {
    if (role === 'all') return MOCK_USERS;
    return MOCK_USERS.filter((user) => user.role === role);
  }, [role]);

  return (
    <UsersFilterContext.Provider value={{ role, setRole, filteredUsers }}>
      {children}
    </UsersFilterContext.Provider>
  );
}

export function useUsersFilter() {
  const context = useContext(UsersFilterContext);
  if (!context) {
    throw new Error('useUsersFilter must be used within UsersFilterProvider');
  }
  return context;
}
