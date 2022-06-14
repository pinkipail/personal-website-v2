import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './AboutJS.module.css';

export default function AboutJS() {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <div className={classes.container}>
        <div>
          <div className={classes.title}>
            <BlockTitle title={t('about work:')} />
          </div>
          <div className={classes.description}>
            <BlockDescription>
              {Array(5).fill('').map((item, index) => (
                t(`about work description.${index}`)
              ))}
            </BlockDescription>
          </div>
        </div>

        <div className={classes.image}>
          <BlockImage
            src="img/js-logo.png"
            style={{
              height: '60rem',
              width: '60rem',
              opacity: '0.2',
            }}
            deltaStart="0"
            deltaEnd="0"
          />
        </div>
      </div>

      <div className={classes.number}>
        <BlockNumber value="4" />
      </div>
    </BlockContainer>
  );
}
