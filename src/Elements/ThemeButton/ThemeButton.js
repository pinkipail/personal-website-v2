import React from 'react';
import { useDarkTheme } from '../../Common/hooks/useDarkTheme';
import './ThemeButton.css';

export default function ThemeButton() {
  const [darkTheme, setDarkTheme] = useDarkTheme();

  return (
    <div>
      <div className="toggle__wrap">
        <input
          id="toggle-on"
          className="toggle toggle-left"
          name="toggle"
          value="true"
          type="radio"
          defaultChecked={darkTheme}
          onChange={() => setDarkTheme(true)}
        />
        <label
          htmlFor="toggle-on"
          className="cursor-animation"
        >
          dark
        </label>

        <input
          id="toggle-off"
          className="toggle toggle-right"
          name="toggle"
          value="false"
          type="radio"
          defaultChecked={!darkTheme}
          onChange={() => setDarkTheme(false)}
        />
        <label
          htmlFor="toggle-off"
          className="cursor-animation"
        >
          light
        </label>
      </div>
    </div>
  );
}
