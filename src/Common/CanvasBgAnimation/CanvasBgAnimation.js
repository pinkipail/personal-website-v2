import React, {
  useEffect, useRef
} from 'react';
import classes from './CanvasBgAnimation.module.css'

const createConstellationConfig = (canvas) => ({
  star: {
    color: 'rgba(255, 255, 255, .3)',
    width: 3,
  },
  line: {
    color: 'rgba(255, 255, 255, .3)',
    width: 0.3
  },
  position: {
    x: canvas.width * 0.5,
    y: canvas.height * 0.5,
  },
  width: window.innerWidth,
  height: window.innerHeight,
  velocity: 0.05,
  length: Math.trunc(window.innerWidth / 8),
  distance: 120,
  radius: (window.innerWidth / 5),
  stars: []
});

class Constellation {
  handlers = {
    mousemove: this.mousemove.bind(this),
    resize: this.resize.bind(this)
  }

  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
  }

  init() {
    this.setConfig();
    this.setCanvas();
    this.setContext();
    this.createStars();
    this.loop(this.animate.bind(this));
    this.handleEvent();
  };

  setConfig() {
    this.config = createConstellationConfig(this.canvas);
  };

  setCanvas() {
    this.canvas.width = this.config.width;
    this.canvas.height = this.config.height;
  };

  setContext() {
    this.context.fillStyle = this.config.star.color;
    this.context.strokeStyle = this.config.line.color;
    this.context.lineWidth = this.config.line.width;
  };

  createStars() {
    for (let i = 0; i < this.config.length; i++) {
      this.config.stars.push(this.createStar());
    }
  };

  loop(callback) {
    callback();
    this.rAF = window.requestAnimationFrame(() => {
      this.loop(() => callback());
    });
  };

  handleEvent() {
    window.addEventListener('mousemove', this.handlers.mousemove);
    window.addEventListener('resize', this.handlers.resize);
  };

  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.animateStars();
    this.animateLine();
  }

  createStar() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (this.config.velocity - (Math.random() * 0.3)),
      vy: (this.config.velocity - (Math.random() * 0.3)),
      radius: Math.random() * this.config.star.width,
    }
  }

  animateStars() {
    this.config.stars.forEach((star) => {
      if (star.y < 0 || star.y > this.canvas.height) {
        star.vy = -star.vy;
      } else if (star.x < 0 || star.x > this.canvas.width) {
        star.vx = -star.vx;
      }

      star.x += star.vx;
      star.y += star.vy;
      this.drawStar(star)
    });
  }

  animateLine() {
    let length = this.config.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        let iStar = this.config.stars[i];
        let jStar = this.config.stars[j];
        if (
          Math.abs(iStar.x - jStar.x) < Math.abs(this.config.distance) &&
          Math.abs(iStar.y - jStar.y) < Math.abs(this.config.distance) &&
          Math.abs(iStar.x - this.config.position.x) < Math.abs(this.config.radius) &&
          Math.abs(iStar.y - this.config.position.y) < Math.abs(this.config.radius)
        ) {
          this.drawLine(iStar, jStar)
        }
      }
    }
  }

  drawStar(star) {
    this.context.beginPath();
    this.context.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
    this.context.fill();
  }

  drawLine(iStar, jStar) {
    this.context.beginPath();
    this.context.moveTo(iStar.x, iStar.y);
    this.context.lineTo(jStar.x, jStar.y);
    this.context.stroke();
    this.context.closePath();
  }

  mousemove(e) {
    this.config.position.x = e.clientX;
    this.config.position.y = e.clientY;
  };

  resize() {
    window.cancelAnimationFrame(this.rAF);
    this.setConfig();
    this.setCanvas();
    this.setContext();
    this.createStars();
    this.loop(this.animate.bind(this));
  }

  destroy() {
    window.removeEventListener('mousemove', this.handlers.mousemove)
    window.removeEventListener('resize', this.handlers.resize);
  }
}

export function CanvasBgAnimation() {
  const canvasRef = useRef();
  useEffect(() => {
    let constellation = new Constellation(canvasRef.current);
    constellation.init();

    return () => {
      constellation.destroy();
    }
  }, [])

  return (
      <canvas ref={canvasRef} className={classes.canvas} />
    )
}