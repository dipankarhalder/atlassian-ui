import { HiOutlineDotsVertical } from 'react-icons/hi';

import emailStyle from './email.module.css';
import google from '../../../assets/images/google.svg';

export const Email = () => {
  return (
    <div className={emailStyle.appProfileSetup}>
      <div className={emailStyle.appProHeading}>
        <h1>Email</h1>
      </div>
      <div className={emailStyle.appProfileCurrentEmail}>
        <h3>Current Email</h3>
        <p>
          our current email address is <span>webmail.dip@gmail.com</span>&nbsp;
          <em>(Primary Email)</em>
        </p>
      </div>
      <div className={emailStyle.appProfileEmail}>
        <div className={emailStyle.appProfileOtherEmail}>
          <div className={emailStyle.appMailItem}>
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
