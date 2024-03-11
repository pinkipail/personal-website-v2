import React, { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-transition-group';
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
import RunningLine from '../../Elements/RunningLine/RunningLine';
import Hobby from '../../Blocks/Hobby/Hobby';
import LanguageSelect from '../../Elements/LanguageSelect/LanguageSelect';
import useDetectBrowser from '../../Common/hooks/useDetectBrowser';
import Disclaimer from '../../Blocks/Disclaimer/Disclaimer';
import FavoriteQuote from '../../Blocks/FavoriteQuote/FavoriteQuote';
import Feedback from '../../Blocks/Feedback/Feedback';
import Notify from '../../Elements/Notify/Notify';
import NotifyContext from '../../Elements/Notify/NotifyContext';

export default function MainPage({ onLoading }) {
  const browser = useDetectBrowser();
  const [visitorName, setVisitorName] = useState('');
  const [showNotify, setShowNotify] = useState(false);
  const { t } = useTranslation();
  const filling = {
    notifyTitle: `${t('notify title.name')}, ${visitorName}!!!`,
    notifyText: t('notify text.name'),
  };

  useEffect(() => {
    onLoading();
    handleQueryParam();
  }, []);

  function handleQueryParam() {
    const nameParam = new URLSearchParams(window.location.search).get('name');
    if (nameParam) {
      setVisitorName(nameParam);
      setShowNotify(true);
    }
    const timerHide = setTimeout(() => {
      if (nameParam) {
        setShowNotify(false);
      }
    }, 20000);

    return () => clearTimeout(timerHide);
  }

  function onCloseNotify() {
    setShowNotify(false);
  }

  return (
    <NotifyContext.Provider value={filling}>
      <Background>
        <div className={classes.header}>
          <Logo url="img/logo.svg" height="50px" width="103px" />
          <LanguageSelect />
        </div>
        <div className={classes.footer}>
          {!isFirefox(browser) && <ThemeButton />}
          <ProgressBar />
          <Transition
            in={showNotify}
            timeout={500}
            mountOnEnter
            unmountOnExit
          >
            {(state) => (
              <Notify
                animation={state}
                title={filling.notifyTitle}
                text={filling.notifyText}
                onCloseNotify={onCloseNotify}
              />
            )}
          </Transition>
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
    </NotifyContext.Provider>
  );
}

// utils

function isFirefox(browser) {
  return browser.includes('Firefox');
}
