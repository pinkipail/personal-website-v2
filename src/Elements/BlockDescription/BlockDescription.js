import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockDescription.module.css';

export default function BlockDescription({ children }) {
  return (
    <div className={classes.description}>
      <ParallaxScrolling>
        {children}
      </ParallaxScrolling>
    </div>
  );
}
