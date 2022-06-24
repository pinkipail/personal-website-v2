// TODO
// наполнить страницу
import React from 'react';
import { useTranslation } from 'react-i18next';
import SurfacingText from '../../Common/animation/SurfacingText/SurfacingText';
import ContactLink from '../../Elements/ContactLink/ContactLink';
import classes from './Footer.module.css';

const year = new Date().getFullYear();

function Footer() {
  const { t } = useTranslation();

  return (

    <div className={classes.footer}>
      <div className={classes.footerBlock}>
        <div className={classes.title}>
          <SurfacingText sequence={false} backBlur={false}>
            {t('footer.contact')} <br />
            {t('footer.me')}
          </SurfacingText>
        </div>
      </div>
      <div className={classes.splitter} />
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
          {/* todo: replace with linkedin */}
          <ContactLink
            text="linkedin.com/vasiliy-fedorov"
            icon="img/icons/linkedin_icon.svg"
            href="https://www.linkedin.com/in/vasiliy-fedorov-a23784225/"
          />
        </div>
      </div>
      <div className={classes.copyright}>
        Copyright {year} by Vasiliy Fedorov. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
