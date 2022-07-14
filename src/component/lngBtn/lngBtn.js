import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './lngBtn.css';
import { CSSTransition } from 'react-transition-group';

function LanguageSelection({ changeLanguage }) {
  const languages = [
    { lng: 'EN', value: 'en' },
    { lng: 'UA', value: 'ua' },
    { lng: 'RU', value: 'ru' },
  ];
  const { t } = useTranslation();
  const [lang, setLang] = useState(false);
  const show = () => {
    setLang(!lang);
  };
  return (
    <div className="lngPos lngVar">
      <button className="lngVar" type="button" onClick={show}>{t('navigation.lng')}</button>
      <CSSTransition
        in={lang}
        timeout={300}
        classNames="lng"
        unmountOnExit
      >
        <div>
          {languages.map((item) => (
            <div
              className="lngVar"
              onClick={() => {
                changeLanguage(item.value);
                show();
              }}
            >
              {item.lng}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}
export default LanguageSelection;
