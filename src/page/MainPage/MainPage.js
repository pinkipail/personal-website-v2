import React, { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Background from '../../Background/Background';
import classes from './MainPage.module.css';
import '../../Elements/Notify/Notify.module.css';

import SmoothScroll from '../../Common/SmoothScroll/SmoothScroll';
import Logo from '../../Elements/Logo/Logo';
import ProgressBar from '../../Elements/ProgressBar/ProgressBar';
import MainBlock from '../../Blocks/MainBlock/MainBlock';
import ThemeButton from '../../Elements/ThemeButton/ThemeButton';
import Footer from '../../Blocks/Footer/Footer';
import AboutJS from '../../Blocks/AboutJS/AboutJS';
import AboutMe from '../../Blocks/AboutMe/AboutMe';
import Skills from '../../Blocks/Skills/Skills';
import RunningLine from '../../Elements/RunningLine/RunningLine';
import Hobby from '../../Blocks/Hobby/Hobby';
import LanguageSelect from '../../Elements/LanguageSelect/LanguageSelect';
import useDetectBrowser from '../../Common/hooks/useDetectBrowser';
import Disclaimer from '../../Blocks/Disclaimer/Disclaimer';
import FavoriteQuote from '../../Blocks/FavoriteQuote/FavoriteQuote';
import Feedback from '../../Blocks/Feedback/Feedback';
import Notify from '../../Elements/Notify/Notify';

export default function MainPage({ onLoading }) {
  const browser = useDetectBrowser();
  const [visitorName, setVisitorName] = useState('');

  useEffect(() => {
    onLoading();
    const nameParam = new URLSearchParams(window.location.search).get('name');
    if (nameParam) {
      setVisitorName(nameParam);
    }
    const timer = setTimeout(() => {
      if (nameParam) {
        setVisitorName('');
      }
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  function onCloseNotify() {
    setVisitorName('');
  }

  const { t } = useTranslation();
  const title = `${t('notify title.name')}, ${visitorName}!!!`;
  const text = t('notify text.name');

  return (
    <Background>
      <div className={classes.header}>
        <Logo url="img/logo.svg" height="50px" width="103px" />
        <LanguageSelect />
      </div>

      <div className={classes.footer}>
        {!isFirefox(browser) && <ThemeButton />}
        <ProgressBar />
        <Notify title={title} text={text} visitorName={visitorName} onCloseNotify={onCloseNotify} />
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
          <Feedback />
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
