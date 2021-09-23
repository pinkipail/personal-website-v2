import React from 'react';
import TextSurfacing from '../../Common/animation/TextSurfacing/TextSurfacing';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockImage.module.css';

export default function BlockImage({ url }) {
  const imageName = url.split('/').pop();
  return (
    <ParallaxScrolling
      deltaStart={0}
      deltaEnd={-60}
    >
      <TextSurfacing>
        <img
          className={classes.image}
          src={url}
          alt={imageName}
        />
      </TextSurfacing>
    </ParallaxScrolling>
  );
}
