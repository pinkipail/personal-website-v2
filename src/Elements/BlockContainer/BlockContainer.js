import React from 'react';
import classes from './BlockContainer.module.css';

export default function BlockContainer({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}
