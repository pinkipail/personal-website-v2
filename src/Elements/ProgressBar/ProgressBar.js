import React from 'react';
import useScrollProgress from '../../Common/hooks/useScrollProgress';
import classes from './ProgressBar.module.css';

export default function ProgressBar() {
  const scrolled = useScrollProgress() * 1.25;
  return (
    <svg className={classes.spinner} viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeDasharray={`${scrolled}, 125`}
      />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#ffffff59"
        strokeWidth="5"
        strokeDasharray="125"
      />
    </svg>
  );
}
