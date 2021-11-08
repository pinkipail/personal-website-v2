import React, { useEffect } from 'react';
import CustomCursor from './CustomCursor';
import './Cursor.css';
import { NEED_INVERT } from '../../Common/hooks/useDarkTheme';

// TODO: отрефакторить
export default function Cursor() {
  useEffect(() => {
    const cursor = new CustomCursor(document.querySelector('.cursor'));

    [...document.querySelectorAll('.cursor-anumation')].forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.emit('enter'));
      el.addEventListener('mouseleave', () => cursor.emit('leave'));
    });
  });

  return (
    <>
      <svg className={`cursor ${NEED_INVERT}`} width="90" height="90" viewBox="0 0 90 90">
        <defs>
          <filter
            id="filter-1"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0"
              numOctaves="10"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="40"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
        <circle className="cursor__inner" cx="45" cy="45" r="40" />
      </svg>
      <div className="cursor__dot" />
    </>
  );
}
