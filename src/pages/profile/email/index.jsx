import { HiOutlineDotsVertical, HiOutlineMail } from 'react-icons/hi';

import mainProfile from '../main.module.css';
import google from '../../../assets/images/google.svg';
import microsoft from '../../../assets/images/microsoft.svg';
import apple from '../../../assets/images/apple.svg';

export const Email = () => {
  return (
    <div className={mainProfile.appProfileSetup}>
      <div className={mainProfile.appProHeading}>
        <h1>Email</h1>
      </div>
      <div className={mainProfile.appProfileCurrentEmail}>
        <h3>Current Email</h3>
        <p>
          Your current email address is &nbsp;{' '}
          <span>webmail.dip@gmail.com</span>
        </p>
      </div>
      <div className={mainProfile.appProfileEmail}>
        <div className={mainProfile.appProfileOtherEmail}>
          <div className={mainProfile.wrapEmail}>
            <div className={mainProfile.appMailItem}>
              <span>
                <img src={google} alt="Google" />
              </span>
              <p>Connected with Google</p>
            </div>
            <em>(Primary Email)</em>
          </div>
        </div>
      </div>
      <div className={mainProfile.appProfileHeadEmail}>
        <h3>Other Connected Accounts</h3>
      </div>
      <div className={mainProfile.appProfileEmail}>
        <div className={mainProfile.appProfileOtherEmail}>
          <div className={mainProfile.wrapColumnEmail}>
            <div className={mainProfile.appMailItem}>
              <span>
                <img src={apple} alt="Apple" />
              </span>
              <p>Connected with Apple</p>
              <HiOutlineDotsVertical />
            </div>
            <div className={mainProfile.appMailItem}>
              <span>
                <img src={microsoft} alt="Microsoft" />
              </span>
              <p>Connected with Microsoft</p>
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
      </div>
      <div className={mainProfile.appProfileHeadEmail}>
        <h3>Connect with Email</h3>
      </div>
      <div className={mainProfile.appProfileEmail}>
        <div className={mainProfile.appProfileOtherEmail}>
          <div className={mainProfile.wrapAddEmail}>
            <div className={mainProfile.appAddMailItem}>
              <span>
                <HiOutlineMail />
              </span>
              <p>Add New Email</p>
            </div>
          </div>
        </div>
      </div>
      <div className={mainProfile.appProfileHeadEmail}>
        <h3>Email Notifications</h3>
        <p>
          To manage what emails you get, visit the &nbsp;
          <span>email preferences center.</span>
        </p>
      </div>
    </div>
  );
};
