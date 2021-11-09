import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import TextCircle from '../../Elements/TextCircle/TextCircle';

import classes from './Skills.module.css';

function Skills() {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <div className={classes.wrap}>
        <div className={classes.title}>
          <BlockTitle title={t('about technologies:')} />
        </div>
        <div className={classes.bullets}>
          {bullets.map((bullet) => (
            <span
              className={classes.bulletsItem}
              key={bullet}
            >
              {bullet}
            </span>
          ))}
        </div>
        <div className={classes.footer}>
          <div className={classes.textCircle}>
            <TextCircle />
          </div>
          <div className={classes.number}>
            <BlockNumber value="4" />
          </div>
        </div>
      </div>
    </BlockContainer>
  );
}

// TODO: актуализировать Скилы
const bullets = [
  'HTML',
  'CSS',
  'JavaScript',
  'ES6+',
  'W3C',
  'Babel',
  'Webpack',
  'npm',
  'yarn',
  'Angular',
  'TypeScript',
  'RxJS',
  'React ',
  'Redux ',
  'Next ',
  'PWA ',
  'UI/UX ',
  'Photoshop ',
  'Illustrator ',
  'SASS ',
  'BEM ',
  'ESLint ',
  'THREE.js',
  'GSAP',
  'WEBGL',
  'Git ',
  'CI/CD',
  'Docker',
  'Linux',
  'SVG-animation',
  // 'ООП',
  // i18n,
];

export default Skills;
