import React from 'react';
import generateId from '../../Common/func/generateId';
import './Projects.css';

const projects = [
  {
    dateStart: '02.2020',
    dateEnd: '05.2020',
    name: 'фриланс',
    description: 'создание и верстка лендингов, разработка SPA на React.',
    location: 'удаленка',
  },
  {
    dateStart: '06.2020',
    dateEnd: '05.2021',
    name: 'РТИ',
    description: 'Разработка на Angular, много чего делал, и еще немного текста, чуть больше текста',
    location: 'калуга',
  },
  {
    dateStart: '06.2021',
    dateEnd: 'по настоящее время',
    name: 'SENLA',
    description: 'Разработка на Angula и React',
    location: 'гродно',
  },
];

export default function Projects() {
  return (
    <div className="block">
      <div className="block__wrap projects">
        <div className="block__title">ПРОЕКТЫ:</div>

        {projects.map((project) => (
          <div className="project" key={generateId()}>
            <div className="project__date">
              {project.dateStart}
              {' '}
              —
              {' '}
              <br />
              {project.dateEnd}
            </div>

            <div className="project-description">
              <div className="project-description__title">
                {project.name}
              </div>
              <div className="project-description__text">
                {project.description}
              </div>
            </div>

            <div className="project__location">
              {project.location}
            </div>
          </div>
        ))}

        <div className="block__number">05</div>
      </div>
    </div>
  );
}
