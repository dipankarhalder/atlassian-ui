import { HiOutlineDotsVertical } from 'react-icons/hi';

import google from '../../../assets/images/google.svg';

export const Email = () => {
  return (
    <div className="app-profile-setup">
      <div className="app-pro-heading">
        <h1>Email</h1>
      </div>
      <div className="app-profile-current-email">
        <h3>Current Email</h3>
        <p>
          our current email address is <span>webmail.dip@gmail.com</span>&nbsp;
          <em>(Primary Email)</em>
        </p>
      </div>
      <div className="app-profile-email">
        <div className="app-profile-other-email">
          <div className="app-mail-item">
            <span>
              <img src={google} alt="Google" />
            </span>
            <p>Log in with Google enabled</p>
            <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
};
