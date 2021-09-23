import React from 'react';
import TextSurfacing from '../../Common/animation/TextSurfacing/TextSurfacing';
import classes from './BlockTitle.module.css';

export default function BlockTitle({ title }) {
  return (
    <div className={classes.title}>
      <TextSurfacing>
        {title}
      </TextSurfacing>
    </div>
  );
}
