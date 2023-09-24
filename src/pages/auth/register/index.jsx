import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import mainAuth from '../main.module.css';
import { Input, Button } from '../../../shared';
import {
  AuthLogo,
  AuthHead,
  AuthContinue,
  AuthSocialItem,
  AuthFooter,
} from '../../../components';
import { content } from '../../../utils/content';
import { LOGIN, REGISTER, DASHBOARD } from '../../../utils/routes';
import { useAuthenticator } from '../../../hooks/useAuthenticator';

export function Register() {
  useAuthenticator(DASHBOARD, REGISTER);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Fragment>
      <AuthLogo content={content.common} />
      <AuthHead content={content.register} />
      <AuthSocialItem content={content.social} />
      <AuthContinue content={content.common} />
      <div className={mainAuth.appFormCover}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={mainAuth.frmname}>
            <Input
              type="text"
              label={content.register.reg_fname}
              valText={content.register.reg_fname_txt}
              register={register}
            />
            <Input
              type="text"
              label={content.register.reg_lname}
              valText={content.register.reg_lname_txt}
              register={register}
            />
          </div>
          <Input
            type="email"
            label={content.register.reg_email}
            valText={content.register.place_email_txt}
            register={register}
            required
          />
          <Input
            type="password"
            label={content.register.password}
            valText={content.register.place_pass_txt}
            register={register}
            required
          />
          <p>
            {content.register.reg_foot}{' '}
            <span>{content.register.reg_foot_blue}</span>{' '}
            {content.register.reg_foot_other}{' '}
            <span>{content.register.reg_foot_last}</span>.
          </p>
          <Button label={content.register.btn_signup} typebtn="submit" />
        </form>
      </div>
      <div className={mainAuth.appAuthLinks}>
        <Link to={LOGIN}>{content.register.login_link}</Link>
      </div>
      <AuthFooter content={content.common} />
    </Fragment>
  );
}
