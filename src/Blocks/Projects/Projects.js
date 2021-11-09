import React from 'react';
import { useTranslation } from 'react-i18next';
import BlockContainer from '../../Elements/BlockContainer/BlockContainer';
import BlockTitle from '../../Elements/BlockTitle/BlockTitle';
import BlockNumber from '../../Elements/BlockNumber/BlockNumber';
import classes from './Projects.module.css';
import RevealAnimation from '../../Common/animation/RevealAnimation/RevealAnimation';

function Projects() {
  const { t } = useTranslation();

  return (
    <BlockContainer>
      <div className={classes.title}>
        <BlockTitle title={t('about projects:')} />
      </div>

      {Array(3).fill('').map((item, index) => (
        <div
          className={classes.project}
          key={t(`projects items.${index}.description`)}
        >
          <RevealAnimation>
            <div className={classes.textWrap}>
              <div className={classes.projectDate}>
                {t(`projects items.${index}.dateStart`)} — <br />
                {t(`projects items.${index}.dateEnd`)}
              </div>
              <div className={classes.projectDescription}>
                <div className={classes.projectDescriptionTitle}>
                  {t(`projects items.${index}.name`)}
                </div>
                <div className={classes.projectDescriptionText}>
                  {t(`projects items.${index}.description`)}
                </div>
              </div>
              <div className={classes.projectLocation}>
                {t(`projects items.${index}.location`)}
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

export default Projects;
