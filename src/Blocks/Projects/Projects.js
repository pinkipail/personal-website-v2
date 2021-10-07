import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import classes from './Projects.module.css';
import { trigerConfig } from '../../Common/consts/scrollAnimation';

function Projects() {
  const linesRef = useRef([]);
  const descriptionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    descriptionsRef.current.forEach((item) => {
      surfacingText(item);
    });
    linesRef.current.forEach((item) => {
      surfacingLine(item);
    });
  }, []);

  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title="ПРОЕКТЫ:" />
      </div>

      {projects.map((project, i) => (
        <div
          className={classes.project}
          key={project.name}
        >
          <div
            className={classes.textWrap}
            ref={(ref) => { descriptionsRef.current[i] = ref; }}
          >
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
          <div
            className={classes.line}
            ref={(ref) => { linesRef.current[i] = ref; }}
          />
        </div>
      ))}

      <div className={classes.blockNumber}>
        <BlockNumber value="5" />
      </div>
    </BlockContainer>
  );
}

// constants
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

const duration = 0.7;

// utils

function surfacingText(element) {
  gsap.from(
    element,
    {
      scrollTrigger: {
        trigger: element,
        ...trigerConfig,
      },
      autoAlpha: 0,
      duration: 0,
      delay: duration,
    },
  );
}

function surfacingLine(element) {
  gsap.fromTo(element, {
    right: '100%',
  }, {
    scrollTrigger: {
      trigger: element,
      ...trigerConfig,
    },
    right: '0%',
    duration,
    ease: 'power1.inOut',
  });

  gsap.fromTo(element, {
    left: '0%',
  }, {
    scrollTrigger: {
      trigger: element,
      ...trigerConfig,
    },
    left: '100%',
    duration,
    delay: duration,
    ease: 'power1.inOut',
  });
}

export default Projects;
