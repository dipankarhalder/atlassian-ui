import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import mainAuth from '../main.module.css';
import { Input, Button } from '../../../shared';
import { AuthLogo, AuthHead, AuthFooter } from '../../../components';
import { content } from '../../../utils/content';
import { LOGIN, FORGOT, DASHBOARD } from '../../../utils/routes';
import { useAuthenticator } from '../../../hooks/useAuthenticator';

export function Forgot() {
  useAuthenticator(DASHBOARD, FORGOT);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Fragment>
      <AuthLogo content={content.common} />
      <AuthHead content={content.forgot} />
      <div className={mainAuth.appFormCover}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            label={content.forgot.reg_email}
            valText={content.forgot.place_email_txt}
            register={register}
            required
          />
          <Button label={content.forgot.recover} typebtn="submit" />
        </form>
      </div>
      <div className={mainAuth.appAuthLinks}>
        <Link to={LOGIN}>{content.forgot.back_login}</Link>
      </div>
      <AuthFooter content={content.common} />
    </Fragment>
  );
}
