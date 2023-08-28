import { HiViewGridAdd } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

import altlogo from '../../../assets/images/logo.svg';
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
    <div className="app-profile-header">
      <div className="app-nav-cover">
        <div className="app-nav-head">
          <HiViewGridAdd />
        </div>
        <div className="app-header-logo">
          <img src={altlogo} alt={mprofile.common.atlas} />
          <h1>{mprofile.common.page_name}</h1>
        </div>
        <div className="app-nav-links">
          <ul>
            {profileNav.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="app-avatar">
        <span>DH</span>
      </div>
    </div>
  );
};
