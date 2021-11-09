import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './Hobby.module.css';

function Hobby() {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.descriptionWrap}>
        <div />
        <div className={classes.title}>
          <ParallaxScrolling deltaStart="0" deltaEnd="5rem">
            <BlockTitle title={t('about hobby:')} />
          </ParallaxScrolling>
        </div>
        <div className={classes.text}>
          <ParallaxScrolling deltaStart="4rem" deltaEnd="0">
            {t('what fascinates me')}
          </ParallaxScrolling>
        </div>
        <div className={classes.description}>
          <BlockDescription deltaStart="4rem" deltaEnd="0">
            {Array(7).fill('').map((item, index) => (
              t(`hobby description.${index}`)
            ))}
          </BlockDescription>
        </div>
        <img
          className={classes.image}
          src="img/ping-pong.gif"
          alt="ping-pong"
          style={{ height: '36rem', width: '36rem' }}
        />
        <div className={classes.blockNumber}>
          <BlockNumber value="2" />
        </div>
      </div>
    </div>
  );
}

export default Hobby;
