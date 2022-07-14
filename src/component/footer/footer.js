import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './footer.module.css';
import logo from '../../img/svg/logo.svg';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={style.container}>
      <div className={style.footer_wrapper}>
        <div className={style.footer_logo}>
          <img className={style.img} src={logo} alt="logo" />
          <p>
            © 2021 “Copper Pro”
            <br />
            {t('footer.rights')}
          </p>
          <Link to="/">{t('footer.confidentiality')}</Link>
        </div>
        <div className={style.footer_group}>
          <div className={style.footer_nav}>
            <h3>{t('navigation.nav')}</h3>
            <ul className={style.ul}>
              <li><Link to="/">{t('navigation.catalog')}</Link></li>
              <li><Link to="News/NewsList/NewsList.js">{t('navigation.news')}</Link></li>
              <li><Link to="/">{t('navigation.delivery')}</Link></li>
              <li><Link to="/">{t('navigation.aboutUs')}</Link></li>
              <li><Link to="/">{t('navigation.contacts')}</Link></li>
            </ul>
          </div>
          <div className={style.footer_catalog}>
            <h3>{t('navigation.catalog')}</h3>
            <ul className={style.ul}>
              <li><Link to="/">{t('categories.for_essential_oils')}</Link></li>
              <li><Link to="/">{t('categories.for_hydrolots')}</Link></li>
              <li><Link to="/">{t('categories.copper_utensils')}</Link></li>
              <li><Link to="/">{t('categories.copper_accessories')}</Link></li>
              <li><Link to="/">{t('categories.individual_order')}</Link></li>
              <li><Link to="/">{t('categories.discounts_and_offers')}</Link></li>
            </ul>
          </div>
          <div className={style.footer_contacts}>
            <h3>{t('footer.contacts')}</h3>
            <ul className={style.ul}>
              <li>
                <Link to="/">
                  {t('footer.address')}
                </Link>
              </li>
              <li><Link to="tel:+380988044247">+38 (096) 990 67 56</Link></li>
              <li><Link to="mailto:eradekora@gmail.com">a.alambik@gmail.com</Link></li>
              <li>
                <div className={style.socials}>
                  <Link className={`${style.social} ${style.twitter}`} to="/" />
                  <Link className={`${style.social} ${style.facebook}`} to="/" />
                  <Link className={`${style.social} ${style.instagram}`} to="/" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/" className={style.up}>{t('footer.up')}</Link>
    </footer>
  );
}
export default Footer;
