import React, { Suspense, useEffect } from 'react';
import Background from '../../Background/Background';
import classes from './MainPage.module.css';

import animatingElementInvert from '../../Common/functions/animatingElementInvert';
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
import useDarkTheme from '../../Common/hooks/useDarkTheme';

export default function MainPage({ onLoading }) {
  const [darkTheme, setDarkTheme] = useDarkTheme();

  useEffect(() => {
    onLoading();
  }, []);

  useEffect(() => {
    animatingThemeToggle();
  }, [darkTheme]);

  function animatingThemeToggle() {
    const html = document.documentElement;
    animatingElementInvert(html, darkTheme);
  }

  function toggleTheme(value) {
    setDarkTheme(value);
  }

  return (
    <Background>
      <div className={classes.header}>
        <Logo url="img/logo.svg" height="5.2rem" width="9.66rem" />
        <Logo url="img/logo1.svg" height="5.55rem" width="14rem" />
      </div>

      <div className={classes.footer}>
        <ThemeButton toggle={toggleTheme} />
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
