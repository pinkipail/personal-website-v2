import React, { useEffect, useState } from 'react';
import Background from '../../Background/Background';
import classes from './MainPage.module.css';

import SmoothScroll from '../../Common/SmoothScroll/SmoothScroll';
import Logo from '../../Elements/Logo/Logo';
import ProgressBar from '../../Elements/ProgressBar/ProgressBar';
import MainBlock from '../../Blocks/MainBlock/MainBlock';
import ThemeButton from '../../Elements/ThemeButton/ThemeButton';
import Footer from '../../Blocks/Footer/Footer';
import About from '../../Blocks/About/About';
import AboutJS from '../../Blocks/AboutJS/AboutJS';
import AboutMe from '../../Blocks/AboutMe/AboutMe';
import Skills from '../../Blocks/Skills/Skills';
import Projects from '../../Blocks/Projects/Projects';

export default function MainPage({ onLoading }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme(value) {
    setDarkTheme(value);
  }

  useEffect(() => {
    onLoading();
  }, []);

  return (
    <Background darkTheme={darkTheme}>
      <div className={classes.content}>
        <header>
          <Logo url="img/logo.svg" size="5.2rem" />
          <Logo url="img/logo1.svg" size="5.55rem" />
        </header>

        <footer>
          <ThemeButton toggle={toggleTheme} />
          <ProgressBar />
        </footer>
        <SmoothScroll>
          <MainBlock />
          <About />
          <AboutMe />
          <AboutJS />
          <Skills />
          <Projects />
          <Footer />
        </SmoothScroll>
      </div>
    </Background>
  );
}