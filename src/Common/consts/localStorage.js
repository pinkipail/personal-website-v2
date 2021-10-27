const THEME_KEY = 'theme';
const defaultDarkTheme = true;

export function getThemeFromLocalStorage() {
  const value = localStorage.getItem(THEME_KEY) ?? defaultDarkTheme;
  return JSON.parse(value);
}

export function setThemeToLocalStorage(value) {
  const stringifyValue = JSON.stringify(value);
  localStorage.setItem(THEME_KEY, stringifyValue);
}
