import { HiOutlineNewspaper } from 'react-icons/hi';

import { mprofile } from '../../../utils/content';

import conf from '../../../assets/images/conf.svg';
import bit from '../../../assets/images/bit.svg';
import trello from '../../../assets/images/trello.svg';

export const ConnectedApp = () => {
  const listApp = [
    {
      id: 1,
      title: 'Apps with access to your accounts',
      desc: 'You have given these apps permission to access information and to act on behalf of your accounts. If you do not want the app to have access, remove access for the app using the button below.',
      listApp: [{ name: 'Trello', img: trello }],
    },
    {
      id: 2,
      title: 'Atlassian third party account access',
      desc: 'You have granted Atlassian permission to access these accounts. Atlassian uses information from these accounts to provide additional functionality.',
      listApp: [
        { name: 'Bitbucket', img: bit },
        { name: 'Confluence', img: conf },
      ],
    },
    {
      id: 3,
      title: 'Apps your admin connected',
      desc: 'An admin on one or more of your Atlassian sites has granted these third-party apps permission to your Atlassian account information. The following apps may be storing information outside of Atlassian systems. Contact your administrator to remove access.',
      listApp: [],
    },
  ];

  return (
    <div className="app-profile-setup">
      <div className="app-pro-heading">
        <h1>{mprofile.connectApp.heading}</h1>
      </div>
      <div className="app-pro-descpt">
        <p>{mprofile.connectApp.desc}</p>
      </div>
      <div className="app-list-product-card">
        {listApp.map((item) => (
          <div className="app-card-item" key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
            {item.listApp.length ? (
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
            ) : (
              <ul>
                <li>
                  <span>
                    <HiOutlineNewspaper />
                  </span>
                  <p>{mprofile.connectApp.noApp}</p>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
