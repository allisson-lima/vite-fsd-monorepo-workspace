import { Button } from '@repo/ui';
import type { User } from '@repo/shared';
import { useUsersFilter } from '../model/users-filter-context';

const roles: Array<User['role'] | 'all'> = ['all', 'admin', 'user', 'viewer'];

export function FilterUsers() {
  const { role, setRole } = useUsersFilter();

  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {roles.map((item) => (
        <Button
          key={item}
          variant={role === item ? 'primary' : 'secondary'}
          onClick={() => setRole(item)}
        >
          {item === 'all' ? 'Todos' : item}
        </Button>
      ))}
    </div>
  );
}
