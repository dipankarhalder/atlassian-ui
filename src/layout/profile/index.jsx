import { Outlet } from 'react-router-dom';

import { useAuthenticator } from '../../hooks/useAuthenticator';
import { LOGIN, PROFILEVISIBLE } from '../../utils/routes';
import { ProfileHeader } from '../../components';

import mainLayout from '../main.module.css';

export const ProfileLayout = () => {
  useAuthenticator(PROFILEVISIBLE, LOGIN);

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
