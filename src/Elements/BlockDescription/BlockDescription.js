import React from 'react';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import SurfacingTextSymbol from '../../Common/SurfacingTextSymbol/SurfacingTextSymbol';
import classes from './BlockDescription.module.css';

export default function BlockDescription({ children }) {
  return (
    <div className={classes.description}>
      <ParallaxScrolling>
        <SurfacingTextSymbol>
          {children}
        </SurfacingTextSymbol>
      </ParallaxScrolling>
    </div>
  );
}
