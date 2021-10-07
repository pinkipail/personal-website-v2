import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
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
        Привет️, меня зовут Василий. Мне 22 года. <br />
        Я вырос в совсем небольшой деревни <br />
        Новоегорьевское, что в Алтайском крае. И <br />
        я работаю разработчиком. На третьем <br />
        курсе бросил универ и  уехал навсегда из <br />
        России(недалеко правда)<br />
      </div>
      <BlockImage src="img/photo-me.svg" height="475px" />
      <div className={classes.number}>
        <BlockNumber number="1" />
      </div>
    </BlockContainer>
  );
}
