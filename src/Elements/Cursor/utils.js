// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// Linear interpolation
const interpolation = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => ({ width: window.innerWidth, height: window.innerHeight });

// Gets the mouse position
const getMousePos = (e) => ({
  x: e.clientX,
  y: e.clientY,
});

export {
  map, interpolation, calcWinsize, getMousePos,
};
