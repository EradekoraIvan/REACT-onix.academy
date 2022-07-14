import React from 'react';
import { useTranslation } from 'react-i18next';
import './buy_button.css';

function BuyButton() {
  const { t } = useTranslation();
  
  return (
    <button className="buy_button" type="button">{t('buy')}</button>
  );
}
export default BuyButton;
