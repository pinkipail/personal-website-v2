import { gsap } from 'gsap';
import { EventEmitter } from 'events';
import { getMousePos, interpolation } from './utils';

// Track the mouse position
let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (ev) => { mouse = getMousePos(ev); });

export default class CustomCursor extends EventEmitter {
  constructor(el) {
    super();
    this.DOM = { el };
    this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner');
    this.dot = document.querySelector('.cursor__dot');

    this.filterId = '#filter-1';
    this.DOM.feTurbulence = document.querySelector(
      `${this.filterId} > feTurbulence`,
    );

    this.primitiveValues = { turbulence: 0 };

    this.createTimeline();

    this.bounds = this.DOM.el.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.2 },
      ty: { previous: 0, current: 0, amt: 0.2 },
      radius: { previous: 30, current: 30, amt: 0.2 },
      stroke: { previous: 1, current: 1, amt: 0.2 },
    };
    this.dot.style.top = `${this.renderedStyles.ty.current}px`;
    this.dot.style.left = `${this.renderedStyles.tx.current}px`;
    this.listen();

    this.onMouseMove = () => {
      this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.current = mouse.y - this.bounds.height / 2;

      this.renderedStyles.tx.previous = this.renderedStyles.tx.current;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.current;

      gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1,
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onMouseMove);
    };
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
    window.addEventListener('mousedown', this.onMouseDown.bind(this));
  }

  render() {
    this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
    this.renderedStyles.ty.current = mouse.y - this.bounds.height / 2;

    this.DOM.el.style.top = `${this.renderedStyles.ty.previous}px`;
    this.DOM.el.style.left = `${this.renderedStyles.tx.previous}px`;

    Object.keys(this.renderedStyles).forEach((key) => {
      this.renderedStyles[key].previous = interpolation(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt,
      );
    });

    this.dot.style.top = `${this.renderedStyles.ty.current + this.bounds.width / 2 - 5}px`;
    this.dot.style.left = `${this.renderedStyles.tx.current + this.bounds.width / 2 - 5}px`;
    this.DOM.circleInner.setAttribute(
      'r',
      this.renderedStyles.radius.previous,
    );
    this.DOM.circleInner.style.strokeWidth = `${this.renderedStyles.stroke.previous}px`;

    requestAnimationFrame(() => this.render());
  }

  createTimeline() {
    this.tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          this.DOM.circleInner.style.filter = `url(${this.filterId}`;
        },
        onUpdate: () => {
          this.DOM.feTurbulence.setAttribute(
            'baseFrequency',
            this.primitiveValues.turbulence,
          );
        },
        onComplete: () => {
          this.DOM.circleInner.style.filter = 'none';
        },
      })
      .to(this.primitiveValues, {
        duration: 0.4,
        ease: "rough({ template: none.out, strength: 2, points: 120, taper: 'none', randomize: true, clamp: false})",
        startAt: { turbulence: 0.07 },
        turbulence: 0,
      });
  }

  enter() {
    this.renderedStyles.radius.current = 20;
    this.renderedStyles.stroke.current = 3;
    this.tl.restart();
  }

  leave() {
    this.renderedStyles.radius.current = 40;
    this.renderedStyles.stroke.current = 1;
    this.tl.progress(1).kill();
  }

  listen() {
    this.on('enter', () => this.enter());
    this.on('leave', () => this.leave());
  }

  onMouseUp() {
    this.dot.style.transform = 'scale(1, 1)';
  }

  onMouseDown() {
    this.dot.style.transform = 'scale(2, 2)';
  }
}
