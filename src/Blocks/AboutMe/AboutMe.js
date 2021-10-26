import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockImage from '../../Elements/BlockImage/BlockImage';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title="ОБО МНЕ:" />
      </div>
      <div className={classes.description}>
        <BlockDescription>
          Привет️, меня зовут Василий. Мне 22 года.<br />
          Вырос в небольшой деревни Новоегорьевское,<br />
          что в Алтайском крае, на задворках России.<br />
          В вузе учился по специальности «Программная<br />
          инженерия», но на третьем курсе бросил универ<br />
          и переехал на запад Белоруси, в Гродно.<br />
        </BlockDescription>
      </div>
      <BlockImage
        src="img/photo-me.jpg"
        height="47.5rem"
        width="72.2rem"
      />
      <div className={classes.number}>
        <BlockNumber value="1" />
      </div>
    </BlockContainer>
  );
}
