import { Routes, Route } from 'react-router-dom';

import { Login, Register, Forgot } from './pages';
import { LOGIN, REGISTER, FORGOT } from './utils/routes';

export default function Application() {
  return (
    <Routes>
      <Route path={LOGIN}>
        <Route index element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={FORGOT} element={<Forgot />} />
      </Route>
    </Routes>
  );
}
