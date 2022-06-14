import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import classes from './FavoriteQuote.module.css';

function FavoriteQuote() {
  const { t } = useTranslation();

  function getQuote() {
    const key = 'favorite quote description';
    return Array(5)
      .fill()
      .filter((_, i) => !t(`${key}.${i}`).startsWith(key))
      .map((_, i) => t(`${key}.${i}`));
  }

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <ParallaxScrolling deltaStart="-6rem" deltaEnd="0">
          {t('favorite quote')}
        </ParallaxScrolling>
      </div>
      <img
        className={classes.image}
        src="img/eaten-elephant.gif"
        alt="eaten-elephant"
        style={{ height: '20rem', width: '47,2rem' }}
      />
      <div className={classes.description}>
        <BlockDescription deltaStart="0" deltaEnd="0">
          {getQuote()}
        </BlockDescription>
      </div>
      <div className={classes.author}>
        <ParallaxScrolling deltaStart="4rem" deltaEnd="-2rem">
          {t('little prince')} <br />
          {t('little prince author')}
        </ParallaxScrolling>
      </div>
      <div className={classes.blockNumber}>
        <BlockNumber value="3" deltaStart="5rem" deltaEnd="-2rem" />
      </div>
    </div>
  );
}

export default FavoriteQuote;
