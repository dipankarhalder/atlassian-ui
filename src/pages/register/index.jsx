import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AuthLayout } from '../../layout';
import { Input, Button } from '../../shared';
import { SocialItem } from '../../components';
import { content } from '../../utils/content';
import { LOGIN } from '../../utils/routes';

import altlogo from '../../assets/images/logo.svg';

export function Register() {
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
        <h1>{content.login.signup_head}</h1>
      </div>
      <div className="app-form-cover">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input label={content.login.reg_email} register={register} required />
          <p>
            By signing up, I accept the Atlassian{' '}
            <span>Cloud Terms of Service</span> and acknowledge the{' '}
            <span>Privacy Policy</span>.
          </p>
          <Button label={content.login.btn_signup} typebtn="submit" />
        </form>
      </div>
      <div className="app-continue">
        <h5>{content.login.continue}</h5>
      </div>
      <SocialItem content={content} />
      <div className="app-item-links">
        <Link to={LOGIN}>{content.login.login_link}</Link>
      </div>
      <div className="app-bottom-text">
        <p>
          One account for Jira, Confluence, Trello and more.
          <br /> This page is protected by reCAPTCHA and the Google <br />
          Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </AuthLayout>
  );
}
