import React from 'react';

export default function Logo({ url, size: height }) {
  return (
    <img
      src={url}
      style={{ height }}
      alt="logo"
    />
  );
}
