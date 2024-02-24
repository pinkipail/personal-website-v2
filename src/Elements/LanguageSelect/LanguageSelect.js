import React from 'react';
import { useTranslation } from 'react-i18next';
import Notify from '../Notify/Notify';
import Select from '../Select/Select';
import '../Notify/Notify.module.css';

function LanguageSelect() {
  const { i18n } = useTranslation();

  function changeLanguage(option) {
    i18n.changeLanguage(option.value);
  }

  return (
    <>
      <Select
        options={options}
        defaultOption={options[0]}
        onChange={changeLanguage}
      />
      <Notify />
    </>
  );
}

const options = [
  {
    value: 'ru',
    name: 'русский',
  },
  {
    value: 'en',
    name: 'english',
  },
];

export default LanguageSelect;
