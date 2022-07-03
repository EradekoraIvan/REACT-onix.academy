import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './CarouselView.module.css';
import MainArrow from '../../pages/landing_page/main/arrow/MainArrow';
import Dots from '../button/dots/dots_fs';
import GoCatalog from '../button/go_catalog/go_catalog';
import ReviewsArticle from '../../pages/landing_page/main/reviews/reviews_article/reviews_article';

function CarouselReviews(
  {
    heading,
    products,
    className,
    prevHandler,
    nextHandler,
    disabledPrev,
    disabledNext,
    innerRef
  }
) {
  return (
    <section className={className}>
      <h2>{heading}</h2>
      <MainArrow
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        disabledPrev={disabledPrev}
        disabledNext={disabledNext}
        innerRef={innerRef}
      />
      <div className={style.sliader}>
        <div className={style.sliderTrack} ref={innerRef}>
          {products.map((item) => (
            <div className={style.item}>
              <ReviewsArticle key={item.id} photo={item.photo} />
            </div>
          ))}
        </div>
      </div>
      <Dots />
      <GoCatalog />
    </section>
  );
}

CarouselReviews.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  prevHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
  disabledNext: PropTypes.bool.isRequired,
  innerRef: PropTypes.string.isRequired,
};

export default CarouselReviews;
