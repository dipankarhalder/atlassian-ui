import { useState, useRef } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

import { useOutsideClick } from '../../hooks/useOutsideClick';
import selectStyle from './select.module.css';

export const SelectBox = ({ listdata, placeholder, defaultData }) => {
  const [dropDown, setDropDown] = useState(false);
  const [actvItem, setActvItem] = useState('');

  const ref = useRef();
  useOutsideClick(ref, () => {
    if (dropDown) {
      setDropDown(false);
    }
  });

  return (
    <div className={selectStyle.appSelectField} ref={ref}>
      <div
        className={selectStyle.appSelectText}
        onClick={() => setDropDown(!dropDown)}
      >
        {defaultData ? (
          <span>{defaultData.title}</span>
        ) : actvItem ? (
          <span>{actvItem.title}</span>
        ) : (
          <span className={selectStyle.appSelectedSpan}>{placeholder}</span>
        )}
        {dropDown ? <HiChevronUp /> : <HiChevronDown />}
      </div>
      {dropDown && (
        <div className={selectStyle.appSelectList}>
          <ul>
            {listdata.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setDropDown(false);
                  setActvItem(item);
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
