import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Input, Button } from '../../components';
import { content } from '../../utils/content';

import { REGISTER } from '../../utils/routes';

export function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={content.login.log_placeholder}
          register={register}
          required
        />
        <Button label={content.login.btn_content} typebtn="submit" />
      </form>
      <Link to={REGISTER}>{content.login.register_link}</Link>
    </div>
  );
}
