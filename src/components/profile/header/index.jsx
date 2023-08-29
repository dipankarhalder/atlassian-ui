import { HiViewGridAdd } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

import altlogo from '../../../assets/images/logo.svg';

import proHeader from './proHeader.module.css';
import { mprofile } from '../../../utils/content';
import { EMAIL, CONNECTEDAPP, PRODUCTS } from '../../../utils/routes';

export const ProfileHeader = () => {
  const profileNav = [
    { title: 'Profile and visibility', path: '/' },
    { title: 'Email', path: EMAIL },
    { title: 'Security', path: '/' },
    { title: 'Preferences', path: '/' },
    { title: 'Connected Apps', path: CONNECTEDAPP },
    { title: 'Products', path: PRODUCTS },
  ];

  return (
    <div className={proHeader.appProfileHeader}>
      <div className={proHeader.appNavCover}>
        <div className={proHeader.appNavHead}>
          <HiViewGridAdd />
        </div>
        <div className={proHeader.appHeaderLogo}>
          <img src={altlogo} alt={mprofile.common.atlas} />
          <h1>{mprofile.common.page_name}</h1>
        </div>
        <div className={proHeader.appNavLinks}>
          <ul>
            {profileNav.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'navActive' : '')}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={proHeader.appAvatar}>
        <span>DH</span>
      </div>
    </div>
  );
};
