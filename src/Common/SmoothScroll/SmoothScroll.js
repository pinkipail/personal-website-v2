import React, { useEffect, useRef } from 'react';

import './SmoothScroll.css';
import useWindowSize from './hooks/useWindowSize';

const SmoothScroll = ({ children }) => {
  const windowSize = useWindowSize();
  const scrollingContainerRef = useRef();

  const data = {
    ease: 0.15,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  function setBodyHeight() {
    const { height } = scrollingContainerRef.current.getBoundingClientRect();
    document.body.style.height = `${height}px`;
  }

  function smoothScrollingHandler() {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;

    if (data.current - data.previous > 1 || data.current - data.previous < -1) {
      data.rounded = Math.round(data.previous * 100) / 100;
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
    }

    requestAnimationFrame(() => smoothScrollingHandler());
  }

  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  });

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
