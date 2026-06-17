import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from '@/pages/about';
import { FeaturesPage } from '@/pages/features';
import { HomePage } from '@/pages/home';
import { SiteHeader } from '@/widgets/site-header';
import { ROUTES } from '@/shared/config/routes';

export function AppRouter() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
        <Route path={ROUTES.features} element={<FeaturesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
