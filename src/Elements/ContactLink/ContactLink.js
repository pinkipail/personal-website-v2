import React from 'react';
import RevealAnimation from '../../Common/animation/RevealAnimation/RevealAnimation';
import classes from './ContactLink.module.css';

function ContactLink({ text, icon }) {
  return (
    <RevealAnimation>
      <div className={classes.container}>
        <img
          className={classes.icon}
          src={icon}
          alt="icon"
        />
        <div className={classes.link}>
          {text}
        </div>
      </div>
    </RevealAnimation>
  );
}

export default ContactLink;
