import React from 'react';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import classes from './Hobby.module.css';

function Hobby() {
  return (
    <div className={classes.container}>
      <div className={classes.descriptionWrap}>
        <div />
        <div className={classes.title}>
          <BlockTitle title="хобби:" />
        </div>
        <div className={classes.text}>
          Люблю хорошие <br />
          вещи
        </div>
        <div className={classes.description}>
          Люблю в прохладное время года собираться<br />
          играть в настолки по вечерам в хорошей<br />
          компании, а ️летом выбираться на природу.<br />
          Люблю посиделки в баре. Люблю настольный<br />
          тенис и атмосферные сюжетные видеоигры.<br />
        </div>
        <img
          className={classes.image}
          src="/img/ping-pong.gif"
          alt="ping-pong"
          height="358px"
        />
        <div className={classes.blockNumber}>
          <BlockNumber value="2" />
        </div>
      </div>
    </div>
  );
}

export default Hobby;
