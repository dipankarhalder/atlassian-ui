import mainSocial from '../main.module.css';

import google from '../../../assets/images/google.svg';
import microsoft from '../../../assets/images/microsoft.svg';
import apple from '../../../assets/images/apple.svg';
import slack from '../../../assets/images/slack.svg';

export const AuthSocialItem = ({ content }) => {
  const socialData = [
    { title: content.google, img: google },
    { title: content.microsoft, img: microsoft },
    { title: content.apple, img: apple },
    { title: content.slack, img: slack },
  ];

  return (
    <div className={mainSocial.appSocialItems}>
      <ul>
        {socialData.map((item, idx) => (
          <li key={idx}>
            <span>
              <img src={item.img} alt={item.title} />
            </span>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
