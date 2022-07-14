import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import style from './go_catalog.module.css';

function GoCatalog() {
  const { t } = useTranslation();
  return (
    <Link className={style.go_catalog} to="/">{t('go_to_catalog')}</Link>
  );
}
export default GoCatalog;
