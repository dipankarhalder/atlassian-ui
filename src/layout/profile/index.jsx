import { Outlet } from 'react-router-dom';
import { ProfileHeader } from '../../components';

import mainLayout from '../main.module.css';

export const ProfileLayout = () => {
  return (
    <div className={mainLayout.appProfileWrapper}>
      <ProfileHeader />
      <div className={mainLayout.appProfileContent}>
        <div className={mainLayout.appProfileContentCover}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
