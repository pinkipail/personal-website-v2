import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './AboutJS.module.css';

export default function AboutJS() {
  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title="О РАБОТЕ:" />
      </div>
      <div className={classes.container}>
        <div className={classes.description}>
          <ParallaxScrolling>
            Мне нравится создавать интерактивные WEB-
            приложения с акцентом на анимированный
            контент, производительность и отзывчивость.
            Люблю работать с актуальными технологиями:
            ES6+, Typescript, angular и REACT.
          </ParallaxScrolling>
        </div>

        <div className={classes.image}>
          <BlockImage src="img/js-logo.svg" height="575px" />
        </div>
      </div>

      <div className={classes.number}>
        <BlockNumber value="3" />
      </div>
    </BlockContainer>
  );
}
