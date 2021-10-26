import { gsap } from 'gsap/all';

export default function animatingElementInvert(element, darkTheme) {
  gsap.to(element, {
    filter: `invert(${+!darkTheme})`,
    duration: 1,
    ease: 'power2.inOut',
  });
}
