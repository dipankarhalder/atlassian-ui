import { ProfileHeader } from '../../components';

export const ProfileLayout = ({ children }) => {
  return (
    <div className="app-profile-wrapper">
      <ProfileHeader />
      <div className="app-profile-content">
        <div className="app-profile-content-cover">{children}</div>
      </div>
    </div>
  );
};
