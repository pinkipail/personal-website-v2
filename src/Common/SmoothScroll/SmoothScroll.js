import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/all';
import useWindowSize from './hooks/useWindowSize';
import './SmoothScroll.css';
import { NEED_INVERT } from '../hooks/useDarkTheme';

const data = {
  ease: 0.1,
  current: 0,
  previous: 0,
  rounded: 0,
};

const SmoothScroll = ({ children }) => {
  useWindowSize();
  useTranslation();

  const scrollingContainerRef = useRef();

  function setBodyHeight() {
    const { height } = scrollingContainerRef.current.getBoundingClientRect();
    document.body.style.height = `${height}px`;
    ScrollTrigger.refresh(true);
  }

  function smoothScrollingHandler() {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;

    if (Math.abs(data.current - data.previous) > 1) {
      scrollingContainerRef.current.style.transform = `translateY(-${Math.round(data.previous)}px)`;
    }

    requestAnimationFrame(() => smoothScrollingHandler());
  }

  useEffect(() => {
    // TODO: find better way
    setTimeout(() => {
      setBodyHeight();
    }, 1000);
    setBodyHeight();
  });

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  return (
    <div className={`parent ${NEED_INVERT}`}>
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
