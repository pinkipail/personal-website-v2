import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/all';
import ICONS_NAME from './consts/ICONS_NAME';
import classes from './Skills.module.css';

const displayedIcons = 5;
const ALL_ICONS_NAME = [...ICONS_NAME, ...ICONS_NAME.filter((item, i) => i < displayedIcons)];
const iconsNumber = ICONS_NAME.length;
const speed = 3;

export default function Skills() {
  const iconsRef = useRef();

  useEffect(() => {
    scrollingLine(iconsRef.current);
  }, []);

  return (
    <div className={classes.line}>
      <div className={classes.lineContent} ref={iconsRef}>
        {ALL_ICONS_NAME.map((icon, i) => (
          <div key={icon + i}>
            <img src={`img/icons/skills/${icon}_icon.png`} alt={icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

// animations

function scrollingLine(icons) {
  gsap.fromTo(icons,
    { x: 0 },
    {
      x: `${(-100 / displayedIcons) * iconsNumber}vw`,
      repeat: -1,
      duration: iconsNumber * speed,
      ease: 'linear',
    });
}
