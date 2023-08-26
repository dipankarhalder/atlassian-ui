import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../../layout';
import { Input, Button } from '../../shared';
import { SocialItem } from '../../components';
import { content } from '../../utils/content';
import { REGISTER } from '../../utils/routes';

import altlogo from '../../assets/images/logo.svg';

export function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <AuthLayout>
      <div className="app-logo">
        <img src={altlogo} alt={content.login.alts} />
      </div>
      <div className="app-heading">
        <h1>{content.login.heading}</h1>
      </div>
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
      <div className="app-continue">
        <h5>{content.login.continue}</h5>
      </div>
      <SocialItem content={content} />
      <div className="app-item-links">
        <Link to={REGISTER}>{content.login.forgot_link}</Link>
        <p>.</p>
        <Link to={REGISTER}>{content.login.register_link}</Link>
      </div>
      <div className="app-bottom-text">
        <p>One account for Jira, Confluence, Trello and more.</p>
      </div>
    </AuthLayout>
  );
}
