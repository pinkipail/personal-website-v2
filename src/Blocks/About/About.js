import React from 'react';
import "./About.css"

export default function About() {
  return(
    <div className="block">
      <div className="block__content about">
        <div className="block__title">
          ОБО МНЕ:
        </div>

        <div className="block__image">
          <img src="img/map.png" alt="map"/>
        </div>
        <div className="block__description">
          Я вырос в небольшой деревни Новоегорьевское, что в Алтайском крае. 
        </div>

        <div className="block__number">
          01
        </div>
      </div>
    </div>
  )
}