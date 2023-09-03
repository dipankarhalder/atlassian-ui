import { mprofile } from '../../../utils/content';
import { SelectBox } from '../../../shared';

import mainProfile from '../main.module.css';

export const Preferences = () => {
  const languageList = [
    { id: 1, title: 'English (US)' },
    { id: 2, title: 'English (UK)' },
    { id: 3, title: 'Nederlands' },
    { id: 4, title: 'Franch' },
    { id: 5, title: 'Norsk' },
  ];

  const timeList = [
    { id: 1, title: 'Africa / Abidjan' },
    { id: 2, title: 'Africa / Accra' },
    { id: 3, title: 'Africa / Asmara' },
    { id: 4, title: 'Africa / Bamako' },
    { id: 5, title: 'Africa / Bangui' },
  ];

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
        <div className={mainProfile.appSelectItmRow}>
          <SelectBox
            listdata={languageList}
            placeholder="Select your language"
          />
        </div>
        <div className={mainProfile.appSelectItmRow}>
          <SelectBox listdata={timeList} placeholder="Your time zone" />
        </div>
      </div>
      <div className={mainProfile.appListProductCard}>
        <div className={mainProfile.appCardItem}>
          <h4>{mprofile.pref.delHead}</h4>
          <p>{mprofile.pref.delDesc}</p>
          <div className={mainProfile.deleteBtn}>
            <span>Delete account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
