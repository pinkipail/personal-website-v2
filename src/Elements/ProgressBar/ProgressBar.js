import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // TODO: Перименовать функцию
  function myFunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight
      - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100 * 1.25;
    setScrollProgress(scrolled);
  }

  function scrollHandler() {
    window.addEventListener('scroll', myFunction);
  }

  // TODO: Отписаться от скролла
  useEffect(() => {
    scrollHandler();
  }, []);

  return (
    <svg className="spinner" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeDasharray={`${scrollProgress}, 125`}
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
