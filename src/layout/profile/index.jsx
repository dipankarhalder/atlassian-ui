import { Outlet } from 'react-router-dom';
import { ProfileHeader } from '../../components';

import proLayout from './proLayout.module.css';

export const ProfileLayout = () => {
  return (
    <div className={proLayout.appProfileWrapper}>
      <ProfileHeader />
      <div className={proLayout.appProfileContent}>
        <div className={proLayout.appProfileContentCover}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
