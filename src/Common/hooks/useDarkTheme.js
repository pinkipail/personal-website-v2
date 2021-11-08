import { gsap } from 'gsap/all';
import { useEffect, useState } from 'react';
import {
  defaultDarkTheme,
  getThemeFromLocalStorage,
  setThemeToLocalStorage,
} from '../consts/themeLocalStorage';

export const NEED_INVERT = 'need-invert';

export function useDarkTheme() {
  const [state, setState] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    if (state !== defaultDarkTheme) {
      setTheme(state);
    }
  }, []);

  function setTheme(value) {
    setThemeToLocalStorage(value);
    animatingThemeToggle(value);
    setState(value);
  }
  return [state, setTheme];
}

function animatingThemeToggle(value) {
  const elements = document.getElementsByClassName(NEED_INVERT);
  Array.from(elements).forEach((element) => {
    animatingElementInvert(element, value);
  });
}

function animatingElementInvert(element, darkTheme) {
  gsap.to(element, {
    filter: `invert(${+!darkTheme})`,
    duration: 1,
    ease: 'power2.inOut',
  });
}
