import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './TextArea.module.css';

export default function TextArea() {
  const { t } = useTranslation();
  return (
    <textarea
      className={classes.textarea}
      placeholder={t('placeholder')}
    />
  );
}
