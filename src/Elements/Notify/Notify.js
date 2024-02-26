import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Notify.module.css';

function Notify(props) {
  const [visitorName, setVisitorName] = useState('');

  useEffect(() => {
    const nameParam = new URLSearchParams(window.location.search).get('name');
    if (nameParam) {
      setVisitorName(nameParam);
    }
    const timer = setTimeout(() => {
      if (nameParam) {
        setVisitorName('');
      }
    }, 20000);
    return (() => clearTimeout(timer));
  }, []);

  function onCloseNotification() {
    setVisitorName('');
  }

  const { type } = props;
  const { t } = useTranslation();
  let notifyTitle;
  let notifyText;

  switch (type) {
    case 'name':
      notifyTitle = `${t('notify title.name')}, ${visitorName}!!!`;
      notifyText = t('notify text.name');
      break;
    case 'sent':
      notifyTitle = t('notify title.sent');
      notifyText = t('notify text.sent');
      break;
    case 'retry':
      notifyTitle = t('notify title.retry');
      notifyText = t('notify text.retry');
      break;
    default:
      break;
  }

  return (
    <>
      { visitorName && (
        <div className={classes.notify}>
          <div className={classes.notifyBlock}>
            <button className={classes.closeButton} type="button" onClick={onCloseNotification}><img src="img/icons/close.svg" alt="close" /></button>
            <p className={classes.title}>{notifyTitle}</p>
            <p className={classes.text}>{notifyText}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Notify;
