import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './AboutMe.module.css';

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title={t('about me:')} />
      </div>
      <div className={classes.description}>
        <BlockDescription>
          {Array(6).fill('').map((item, index) => (
            t(`about me description.${index}`)
          ))}
        </BlockDescription>
      </div>
      <BlockImage
        src="img/photo-me.jpg"
        style={{
          height: '47.5rem',
          width: '72.2rem',
          opacity: 0.7,
        }}
        invert={true}
      />
      <div className={classes.number}>
        <BlockNumber value="1" />
      </div>
    </BlockContainer>
  );
}
