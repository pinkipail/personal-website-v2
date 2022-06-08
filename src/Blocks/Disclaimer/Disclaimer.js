import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import classes from './Disclaimer.module.css';

export default function Disclaimer() {
  const { t } = useTranslation();
  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <div className={classes.disclaimer}>
          {t('disclaimer title.first')}<br />
          {t('disclaimer title.second')}
        </div>
        <div className={`${classes.disclaimer} ${classes.disclaimerFull}`}>
          {t('disclaimer title.full')}<br />
        </div>
        <BlockDescription
          deltaStart={0}
          deltaEnd={0}
        >
          {Array(6).fill('').map((item, index) => (
            t(`disclaimer description.${index}`)
          ))}
        </BlockDescription>
      </div>
    </div>
  );
}
