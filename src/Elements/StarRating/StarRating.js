import React from 'react';
import classes from './StarRating.module.css';

// todo: подключить шрифт как react компоненты
export default function StarRating() {
  return (
    <div className={classes.stars}>
      <input type="radio" name="radio1" id="star5" value="5" />
      <label className={`${classes.rate} cursor-animation`} htmlFor="star5">
        <div className={classes.face} />
        <i className="far fa-star" />
      </label>
      <input type="radio" name="radio1" id="star4" value="4" />
      <label className={`${classes.rate} cursor-animation`} htmlFor="star4">
        <div className={classes.face} />
        <i className="far fa-star" />
      </label>
      <input type="radio" name="radio1" id="star3" value="3" />
      <label className={`${classes.rate} cursor-animation`} htmlFor="star3">
        <div className={classes.face} />
        <i className="far fa-star" />
      </label>
      <input type="radio" name="radio1" id="star2" value="2" />
      <label className={`${classes.rate} cursor-animation`} htmlFor="star2">
        <div className={classes.face} />
        <i className="far fa-star" />
      </label>
      <input type="radio" name="radio1" id="star1" value="1" />
      <label className={`${classes.rate} cursor-animation`} htmlFor="star1">
        <div className={classes.face} />
        <i className="far fa-star" />
      </label>
    </div>
  );
}
