import React from 'react';
import SurfacingText from '../../Common/animation/SurfacingText/SurfacingText';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockDescription.module.css';

export default function BlockDescription({ children, deltaStart, deltaEnd }) {
  return (
    <div className={classes.description}>
      <ParallaxScrolling
        deltaStart={deltaStart}
        deltaEnd={deltaEnd}
      >
        <SurfacingText>
          {children}
        </SurfacingText>
      </ParallaxScrolling>
    </div>
  );
}
