export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  createdAt: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}

export interface ZoneInfo {
  name: string;
  port: number;
  basePath?: string;
  description: string;
}

export const ZONES: ZoneInfo[] = [
  {
    name: 'web',
    port: 3000,
    description: 'Shell — proxy dev entre zonas Vite',
  },
  {
    name: 'dashboard',
    port: 3001,
    basePath: '/dashboard',
    description: 'Zona admin — users, settings (FSD)',
  },
  {
    name: 'marketing',
    port: 3002,
    description: 'Zona pública — landing, about, features (FSD)',
  },
];

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Ana Silva',
    email: 'ana@example.com',
    role: 'admin',
    createdAt: '2025-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Bruno Costa',
    email: 'bruno@example.com',
    role: 'user',
    createdAt: '2025-02-20T14:30:00Z',
  },
  {
    id: '3',
    name: 'Carla Mendes',
    email: 'carla@example.com',
    role: 'viewer',
    createdAt: '2025-03-10T09:15:00Z',
  },
];

export { cn } from './utils/cn';
export { formatDate } from './utils/format-date';
