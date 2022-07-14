import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import style from './reviews_article.module.css';

function ReviewsArticle({ photo }) {
  const { t } = useTranslation();
  return (
    <article>
      <img src={photo} alt="" />
      <h3>{t('reviews.name')}</h3>
      <p>
        {t('reviews.review')}
      </p>
      <span className={style.opinion_date}>20.10.21</span>
    </article>
  );
}

ReviewsArticle.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default ReviewsArticle;
