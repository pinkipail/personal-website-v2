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
import LanguageSelect from '../../Elements/LanguageSelect/LanguageSelect';
import useDetectBrowser from '../../Common/hooks/useDetectBrowser';
import Disclaimer from '../../Blocks/Disclaimer/Disclaimer';
import FavoriteQuote from '../../Blocks/FavoriteQuote/FavoriteQuote';

export default function MainPage({ onLoading }) {
  const browser = useDetectBrowser();
  useEffect(() => {
    onLoading();
  }, []);

  return (
    <Background>
      <div className={classes.header}>
        <Logo url="img/logo.svg" height="5rem" width="10.2" />
        <LanguageSelect />
      </div>

      <div className={classes.footer}>
        {!isFirefox(browser) && <ThemeButton />}
        <ProgressBar />
      </div>
      <Suspense>
        <SmoothScroll>
          <MainBlock />
          <Disclaimer />
          <RunningLine />
          <AboutMe />
          <Hobby />
          <FavoriteQuote />
          <AboutJS />
          <Skills />
          <Projects />
          <Footer />
        </SmoothScroll>
      </Suspense>
    </Background>
  );
}

// utils

function isFirefox(browser) {
  return browser.includes('Firefox');
}
