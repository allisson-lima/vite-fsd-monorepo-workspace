import type { User } from '@repo/shared';
import { formatDate } from '@repo/shared';
import { RoleBadge } from '@repo/ui';

export function UserRow({ user }: { user: User }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <RoleBadge role={user.role} />
      </td>
      <td>{formatDate(user.createdAt)}</td>
    </tr>
  );
}
