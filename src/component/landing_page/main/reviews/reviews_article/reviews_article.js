import React from 'react';
import PropTypes from 'prop-types';
import style from './reviews_article.module.css';

class ReviewsArticle extends React.Component {
  render() {
    const { photo } = this.props;
    return (
      <article>
        <img src={photo} alt="" />
        <h3>Иван Иванов</h3>
        <p>
          Наше оборудование прозводится вручную. Мы постоянно производим контроль качества
          произведенной
          продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2
          лет
          происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса.
        </p>
        <span className={style.opinion_date}>20.10.21</span>
      </article>
    );
  }
}

ReviewsArticle.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default ReviewsArticle;
