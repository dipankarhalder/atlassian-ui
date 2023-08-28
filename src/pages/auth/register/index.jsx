import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../../../layout';
import { Input, Button } from '../../../shared';
import {
  AuthLogo,
  AuthHead,
  AuthContinue,
  AuthSocialItem,
  AuthFooter,
} from '../../../components';
import { content } from '../../../utils/content';
import { LOGIN } from '../../../utils/routes';

export function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <AuthLayout>
      <AuthLogo content={content.common} />
      <AuthHead content={content.register} />
      <AuthSocialItem content={content.social} />
      <AuthContinue content={content.common} />
      <div className="app-form-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={content.register.reg_email}
            register={register}
            required
          />
          <Input
            label={content.register.password}
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
      <div className="app-auth-links">
        <Link to={LOGIN}>{content.register.login_link}</Link>
      </div>
      <AuthFooter content={content.common} />
    </AuthLayout>
  );
}
