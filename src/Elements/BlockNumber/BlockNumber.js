import React from 'react';
import classes from './BlockNumber.module.css';

export default function PageNumber({ number }) {
  return (
    <div className={classes.number}>
      0{number}
    </div>
  );
}
