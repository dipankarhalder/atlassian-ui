import google from '../../../assets/images/google.svg';
import microsoft from '../../../assets/images/microsoft.svg';
import apple from '../../../assets/images/apple.svg';
import slack from '../../../assets/images/slack.svg';

export const AuthSocialItem = ({ content }) => {
  return (
    <div className="app-social-items">
      <ul>
        <li>
          <span>
            <img src={google} alt={content.google} />
          </span>
          <p>{content.google}</p>
        </li>
        <li>
          <span>
            <img src={microsoft} alt={content.microsoft} />
          </span>
          <p>{content.microsoft}</p>
        </li>
        <li>
          <span>
            <img src={apple} alt={content.apple} />
          </span>
          <p>{content.apple}</p>
        </li>
        <li>
          <span>
            <img src={slack} alt={content.slack} />
          </span>
          <p>{content.slack}</p>
        </li>
      </ul>
    </div>
  );
};
