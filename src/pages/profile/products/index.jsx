import { ProfileLayout } from '../../../layout';

import jira from '../../../assets/images/jira.svg';
import align from '../../../assets/images/align.svg';
import core from '../../../assets/images/core.svg';
import soft from '../../../assets/images/soft.svg';
import conf from '../../../assets/images/conf.svg';
import bit from '../../../assets/images/bit.svg';
import sevr from '../../../assets/images/sevr.svg';
import jwm from '../../../assets/images/jwm.svg';

export const Products = () => {
  return (
    <ProfileLayout>
      <div className="app-profile-setup">
        <div className="app-pro-heading">
          <h1>Products</h1>
        </div>
        <div className="app-list-product-card">
          <div className="app-card-item">
            <h4>Jira Settings</h4>
            <p>
              Manage language, time zone, issue watching, and notifications
              settings for Jira, or sign up for Jira labs.
            </p>
            <ul>
              <li>
                <span>
                  <img src={jira} alt="Jira" />
                </span>
                <p>Jira</p>
              </li>
              <li>
                <span>
                  <img src={align} alt="Jira Align" />
                </span>
                <p>Jira Align</p>
              </li>
              <li>
                <span>
                  <img src={core} alt="Jira Core" />
                </span>
                <p>Jira Core</p>
              </li>
              <li>
                <span>
                  <img src={soft} alt="Jira Software" />
                </span>
                <p>Jira Software</p>
              </li>

              <li>
                <span>
                  <img src={sevr} alt="Jira Service Desk" />
                </span>
                <p>Jira Service Desk</p>
              </li>
              <li>
                <span>
                  <img src={sevr} alt="Jira Service Management" />
                </span>
                <p>Jira Service Management</p>
              </li>
              <li>
                <span>
                  <img src={jwm} alt="Jira Work Management" />
                </span>
                <p>Jira Work Management</p>
              </li>
            </ul>
          </div>
          <div className="app-card-item">
            <h4>Bitbucket Settings</h4>
            <p>
              Manage language, accessibility, and notifications settings for
              Bitbucket.
            </p>
            <ul>
              <li>
                <span>
                  <img src={bit} alt="Bitbucket" />
                </span>
                <p>Bitbucket</p>
              </li>
            </ul>
          </div>
          <div className="app-card-item">
            <h4>Confluence Settings</h4>
            <p>
              Manage language, time zone, issue watching, and notifications
              settings for Bitbucket.
            </p>
            <ul>
              <li>
                <span>
                  <img src={conf} alt="Confluence" />
                </span>
                <p>Confluence</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};
