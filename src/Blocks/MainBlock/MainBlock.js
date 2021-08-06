import React from 'react';
import './MainBlock.css';

export default function MainBlock() {
  return (
    <div className="block">
      <div className="block-content">
        <div className="title__wrap">
          <div className="title title_outline">
            FRONTEND-
          </div>
          <div className="title">
            DEVELOPER
          </div>
          <div className="subtitle">
            ФЕДОРОВ
            ВАСИЛИЙ
          </div>
        </div>
        <div className="description">
          Мне нравится создавать
          интерактивные приложения
          на JavaScript с акцентом на
          анимированный контент,
          интерактивные приложения
        </div>
      </div>
    </div>
  );
}
