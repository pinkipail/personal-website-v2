import React from 'react';
import classes from './Button.module.css';

export default function Button({ children }) {
  return (
    <button type="button" className={`${classes.button} cursor-animation`}>
      {children}
    </button>
  );
}
