import React, { useEffect, useRef } from 'react';
import animatingElementInvert from '../../Common/functions/animatingElementInvert';
import useDarkTheme from '../../Common/hooks/useDarkTheme';
import ParallaxScrolling from '../../Common/ParallaxScrolling/ParallaxScrolling';
import classes from './BlockImage.module.css';

export default function BlockImage({ src, invert, style }) {
  const imageName = src.split('/').pop();
  const imageRef = useRef();
  const [darkTheme] = useDarkTheme();

  useEffect(() => {
    animatingImageInvert();
  }, [darkTheme]);

  function animatingImageInvert() {
    if (invert) {
      animatingElementInvert(imageRef.current, darkTheme);
    }
  }

  return (
    <div className={classes.wrap}>
      <ParallaxScrolling
        deltaStart="5rem"
        deltaEnd="-5rem"
      >
        <span className={classes.container}>
          <img
            ref={imageRef}
            className={classes.image}
            src={src}
            alt={imageName}
            style={style}
          />
        </span>
      </ParallaxScrolling>
    </div>
  );
}
