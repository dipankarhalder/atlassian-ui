import { mprofile } from '../../../utils/content';
import mainProfile from '../main.module.css';

export const ProfileAndVisibility = () => {
  return (
    <div className={mainProfile.appProfileSetup}>
      <div className={mainProfile.appProHeading}>
        <h1>{mprofile.prof.heading}</h1>
      </div>
      <div className={mainProfile.appProDescpt}>
        <p>{mprofile.prof.desc}</p>
      </div>
    </div>
  );
};
