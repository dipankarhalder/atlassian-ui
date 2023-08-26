import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../../layout';
import { Input, Button } from '../../shared';
import { content } from '../../utils/content';
import { LOGIN } from '../../utils/routes';

import altlogo from '../../assets/images/logo.svg';

export function Forgot() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <AuthLayout>
      <div className="app-logo">
        <img src={altlogo} alt={content.login.alts} />
      </div>
      <div className="app-heading">
        <h1>{content.login.forgot_link}</h1>
      </div>
      <div className="app-form-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label={content.login.reg_email} register={register} required />
          <Button label={content.login.recover} typebtn="submit" />
        </form>
      </div>
      <div className="app-item-links">
        <Link to={LOGIN}>{content.login.back_login}</Link>
      </div>
      <div className="app-bottom-text">
        <p>One account for Jira, Confluence, Trello and more.</p>
      </div>
    </AuthLayout>
  );
}
