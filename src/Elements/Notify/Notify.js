import React from 'react';
import classes from './Notify.module.css';

function Notify(props) {
  const {
    title,
    text,
    showNotify,
    onCloseNotify,
  } = props;

  return (
    <>
      { showNotify && (
        <div className={classes.notify}>
          <div className={classes.notifyBlock}>
            <button
              className={`${classes.closeButton} cursor-animation`}
              type="button"
              onClick={onCloseNotify}
            >
              <img src="img/icons/close.svg" alt="close" />
            </button>
            <p className={classes.title}>{title}</p>
            <p className={classes.text}>{text}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Notify;
