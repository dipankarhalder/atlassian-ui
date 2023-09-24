import { Outlet } from 'react-router-dom';
import mainLayout from '../main.module.css';

export const DashboardLayout = () => {
  return (
    <div className={mainLayout.appProfileWrapper}>
      <Outlet />
    </div>
  );
};
