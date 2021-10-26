import { useState } from 'react';

// TODO: refactoring

let state = true;
function setState(value) {
  state = value;
}

export default function useDarkTheme() {
  const [darkTheme, setDarkTheme] = useState(true);
  function setState1(value) {
    setState(value);
    setDarkTheme(value);
  }
  return [state, setState1];
}
