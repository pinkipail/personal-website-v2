import React, { useState, useEffect } from 'react';
import classes from './Notify.module.css';

function Notify() {
  const [visitorName, setVisitorName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    if (nameParam) {
      setVisitorName(nameParam);
    }
    const timer = setTimeout(() => {
      if (nameParam) {
        setVisitorName('');
      }
    }, 20000);
    return (() => clearTimeout(timer));
  }, []);

  function onCloseNotification() {
    setVisitorName('');
  }

  return (
    <>
      { visitorName && (
        <div className={classes.notify}>
          <div className={classes.notifyBlock}>
            <button className={classes.closeButton} type="button" onClick={onCloseNotification}><img src="img/icons/close.svg" alt="close" /></button>
            <span className={classes.title}>Вэлком, {visitorName}!!!</span>
            <span className={classes.text}>Спасибо, что заглянули ко мне на страничку :)</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Notify;
