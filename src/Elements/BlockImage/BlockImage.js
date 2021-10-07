import React from 'react';
import TextSurfacing from '../../Common/animation/TextSurfacing/TextSurfacing';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockImage.module.css';

export default function BlockImage({ src, height }) {
  const imageName = src.split('/').pop();
  return (
    <div style={{ overflow: 'hidden' }}>
      <ParallaxScrolling
        deltaStart={50}
        deltaEnd={-50}
      >
        <TextSurfacing>
          <img
            className={classes.image}
            src={src}
            alt={imageName}
            height={height}
          />
        </TextSurfacing>
      </ParallaxScrolling>
    </div>
  );
}
