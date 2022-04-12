// TODO
// наполнить страницу
// поправить год
import React from 'react';
import { useTranslation } from 'react-i18next';
import SurfacingText from '../../Common/animation/SurfacingText/SurfacingText';
import ContactLink from '../../Elements/ContactLink/ContactLink';
import TextWave from '../../Elements/TextWave/TextWave';
import classes from './Footer.module.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={classes.wrap}>
      <div className={classes.container}>
        <TextWave value={t('footer.end')} />
      </div>
      <div className={classes.footer}>
        <div className={classes.footerBlock}>
          <div className={classes.title}>
            <SurfacingText sequence={false}>
              {t('footer.contact')} <br />
              {t('footer.me')}
            </SurfacingText>
          </div>
        </div>
        <div className={classes.spliter} />
        <div className={classes.footerItem}>
          <div className={classes.contacts}>
            <ContactLink
              text="fyodorov_vasya@list.ru"
              icon="img/icons/mail.svg"
              href="mailto:fyodorov_vasya@list.ru"
            />
            <ContactLink
              text="@twenty_seventh"
              icon="img/icons/telegram.svg"
              href="https://t.me/twenty_seventh"
            />
            <ContactLink
              text="github.com/pinkipail"
              icon="img/icons/github.svg"
              href="https://github.com/pinkipail"
            />
          </div>
        </div>
        <div className={classes.copyright}>
          Copyright 2021 by Fedorov Vasiliy. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
