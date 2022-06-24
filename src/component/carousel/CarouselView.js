import React from 'react';
import style from './CarouselView.module.css';
import MainArrow from '../landing_page/main/arrow/MainArrow';
import Dots from '../button/dots/dots_fs';
import GoCatalog from '../button/go_catalog/go_catalog';
import ArticleProduct from '../landing_page/main/ArticleProduct/article_product';

class CarouselView extends React.Component {
  render() {
    const { heading, products, className, prevHandler,
      nextHandler, disabledPrev, disabledNext, innerRef } = this.props;
    return (
      <section className={className}>
        <h2>{heading}</h2>
        <MainArrow
          prevHandler={prevHandler}
          nextHandler={nextHandler}
          disabledPrev={disabledPrev}
          disabledNext={disabledNext}
          innerRef={innerRef} />
        <div className={style.sliader} >
          <div className={style.sliderTrack} ref={innerRef}>
            {products.map((item) =>
              <div className={style.item}>
                <ArticleProduct key={item.id} image={item.image} />
              </div>)}
          </div>
        </div>
        <Dots />
        <GoCatalog />
      </section>
    );
  }
}
export default CarouselView;
