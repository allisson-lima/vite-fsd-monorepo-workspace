import { UserRow } from '@/entities/user';
import { useUsersFilter } from '@/features/filter-users';

export function UsersTable() {
  const { filteredUsers } = useUsersFilter();

  return (
    <div className="repo-card" style={{ padding: 0, overflow: 'hidden' }}>
      <table className="repo-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Role</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
