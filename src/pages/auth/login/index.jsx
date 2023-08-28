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
import { REGISTER, FORGOT } from '../../../utils/routes';

export function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <AuthLayout>
      <AuthLogo content={content.common} />
      <AuthHead content={content.login} />
      <AuthSocialItem content={content.social} />
      <AuthContinue content={content.common} />
      <div className="app-form-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={content.login.place_email}
            register={register}
            required
          />
          <Input
            label={content.login.place_pass}
            register={register}
            required
          />
          <Button label={content.login.btn_content} typebtn="submit" />
        </form>
      </div>
      <div className="app-auth-links">
        <Link to={FORGOT}>{content.login.forgot_link}</Link>
        <p>.</p>
        <Link to={REGISTER}>{content.login.register_link}</Link>
      </div>
      <AuthFooter content={content.common} />
    </AuthLayout>
  );
}
