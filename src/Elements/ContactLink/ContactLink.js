import React from 'react';
import RevealAnimation from '../../Common/animation/RevealAnimation/RevealAnimation';
import classes from './ContactLink.module.css';

function ContactLink({ text, icon, href }) {
  return (
    <RevealAnimation>
      <div className={`${classes.container} cursor-anumation`}>
        <img
          className={classes.icon}
          src={icon}
          alt="icon"
        />
        <div className={classes.linkWrap}>
          <a
            className={`${classes.link} cursor-anumation`}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
          <div className={classes.underline} />
        </div>
      </div>
    </RevealAnimation>
  );
}

export default ContactLink;
