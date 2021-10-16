import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockImage.module.css';

export default function BlockImage({ src, height, opacity }) {
  const imageName = src.split('/').pop();
  return (
    <div className={classes.wrap}>
      <ParallaxScrolling
        deltaStart="5rem"
        deltaEnd="-5rem"
      >
        <span className={classes.container}>
          <img
            className={classes.image}
            src={src}
            alt={imageName}
            style={{ height, opacity }}
          />
        </span>
      </ParallaxScrolling>
    </div>
  );
}
