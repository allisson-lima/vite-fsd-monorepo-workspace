import type { User } from '@repo/shared';

export interface BadgeProps {
  role: User['role'];
}

const roleClass: Record<User['role'], string> = {
  admin: 'repo-badge repo-badge--admin',
  user: 'repo-badge repo-badge--user',
  viewer: 'repo-badge repo-badge--viewer',
};

export function RoleBadge({ role }: BadgeProps) {
  return <span className={roleClass[role]}>{role}</span>;
}
