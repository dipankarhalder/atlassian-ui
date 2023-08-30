import { HiViewGridAdd } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

import altlogo from '../../../assets/images/logo.svg';

import mainProfile from '../main.module.css';
import { mprofile } from '../../../utils/content';
import {
  EMAIL,
  SECURITY,
  PREFERENCES,
  CONNECTEDAPP,
  PRODUCTS,
} from '../../../utils/routes';

export const ProfileHeader = () => {
  const profileNav = [
    { title: 'Profile and visibility', path: '/' },
    { title: 'Email', path: EMAIL },
    { title: 'Security', path: SECURITY },
    { title: 'Preferences', path: PREFERENCES },
    { title: 'Connected Apps', path: CONNECTEDAPP },
    { title: 'Products', path: PRODUCTS },
  ];

  return (
    <div className={mainProfile.appProfileHeader}>
      <div className={mainProfile.appNavCover}>
        <div className={mainProfile.appNavHead}>
          <HiViewGridAdd />
        </div>
        <div className={mainProfile.appHeaderLogo}>
          <img src={altlogo} alt={mprofile.common.atlas} />
          <h1>{mprofile.common.page_name}</h1>
        </div>
        <div className={mainProfile.appNavLinks}>
          <ul>
            {profileNav.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? `${mainProfile.navActive}` : ''
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={mainProfile.appAvatar}>
        <span>DH</span>
      </div>
    </div>
  );
};
