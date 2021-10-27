import { getThemeFromLocalStorage, setThemeToLocalStorage } from '../consts/localStorage';
import useForceUpdate from './useForceUpdate';

let state = getThemeFromLocalStorage();

export default function useDarkTheme() {
  const forceUpdate = useForceUpdate();

  function setState(value) {
    state = value;
    setThemeToLocalStorage(value);
    forceUpdate(value);
  }
  return [state, setState];
}
