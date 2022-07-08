import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import style from './CarouselView.module.css';
import MainArrow from '../../pages/landing_page/main/arrow/MainArrow';
import Dots from '../button/dots/dots_fs';
import GoCatalog from '../button/go_catalog/go_catalog';
import ArticleProduct from '../ArticleProduct/article_product';

function CarouselView(
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
          {products.map((item, index) => (
            <div className={style.item}>
              <ArticleProduct key={item.id} image={item.image} id={item.id} index={index} />
            </div>
          ))}
        </div>
      </div>
      <Dots />
      <GoCatalog />
    </section>
  );
}

CarouselView.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  prevHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
  disabledNext: PropTypes.bool.isRequired,
  innerRef: PropTypes.string.isRequired,
};

export default CarouselView;
