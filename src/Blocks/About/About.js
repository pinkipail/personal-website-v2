import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './About.module.css';

export default function About() {
  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title="ОБО МНЕ:" />
      </div>
      <div className={classes.image}>
        <BlockImage url="img/map.svg" />
      </div>

      <div className={classes.description}>
        <BlockDescription>
          Я вырос в небольшой
          деревни Новоегорьевское,
          что в Алтайском крае
          на&nbsp;задворках России.
        </BlockDescription>
      </div>
      <div className={classes.number}>
        <BlockNumber number="1" />
      </div>
    </BlockContainer>
  );
}
