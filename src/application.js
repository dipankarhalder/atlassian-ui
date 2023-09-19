import { Routes, Route } from 'react-router-dom';

import { AuthLayout, ProfileLayout, DashboardLayout } from './layout';
import {
  Login,
  Register,
  Forgot,
  DashboardStart,
  ProfileAndVisibility,
  Email,
  Security,
  Preferences,
  ConnectedApp,
  Products,
} from './pages';
import {
  LOGIN,
  REGISTER,
  FORGOT,
  DASHBOARD,
  PROFILEVISIBLE,
  EMAIL,
  SECURITY,
  PREFERENCES,
  CONNECTEDAPP,
  PRODUCTS,
} from './utils/routes';

export default function Application() {
  return (
    <Routes>
      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={FORGOT} element={<Forgot />} />
      </Route>

      {/* Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path={DASHBOARD} element={<DashboardStart />} />
      </Route>

      {/* Manage profile */}
      <Route element={<ProfileLayout />}>
        <Route path={PROFILEVISIBLE} element={<ProfileAndVisibility />} />
        <Route path={EMAIL} element={<Email />} />
        <Route path={SECURITY} element={<Security />} />
        <Route path={PREFERENCES} element={<Preferences />} />
        <Route path={CONNECTEDAPP} element={<ConnectedApp />} />
        <Route path={PRODUCTS} element={<Products />} />
      </Route>

      {/* Not found */}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
