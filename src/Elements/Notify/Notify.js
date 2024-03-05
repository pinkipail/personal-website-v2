import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import classes from './Notify.module.css';

function Notify(props) {
  const notifyRef = useRef();
  const {
    animation,
    title,
    text,
    onCloseNotify,
  } = props;

  useEffect(() => {
    if (animation === 'entered') {
      animationShowingNotify(notifyRef.current);
    } else if (animation === 'exiting') {
      animationHidingNotify(notifyRef.current);
    }
  }, [animation]);

  return (
    <div ref={notifyRef} className={classes.notify}>
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
  );
}

export default Notify;

// animations

function animationShowingNotify(element) {
  gsap.fromTo(element, {
    x: '130%',
  },
  {
    x: '0%',
    duration: 0.5,
    ease: 'power1.easyOut',
  });
}

function animationHidingNotify(element) {
  gsap.to(element, {
    x: '130%',
    duration: 0.6,
    ease: 'power1.easyOut',
  });
}
