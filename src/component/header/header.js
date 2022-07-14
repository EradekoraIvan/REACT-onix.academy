import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import logo from '../../img/svg/logo.svg';
import ThemeButton from '../themeButton/ThemeButton';
import LanguageSelection from '../lngBtn/lngBtn';
import { useLike } from '../../context/likeProvider';

function Header({ headerStyle }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [counterShoppingCart, setCounterShoppingCart] = useState(0);
  const itsCounter = useLike();

  return (
    <header className={headerStyle}>
      <div className="header_wrapper">
        <Link to="/" className="logo"><img src={logo} alt="Copper Pro" /></Link>
        <nav>
          <Link to="/">{t('navigation.catalog')}</Link>
          <Link to="News/NewsList/NewsList.js">{t('navigation.news')}</Link>
          <Link to="/">{t('navigation.delivery')}</Link>
          <Link to="/">{t('navigation.aboutUs')}</Link>
          <Link to="/">{t('navigation.contacts')}</Link>
          <Link to="pages/biography/biography.js">{t('navigation.biographies')}</Link>
        </nav>
        <div className="ThemeIconsLngWrapper">
          <div className="ThemeLngWrapper">
            <ThemeButton />
            <LanguageSelection 
              changeLanguage={changeLanguage}
            />
          </div>
          <div className="icons_list">
            <Link className="icon heart" id="heart" to="/">
              {' '}
              <p>
                {itsCounter.likeId.length || ''}
              </p>
              {' '}
            </Link>
            <Link className="icon user" to="profile/profile.js"> </Link>
            <Link className="icon shopping_cart" id="shopping-cart" to="/">
              {' '}
              {counterShoppingCart || ''}
              {' '}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  headerStyle: PropTypes.string.isRequired,
};

export default Header;
