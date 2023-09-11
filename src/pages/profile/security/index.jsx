import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import mainProfile from '../main.module.css';
import { mprofile } from '../../../utils/content';
import { Input, Button } from '../../../shared';

export const Security = () => {
  const contentData = [
    {
      title: 'Two-step verification',
      desc: 'Keep your account extra secure with a second login step.',
      learn: 'Learn more',
      links: 'Manage two-step verification',
    },
    {
      title: 'API tokens',
      desc: 'A script or other process can use an API token to perform basic authentication with Jira Cloud applications or Confluence Cloud. You must use an API token if the Atlassian account you authenticate with has had two-step verification enabled. You should treat API tokens as securely as any other password.',
      learn: 'Learn more',
      links: 'Create and manage API tokens',
    },
    {
      title: 'Recent devices',
      desc: `If you've lost one of your devices or notice any suspicious activity, log out of all your devices and take steps to secure your account.`,
      learn: 'Learn more',
      links: 'View and manage recent devices',
    },
  ];

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div className={mainProfile.appProfileSetup}>
      <div className={mainProfile.appProHeading}>
        <h1>{mprofile.security.heading}</h1>
      </div>
      <div className={mainProfile.appProfileCurrentEmail}>
        <h3>{mprofile.security.frm_head}</h3>
        <div className={mainProfile.appProfileSecForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={mprofile.security.frm_ch_pass}
              register={register}
              required
            />
            <Input
              label={mprofile.security.new_pass}
              register={register}
              required
            />
            <span className={mainProfile.spanHeight}></span>
            <div className={mainProfile.buttonProfile}>
              <Button label={mprofile.security.f_btn} typebtn="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className={mainProfile.appListProductCard}>
        {contentData.map((item, idx) => (
          <div className={mainProfile.appCardItemLink} key={idx}>
            <h4>{item.title}</h4>
            <p>
              {item.desc}&nbsp; <em>{item.learn}</em>
            </p>
            <Link to="/">{item.links}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
