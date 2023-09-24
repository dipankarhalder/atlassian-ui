import { Outlet } from 'react-router-dom';
import mainLayout from '../main.module.css';

export function AuthLayout() {
  return (
    <div className={mainLayout.appAuthWrapper}>
      <div className={mainLayout.appAuthContent}>
        <Outlet />
      </div>
    </div>
  );
}
