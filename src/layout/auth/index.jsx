import { Outlet } from 'react-router-dom';

import { useAuthenticator } from '../../hooks/useAuthenticator';
import { LOGIN, DASHBOARD } from '../../utils/routes';

import mainLayout from '../main.module.css';

export function AuthLayout() {
  useAuthenticator(DASHBOARD, LOGIN);

  return (
    <div className={mainLayout.appAuthWrapper}>
      <div className={mainLayout.appAuthContent}>
        <Outlet />
      </div>
    </div>
  );
}
