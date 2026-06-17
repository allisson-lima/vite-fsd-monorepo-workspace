import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardHomePage } from '@/pages/dashboard-home';
import { SettingsPage } from '@/pages/settings';
import { UsersPage } from '@/pages/users';
import { DashboardHeader } from '@/widgets/dashboard-header';
import { ROUTES } from '@/shared/config/routes';

export function AppRouter() {
  return (
    <BrowserRouter basename="/dashboard">
      <DashboardHeader />
      <Routes>
        <Route path={ROUTES.home} element={<DashboardHomePage />} />
        <Route path={ROUTES.users} element={<UsersPage />} />
        <Route path={ROUTES.settings} element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
