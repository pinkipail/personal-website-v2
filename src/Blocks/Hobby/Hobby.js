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
            то что меня увлекает
          </ParallaxScrolling>
        </div>
        <div className={classes.description}>
          <BlockDescription deltaStart="4rem" deltaEnd="0">
            Люблю проводить время с друзьями, летом<br />
            выбираться на природу, а в прохладное время<br />
            года по вечерам зависать в настолки или<br />
            сидеть в баре. Люблю играть в видеоигры<br />
            с атмосферным сюжетом. Люблю в перерывах<br />
            на работе перекинуться партеечкой в нас-<br />
            тольный тенис. Люблю покушать и поспать.<br />
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
