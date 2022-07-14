import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import style from './li.module.css';

function Li({
  icon, h, p, details 
}) {
  const { t } = useTranslation();
  return (
    <li className={style.whyUsLi}>
      <img src={icon} alt="" />
      <h3>{h}</h3>
      <p> 
        {' '}
        {p}
        {' '}
      </p>
      <details>
        <summary>{t('read_more')}</summary>
        {details}
      </details>
    </li>
  );
}

Li.propTypes = {
  icon: PropTypes.string.isRequired, 
  h: PropTypes.string.isRequired, 
  p: PropTypes.string.isRequired, 
  details: PropTypes.string.isRequired
};

export default Li;
