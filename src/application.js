import { Routes, Route } from 'react-router-dom';

import { Login, Register } from './pages';
import { LOGIN, REGISTER } from './utils/routes';

export default function Application() {
  return (
    <Routes>
      <Route path={LOGIN}>
        <Route index element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
      </Route>
    </Routes>
  );
}
