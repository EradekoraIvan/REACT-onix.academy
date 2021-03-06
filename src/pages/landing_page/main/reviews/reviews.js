import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../../../../img/reviews/Ivanov.png';
import withCarousel from '../../../../HOC/withCarousel';
import CarouselReviews from '../../../../component/carousel/CarouselReviews';
import style from './reviews.module.css';

const reviewsImg = [
  { photo: `${photo}`, id: 1, },
  { photo: `${photo}`, id: 2, },
  { photo: `${photo}`, id: 3, },
  { photo: `${photo}`, id: 4, },
  { photo: `${photo}`, id: 5, },
  { photo: `${photo}`, id: 6, },
];

function Reviews({
  prevHandler,
  nextHandler,
  disabledPrev,
  disabledNext,
  innerRef,
}) {
  const { t } = useTranslation();
  return (
    <CarouselReviews
      heading={t('reviews.reviews_header')}
      products={reviewsImg}
      className={style.reviews}
      prevHandler={prevHandler}
      nextHandler={nextHandler}
      disabledPrev={disabledPrev}
      disabledNext={disabledNext}
      innerRef={innerRef}
    />
  );
}

export default withCarousel(Reviews, reviewsImg);
