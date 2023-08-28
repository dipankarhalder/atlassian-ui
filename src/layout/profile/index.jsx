import { Outlet } from 'react-router-dom';
import { ProfileHeader } from '../../components';

export const ProfileLayout = () => {
  return (
    <div className="app-profile-wrapper">
      <ProfileHeader />
      <div className="app-profile-content">
        <div className="app-profile-content-cover">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
