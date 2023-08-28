import { Routes, Route } from 'react-router-dom';

import { Login, Register, Forgot, Products } from './pages';
import { LOGIN, REGISTER, FORGOT, PRODUCTS } from './utils/routes';

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
      <Route path={PRODUCTS}>
        <Route index element={<Products />} />
      </Route>
    </Routes>
  );
}
