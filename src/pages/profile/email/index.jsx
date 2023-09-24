import { HiOutlineDotsVertical, HiOutlineX } from 'react-icons/hi';
import { useForm } from 'react-hook-form';

import { mprofile } from '../../../utils/content';
import { Input, Button } from '../../../shared';

import mainProfile from '../main.module.css';
import google from '../../../assets/images/google.svg';
import microsoft from '../../../assets/images/microsoft.svg';
import apple from '../../../assets/images/apple.svg';

export const Email = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className={mainProfile.appProfileSetup}>
      <div className={mainProfile.appProHeading}>
        <h1>{mprofile.email.heading}</h1>
      </div>
      <div className={mainProfile.appProfileCurrentEmail}>
        <h3>{mprofile.email.cemail}</h3>
        <p>
          {mprofile.email.emaildesc} &nbsp;{' '}
          <span>{mprofile.email.emailtitle}</span>
        </p>
      </div>
      <div className={mainProfile.appProfileEmail}>
        <div className={mainProfile.appProfileOtherEmail}>
          <div className={mainProfile.wrapEmail}>
            <div className={mainProfile.appMailItem}>
              <span>
                <img src={google} alt="Google" />
              </span>
              <p>{mprofile.email.conntext}</p>
            </div>
            <em>{mprofile.email.primary}</em>
          </div>
        </div>
      </div>
      <div className={mainProfile.appProfileHeadEmail}>
        <h3>{mprofile.email.heading_one}</h3>
      </div>
      <div className={mainProfile.appProfileEmail}>
        <div className={mainProfile.appProfileOtherEmail}>
          <div className={mainProfile.wrapColumnEmail}>
            <div className={mainProfile.appMailItem}>
              <span>
                <img src={apple} alt="Apple" />
              </span>
              <p>{mprofile.email.connapple}</p>
              <HiOutlineDotsVertical />
            </div>
            <div className={mainProfile.appMailItem}>
              <span>
                <img src={microsoft} alt="Microsoft" />
              </span>
              <p>{mprofile.email.connms}</p>
              <HiOutlineDotsVertical />
            </div>
          </div>
        </div>
      </div>
      <div className={mainProfile.appProfileHeadEmail}>
        <h3>{mprofile.email.heading_two}</h3>
      </div>
      <div className={mainProfile.appEmailLists}>
        <ul>
          <li>
            {mprofile.email.c_email_lo} <HiOutlineX />
          </li>
          <li>
            {mprofile.email.c_email_lt} <HiOutlineX />
          </li>
        </ul>
      </div>
      <div
        className={`${mainProfile.appProfileCurrentEmail} ${mainProfile.appMarginTop}`}
      >
        <div
          className={`${mainProfile.appProfileSecForm} ${mainProfile.appPaddingWrap} ${mainProfile.appMarginTop}`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={mprofile.email.f_email}
              valText={mprofile.email.f_email}
              register={register}
              required
            />
            <div
              className={`${mainProfile.buttonProfile} ${mainProfile.buttonExt}`}
            >
              <Button label={mprofile.email.f_btn} typebtn="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className={mainProfile.appProfileHeadEmail}>
        <h3>{mprofile.email.heading_notification}</h3>
        <p>
          {mprofile.email.head_pro_text} &nbsp;
          <span>{mprofile.email.head_other}</span>
        </p>
      </div>
    </div>
  );
};
