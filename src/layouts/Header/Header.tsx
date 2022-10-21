import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import en_flag from '../../assets/images/us.png';
import fr_flag from '../../assets/images/fr.png';
import it_flag from '../../assets/images/it.png';
import gm_flag from '../../assets/images/gm.png';

interface OptionType {
  value: string;
  label: string;
}

export default function Header({ children }: { children: any }) {
  const [t, i18n] = useTranslation('common');
  const [selectedOption, setSelectedOption] = useState<OptionType>({
    value: 'en',
    label: 'English',
  });

  return (
    <>
      <div className="header absolute top-5 right-10 flex z-10">
        <span
          className="flex items-center cursor-pointer mr-2"
          onClick={() => {
            i18n.changeLanguage('en');
          }}
        >
          <img src={en_flag} width="30px" className="" />
          <span
            className="ml-2 text-white text-2xl"
            style={{
              textDecoration: i18n.language === 'en' ? 'underline' : 'none',
            }}
          >
            en
          </span>
        </span>
        <span
          className="flex items-center cursor-pointer mr-2"
          onClick={() => {
            i18n.changeLanguage('fr');
          }}
        >
          <img src={fr_flag} width="30px" className="" />
          <span
            className="ml-2 text-white text-2xl"
            style={{
              textDecoration: i18n.language === 'fr' ? 'underline' : 'none',
            }}
          >
            fr
          </span>
        </span>
        <span
          className="flex items-center cursor-pointer mr-2"
          onClick={() => {
            i18n.changeLanguage('gm');
          }}
        >
          <img src={gm_flag} width="30px" className="" />
          <span
            className="text-white text-2xl ml-2"
            style={{
              textDecoration: i18n.language === 'gm' ? 'underline' : 'none',
            }}
          >
            gm
          </span>
        </span>
        <span
          className="flex items-center cursor-pointer mr-2"
          onClick={() => {
            i18n.changeLanguage('it');
          }}
        >
          <img src={it_flag} width="30px" className="" />
          <span
            className="ml-2 text-white text-2xl"
            style={{
              textDecoration: i18n.language === 'it' ? 'underline' : 'none',
            }}
          >
            it
          </span>
        </span>
      </div>
      {children}
    </>
  );
}
