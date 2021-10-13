import React from 'react';
import classes from './BlockTitle.module.css';

export default function BlockTitle({ title }) {
  return (
    <div className={classes.title}>
      {title}
    </div>
  );
}
