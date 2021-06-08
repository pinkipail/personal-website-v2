import React from "react";
import "./ThemeButton.css";

export default function ThemeButton() {
  return (
    <div className="toggle__wrap">
      <input
        id="toggle-on"
        className="toggle toggle-left"
        name="toggle"
        value="false"
        type="radio"
        defaultChecked
      />
      <label htmlFor="toggle-on" className="toggle__btn">
        dark
      </label>

      <input
        id="toggle-off"
        className="toggle toggle-right"
        name="toggle"
        value="true"
        type="radio"
      />
      <label htmlFor="toggle-off" className="toggle__btn">
        light
      </label>
    </div>
  );
}
