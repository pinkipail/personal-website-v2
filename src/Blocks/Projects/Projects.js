import React from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import classes from './Projects.module.css';
import RevealAnimation from '../../Common/animation/RevealAnimation/RevealAnimation';

function Projects() {
  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title="ПРОЕКТЫ:" />
      </div>

      {projects.map((project) => (
        <div
          className={classes.project}
          key={project.name}
        >
          <RevealAnimation>
            <div className={classes.textWrap}>
              <div className={classes.projectDate}>
                {project.dateStart} — <br />
                {project.dateEnd}
              </div>
              <div className={classes.projectDescription}>
                <div className={classes.projectDescriptionTitle}>
                  {project.name}
                </div>
                <div className={classes.projectDescriptionText}>
                  {project.description}
                </div>
              </div>
              <div className={classes.projectLocation}>
                {project.location}
              </div>
            </div>
            <div className={classes.projectUnderline} />
          </RevealAnimation>
        </div>
      ))}

      <div className={classes.blockNumber}>
        <BlockNumber value="5" />
      </div>
    </BlockContainer>
  );
}

// TODO: Подправить описание
const projects = [
  {
    dateStart: '12.2019',
    dateEnd: '05.2020',
    name: 'ФРИЛАНС',
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

export default Projects;
