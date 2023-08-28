import { Routes, Route } from 'react-router-dom';

import { ProfileLayout } from './layout';
import {
  Login,
  Register,
  Forgot,
  Email,
  ConnectedApp,
  Products,
} from './pages';
import {
  LOGIN,
  REGISTER,
  FORGOT,
  EMAIL,
  CONNECTEDAPP,
  PRODUCTS,
} from './utils/routes';

export default function Application() {
  return (
    <Routes>
      {/* Authentication */}
      <Route path={LOGIN}>
        <Route index element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={FORGOT} element={<Forgot />} />
      </Route>

      {/* Manage profile */}
      <Route element={<ProfileLayout />}>
        <Route path={EMAIL} element={<Email />} />
        <Route path={CONNECTEDAPP} element={<ConnectedApp />} />
        <Route path={PRODUCTS} element={<Products />} />
      </Route>

      {/* Not found */}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
