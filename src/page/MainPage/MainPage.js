import React, { Suspense, useEffect } from 'react';
import Background from '../../Background/Background';
import classes from './MainPage.module.css';

import SmoothScroll from '../../Common/SmoothScroll/SmoothScroll';
import Logo from '../../Elements/Logo/Logo';
import ProgressBar from '../../Elements/ProgressBar/ProgressBar';
import MainBlock from '../../Blocks/MainBlock/MainBlock';
import ThemeButton from '../../Elements/ThemeButton/ThemeButton';
import Footer from '../../Blocks/Footer/Footer';
import AboutJS from '../../Blocks/AboutJS/AboutJS';
import AboutMe from '../../Blocks/AboutMe/AboutMe';
import Skills from '../../Blocks/Skills/Skills';
import Projects from '../../Blocks/Projects/Projects';
import RunningLine from '../../Elements/RunningLine/RunningLine';
import Hobby from '../../Blocks/Hobby/Hobby';
import { NEED_INVERT } from '../../Common/hooks/useDarkTheme';

export default function MainPage({ onLoading }) {
  useEffect(() => {
    onLoading();
  }, []);

  return (
    <Background>
      <div className={`${classes.header} ${NEED_INVERT}`}>
        <Logo url="img/logo.svg" height="5.2rem" width="9.66rem" />
        <Logo url="img/logo1.svg" height="5.55rem" width="14rem" />
      </div>

      <div className={`${classes.footer} ${NEED_INVERT}`}>
        <ThemeButton />
        <ProgressBar />
      </div>
      <Suspense>
        <SmoothScroll>
          <MainBlock />
          <RunningLine />
          <AboutMe />
          <Hobby />
          <AboutJS />
          <Skills />
          <Projects />
          <Footer />
        </SmoothScroll>
      </Suspense>
    </Background>
  );
}
