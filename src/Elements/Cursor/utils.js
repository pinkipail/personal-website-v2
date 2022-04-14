// Linear interpolation
const interpolation = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = (e) => ({
  x: e.clientX,
  y: e.clientY,
});

export {
  interpolation, getMousePos,
};
