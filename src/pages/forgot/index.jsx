import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../../layout';
import { Input, Button } from '../../shared';
import { AuthLogo, AuthHead, AuthFooter } from '../../components';
import { content } from '../../utils/content';
import { LOGIN } from '../../utils/routes';

export function Forgot() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <AuthLayout>
      <AuthLogo content={content.common} />
      <AuthHead content={content.forgot} />
      <div className="app-form-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={content.forgot.reg_email}
            register={register}
            required
          />
          <Button label={content.forgot.recover} typebtn="submit" />
        </form>
      </div>
      <div className="app-auth-links">
        <Link to={LOGIN}>{content.forgot.back_login}</Link>
      </div>
      <AuthFooter content={content.common} />
    </AuthLayout>
  );
}
