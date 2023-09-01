import { mprofile } from '../../../utils/content';
import { SelectBox } from '../../../shared';

import mainProfile from '../main.module.css';

export const Preferences = () => {
  return (
    <div className={mainProfile.appProfileSetup}>
      <div className={mainProfile.appProHeading}>
        <h1>{mprofile.pref.heading}</h1>
      </div>
      <div className={mainProfile.appProDescpt}>
        <p>{mprofile.pref.desc}</p>
      </div>
      <div className={mainProfile.appListProductCard}>
        <div className={`${mainProfile.appCardItem} ${mainProfile.margBotms}`}>
          <h4>{mprofile.pref.cardHead}</h4>
          <p>
            {mprofile.pref.cardDesc} <em>{mprofile.pref.sett}</em>
          </p>
        </div>
      </div>
      <div className={mainProfile.appPrefSelect}>
        <SelectBox />
        <SelectBox />
      </div>
      <div className={mainProfile.appListProductCard}>
        <div className={mainProfile.appCardItem}>
          <h4>{mprofile.pref.delHead}</h4>
          <p>{mprofile.pref.delDesc}</p>
        </div>
      </div>
    </div>
  );
};
