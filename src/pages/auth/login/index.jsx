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
import { content } from '../../../utils/content';
import { REGISTER, FORGOT, DASHBOARD } from '../../../utils/routes';
import { Fragment } from 'react';

export function Login() {
  const token = 'dh346iaasd76423sdfb23876asdhga3764sgd72swh';
  const userInfo = {
    fname: 'Dipankar',
    lname: 'Halder',
    email: 'dipankar@gmail.com',
    phone: '9038716514',
  };

  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;
    if (username === 'dipankar@gmail.com' && password === 'Dipankar1234#') {
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
