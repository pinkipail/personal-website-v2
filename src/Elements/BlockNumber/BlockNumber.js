import React from 'react';
import TextSurfacing from '../../Common/animation/TextSurfacing/TextSurfacing';
import classes from './BlockNumber.module.css';

export default function PageNumber({ number }) {
  return (
    <div className={classes.number}>
      0
      <TextSurfacing>
        {number}
      </TextSurfacing>
    </div>
  );
}
