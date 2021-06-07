import React from "react";
import "./Logo.css";

export default function Logo({ url, size: height }) {
  return (
    <div>
      <object
        className="logo"
        type="image/svg+xml"
        data={url}
        aria-label="logo"
        style={{ height: height }}
      ></object>
    </div>
  );
}
// "img/logo.svg"
