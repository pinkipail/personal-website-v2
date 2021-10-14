import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import BlockDescription from '../../Elements/BlockDescription/BlockDescription';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './Hobby.module.css';

function Hobby() {
  return (
    <div className={classes.container}>
      <div className={classes.descriptionWrap}>
        <div />
        <div className={classes.title}>
          <ParallaxScrolling deltaStart="0" deltaEnd="5rem">
            <BlockTitle title="хобби:" />
          </ParallaxScrolling>
        </div>
        <div className={classes.text}>
          <ParallaxScrolling deltaStart="4rem" deltaEnd="0">
            Люблю хорошие <br />
            вещи
          </ParallaxScrolling>
        </div>
        <div className={classes.description}>
          <BlockDescription deltaStart="4rem" deltaEnd="0">
            Люблю в прохладное время года собираться<br />
            играть в настолки по вечерам в хорошей<br />
            компании, а ️летом выбираться на природу.<br />
            Люблю посиделки в баре. Люблю настольный<br />
            тенис и атмосферные сюжетные видеоигры.<br />
          </BlockDescription>
        </div>
        <img
          className={classes.image}
          src="img/ping-pong.gif"
          alt="ping-pong"
          style={{ height: '36rem' }}
        />
        <div className={classes.blockNumber}>
          <BlockNumber value="2" />
        </div>
      </div>
    </div>
  );
}

export default Hobby;
