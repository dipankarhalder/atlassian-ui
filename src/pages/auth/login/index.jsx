import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { token, userAuth, userInfo, content } from '../../../utils/content';
import { LOGIN, REGISTER, FORGOT, DASHBOARD } from '../../../utils/routes';
import { useAuthenticator } from '../../../hooks/useAuthenticator';

export function Login() {
  useAuthenticator(DASHBOARD, LOGIN);

  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { username, password } = data;
    if (username === userAuth.email && password === userAuth.password) {
      localStorage.setItem('userToken', token);
      localStorage.setItem('useInfo', JSON.stringify(userInfo));
      navigate(DASHBOARD);
    }
  };

  return (
    <Fragment>
      <AuthLogo content={content.common} />
      <AuthHead content={content.login} />
      <AuthSocialItem content={content.social} />
      <AuthContinue content={content.common} />
      <div className={mainAuth.appFormCover}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label={content.login.place_email}
            valText={content.login.place_email_txt}
            register={register}
            required
          />
          <Input
            type="password"
            label={content.login.place_pass}
            valText={content.login.place_pass_txt}
            register={register}
            required
          />
          <Button label={content.login.btn_content} typebtn="submit" />
        </form>
      </div>
      <div className={mainAuth.appAuthLinks}>
        <Link to={FORGOT}>{content.login.forgot_link}</Link>
        <p>.</p>
        <Link to={REGISTER}>{content.login.register_link}</Link>
      </div>
      <AuthFooter content={content.common} />
    </Fragment>
  );
}
