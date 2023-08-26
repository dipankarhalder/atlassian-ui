import google from '../../assets/images/google.svg';
import microsoft from '../../assets/images/microsoft.svg';
import apple from '../../assets/images/apple.svg';
import slack from '../../assets/images/slack.svg';

export const SocialItem = ({ content }) => {
  return (
    <div className="app-social-logins">
      <ul>
        <li>
          <span>
            <img src={google} alt={content.login.google} />
          </span>
          <p>{content.login.google}</p>
        </li>
        <li>
          <span>
            <img src={microsoft} alt={content.login.microsoft} />
          </span>
          <p>{content.login.microsoft}</p>
        </li>
        <li>
          <span>
            <img src={apple} alt={content.login.apple} />
          </span>
          <p>{content.login.apple}</p>
        </li>
        <li>
          <span>
            <img src={slack} alt={content.login.slack} />
          </span>
          <p>{content.login.slack}</p>
        </li>
      </ul>
    </div>
  );
};
