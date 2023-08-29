import { mprofile } from '../../../utils/content';
import productStyle from './product.module.css';

import jira from '../../../assets/images/jira.svg';
import align from '../../../assets/images/align.svg';
import core from '../../../assets/images/core.svg';
import soft from '../../../assets/images/soft.svg';
import conf from '../../../assets/images/conf.svg';
import bit from '../../../assets/images/bit.svg';
import sevr from '../../../assets/images/sevr.svg';
import jwm from '../../../assets/images/jwm.svg';
import trello from '../../../assets/images/trello.svg';

export const Products = () => {
  const listData = [
    {
      id: 1,
      title: 'Jira Settings',
      desc: 'Manage language, time zone, issue watching, and notifications settings for Jira, or sign up for Jira labs.',
      listApp: [
        { name: 'Jira', img: jira },
        { name: 'Jira Align', img: align },
        { name: 'Jira Core', img: core },
        { name: 'Jira Software', img: soft },
        { name: 'Jira Service Desk', img: sevr },
        { name: 'Jira Service Management', img: sevr },
        { name: 'Jira Work Management', img: jwm },
      ],
    },
    {
      id: 2,
      title: 'Trello Settings',
      desc: 'Manage language, accessibility, and notifications settings for Trello.',
      listApp: [{ name: 'Trello', img: trello }],
    },
    {
      id: 3,
      title: 'Bitbucket Settings',
      desc: 'Manage language, accessibility, and notifications settings for Bitbucket.',
      listApp: [{ name: 'Bitbucket', img: bit }],
    },
    {
      id: 4,
      title: 'Confluence Settings',
      desc: 'Manage language, time zone, issue watching, and notifications settings for Confluence.',
      listApp: [{ name: 'Confluence', img: conf }],
    },
  ];

  return (
    <div className={productStyle.appProfileSetup}>
      <div className={productStyle.appProHeading}>
        <h1>{mprofile.products.heading}</h1>
      </div>
      <div className={productStyle.appListProductCard}>
        {listData.map((item) => (
          <div className={productStyle.appCardItem} key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            <ul>
              {item.listApp.map((itm, idx) => (
                <li key={idx}>
                  <span>
                    <img src={itm.img} alt={itm.name} />
                  </span>
                  <p>{itm.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
