import React from 'react';
import classes from './Notify.module.css';

function Notify() {
  return (
    <div className={classes.notify}>
      <div className={classes.notifyBlock}>
        <button className={classes.closeButton} type="button"><img src="img/icons/close.svg" alt="close" /></button>
        <span className={classes.title}>Вэлком, Tinkoff!!!</span>
        <span className={classes.text}>Спасибо, что заглянули ко мне на страничку :)</span>
      </div>
    </div>
  );
}

export default Notify;
