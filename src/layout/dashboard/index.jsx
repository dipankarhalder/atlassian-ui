import { Outlet } from 'react-router-dom';

import { useAuthenticator } from '../../hooks/useAuthenticator';
import { LOGIN, DASHBOARD } from '../../utils/routes';

export const DashboardLayout = () => {
  useAuthenticator(DASHBOARD, LOGIN);

  return (
    <div>
      <Outlet />
    </div>
  );
};
