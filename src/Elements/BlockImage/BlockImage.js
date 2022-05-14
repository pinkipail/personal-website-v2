import React, { useRef } from 'react';
import { NEED_INVERT } from '../../Common/hooks/useDarkTheme';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockImage.module.css';

export default function BlockImage({
  src, invert, style, deltaStart = '5rem', deltaEnd = '-5rem',
}) {
  const imageName = src.split('/').pop();
  const imageRef = useRef();

  return (
    <div className={classes.wrap}>
      <ParallaxScrolling
        deltaStart={deltaStart}
        deltaEnd={deltaEnd}
      >
        <span className={classes.container}>
          <img
            ref={imageRef}
            className={`${classes.image} ${invert ? NEED_INVERT : null}`}
            src={src}
            alt={imageName}
            style={style}
          />
        </span>
      </ParallaxScrolling>
    </div>
  );
}
