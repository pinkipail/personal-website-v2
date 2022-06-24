/* eslint-disable no-unused-expressions */
import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import gsap from 'gsap/all';
import classes from './Select.module.css';

function Select({ options, defaultOption, onChange }) {
  const selectRef = useRef(null);
  const optionRef = useRef(null);
  const optionsRef = useRef([]);
  useClickAway(selectRef, clickAway);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  function openList() {
    setIsOpen(true);
    animationShowingOptions(optionsRef.current, optionRef.current);
  }

  function closeList() {
    setIsOpen(false);
    animationHidingOptions(optionsRef.current, optionRef.current);
  }

  function clickAway() {
    closeList();
  }

  function toggleSelect() {
    isOpen
      ? closeList()
      : openList();
  }

  function selectOption(option) {
    setSelectedOption(option);
    onChange(option);
    closeList();
  }

  return (
    <div className={classes.wrap}>
      <div ref={selectRef} className={classes.select}>
        <div
          className={`${classes.label} cursor-animation ${isOpen ? classes.active : ''}`}
          onClick={toggleSelect}
        >
          <img src="img/icons/earth.svg" alt="earth" />
          <div className={classes.labelText}>
            {selectedOption.name}
          </div>
          <div className={classes.arrow} />
        </div>
        <div className={classes.options} ref={optionRef}>
          {options.map((option, i) => (
            <div
              ref={(ref) => { optionsRef.current[i] = ref; }}
              key={option.value}
              className={`${classes.optionsItem} cursor-animation ${option.value === selectedOption.value ? classes.active : ''}`}
              rel={option.value}
              style={{ zIndex: options.length - i }}
              onClick={() => selectOption(option)}
            >
              <span>
                {option.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// animations

function animationShowingOptions(options, optionWrap) {
  gsap.to(optionWrap, {
    height: '10em',
    duration: 0.4,
    autoAlpha: 1,
    ease: 'power1.out',
  });
  options.forEach((option, i) => {
    gsap.to(option, {
      y: `${i * 100 + 100}%`,
      delay: i * 0.05,
      duration: 0.4,
      ease: 'power1.out',
    });
  });
}

function animationHidingOptions(options, optionWrap) {
  gsap.to(optionWrap, {
    height: 0,
    duration: 0.4,
    autoAlpha: 0,
    ease: 'power1.out',
  });
  options.forEach((option, i) => {
    gsap.to(option, {
      y: '0%',
      duration: 0.4,
      delay: (options.length - i) * 0.1,
      ease: 'power1.out',
    });
  });
}

export default Select;
