import React from 'react';
import { useTranslation } from 'react-i18next';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import Button from '../../Elements/Button/Button';
import StarRating from '../../Elements/StarRating/StarRating';
import TextArea from '../../Elements/TextArea/TextArea';
import classes from './Feedback.module.css';

export default function Feedback() {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <ParallaxScrolling deltaStart="0" deltaEnd="0">
          {t('feedback write something')}
        </ParallaxScrolling>
      </div>
      <div className={classes.face}>
        <img
          src="img/icons/face-dizzy.svg"
          alt="face-dizzy"
        />
      </div>
      <div className={classes.description}>
        <BlockDescription deltaStart="0" deltaEnd="0">
          {Array(3).fill('').map((item, index) => (
            t(`feedback description.${index}`)
          ))}
        </BlockDescription>
      </div>
      <div className={classes.textarea}>
        <TextArea />
      </div>
      <div className={classes.starRating}>
        <StarRating />
      </div>
      <div className={classes.button}>
        <Button>
          {t('feedback send')}
        </Button>
      </div>

    </div>
  );
}
