import React from 'react';

export default function Logo({ url, height, width }) {
  return (
    <img
      src={url}
      style={{ height, width }}
      alt="logo"
    />
  );
}
