import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'gm', label: 'German' },
  { value: 'it', label: 'Italian' },
];

export default function Header({ children }: { children: any }) {
  const [t, i18n] = useTranslation('common');
  const [selectedOption, setSelectedOption] = useState<OptionType>({
    value: 'en',
    label: 'English',
  });

  const handleChange = (selectedOption: OptionType) => {
    setSelectedOption(selectedOption);
    i18n.changeLanguage(selectedOption.value);
  };
  return (
    <>
      <div className="header absolute top-5 right-10">
        <Select
          value={selectedOption}
          onChange={(selectedOption: any) => {
            handleChange(selectedOption);
          }}
          options={options}
          className="bg-transparent"
        />
      </div>
      {children}
    </>
  );
}
