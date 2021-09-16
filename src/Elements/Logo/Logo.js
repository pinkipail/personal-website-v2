import React from 'react';

export default function Logo({ url, size: height }) {
  return (
    <div>
      <object
        className="logo"
        type="image/svg+xml"
        data={url}
        aria-label="logo"
        style={{ height }}
      />
    </div>
  );
}
