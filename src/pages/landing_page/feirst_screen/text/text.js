import React from 'react';
import './text.css';
import { useTranslation } from 'react-i18next';
import BuyButton from '../../../../component/button/buy_button/buy_batton';
import Dots from '../../../../component/button/dots/dots_fs';
import Line from '../../../../img/slider_ferst_screen/Line_1.png';

function Text() {
  const { t } = useTranslation();
  return (
    <div className="text">
      <h1>{t('landing_page.header')}</h1>
      <img className="line" src={Line} alt="" />
      <p className="product_name_fs">
        {t('landing_page.distiller')}
        {' '}
      </p>
      <p className="prise">
        <span>{t('price')}</span>
        <span>4 906 грн</span>
      </p>
      <BuyButton />
      <Dots />
    </div>
  );
}

export default Text;
