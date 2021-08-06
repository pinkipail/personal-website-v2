import React from 'react';
import Stats from 'stats-js';

const { requestAnimationFrame, cancelAnimationFrame } = window;

class FpsCounter extends React.Component {
  componentDidMount() {
    const stats = new Stats();
    stats.showPanel(0);
    this.stats.appendChild(stats.dom);

    const animate = () => {
      stats.begin();
      stats.end();
      this.rafPointer = requestAnimationFrame(animate);
    };
    this.rafPointer = requestAnimationFrame(animate);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafPointer);
  }

  render() {
    const { children } = this.props;

    return (
      <div ref={(ref) => { this.stats = ref; }}>
        {children}
      </div>
    );
  }
}

export default FpsCounter;
