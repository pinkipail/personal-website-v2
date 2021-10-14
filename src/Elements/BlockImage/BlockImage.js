import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockImage.module.css';

export default function BlockImage({ src, height }) {
  const imageName = src.split('/').pop();
  return (
    <div style={{ overflow: 'hidden' }}>
      <ParallaxScrolling
        deltaStart="5rem"
        deltaEnd="-5rem"
      >
        <img
          className={classes.image}
          src={src}
          alt={imageName}
          style={{ height }}
        />
      </ParallaxScrolling>
    </div>
  );
}
