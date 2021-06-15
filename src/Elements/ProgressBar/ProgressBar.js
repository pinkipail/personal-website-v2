import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  function scrollHandler() {
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100 * 1.5;
      setScrollProgress(scrolled);
    }
  }

  useEffect(() => {
    scrollHandler();
  }, []);
  return (
    // <div className="circle"></div>
    <svg className="spinner" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeDasharray={`${scrollProgress}, 150`}
      ></circle>
            <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#ffffff59"
        strokeWidth="5"
        strokeDasharray={`150, 150`}
      ></circle>
    </svg>
  );
}
