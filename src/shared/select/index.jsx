import { useState, useRef } from 'react';
import { HiChevronDown } from 'react-icons/hi'; //HiChevronUp

import { useOutsideClick } from '../../hooks/useOutsideClick';
import selectStyle from './select.module.css';

export const SelectBox = () => {
  const [dropDown, setDropDown] = useState(false);
  // const [actvItem, setActvItem] = useState('');

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
        <span>English (US)</span>
        <HiChevronDown />
        {/* <HiChevronUp /> */}
      </div>
      {dropDown && (
        <div className={selectStyle.appSelectList}>
          <ul>
            <li>adfgdgsf sdkc sdck adlch</li>
            <li>adfgdgsf sdkc sdck adlch</li>
            <li>adfgdgsf sdkc sdck adlch</li>
            <li>adfgdgsf sdkc sdck adlch</li>
            <li>adfgdgsf sdkc sdck adlch</li>
            <li>adfgdgsf sdkc sdck adlch</li>
          </ul>
        </div>
      )}
    </div>
  );
};
