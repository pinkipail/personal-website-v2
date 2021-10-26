import { useState } from 'react';
import THEME_KEY from '../consts/localStorageKey';

// TODO: refactoring
let state = getTheme();
function setState(value) {
  state = value;
  setTheme(value);
}

export default function useDarkTheme() {
  const [darkTheme, setDarkTheme] = useState(state);
  function setState1(value) {
    setState(value);
    setDarkTheme(value);
  }
  return [state, setState1];
}

function getTheme() {
  return !!+(localStorage.getItem(THEME_KEY) ?? true);
}

function setTheme(value) {
  localStorage.setItem(THEME_KEY, value ? 1 : 0);
}
