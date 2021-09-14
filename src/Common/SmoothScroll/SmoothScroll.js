import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { useWindowSize } from 'react-use';
import './SmoothScroll.css';

// TODO: refactoring
function SmoothScroll({ children }) {
  const windowSize = useWindowSize();
  const parentRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
      handlerWindowSize();
    }, 100);
  }, []);

  useEffect(() => {
    handlerWindowSize();
    const contentHeight = parentRef.current.scrollHeight - parentRef.current.offsetHeight;
    animateSmoothScrolling(containerRef.current, contentHeight);
  }, [windowSize]);

  function handlerWindowSize() {
    window.scrollTo(0, 0);
    gsap.killTweensOf(containerRef.current);
    document.body.style.height = `${parentRef.current.scrollHeight}px`;
    ScrollTrigger.refresh();
  }

  return (
    <div className="parent" ref={parentRef}>
      <div ref={containerRef}>{children}</div>
    </div>
  );
}

export default SmoothScroll;

// utils

function animateSmoothScrolling(container, contentHeight) {
  gsap.fromTo(
    container,
    {
      y: 0,
    },
    {
      scrollTrigger: {
        trigger: container,
        scrub: 0.5,
        start: 'top top',
        end: 'bottom bottom',
      },
      y: -contentHeight,
      ease: 'none',
    },
  );
}
