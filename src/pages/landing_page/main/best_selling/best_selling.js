import React from 'react';
import style from './best_selling.module.css';
import CarouselView from '../../../../component/carousel/CarouselView';
import essentialOil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';
import withCarousel from '../../../../HOC/withCarousel';

const items = [
  { image: `${essentialOil}`, id: 1 },
  { image: `${hydrolate}`, id: 2 },
  { image: `${essentialOil}`, id: 3 },
  { image: `${tableware}`, id: 4 },
  { image: `${hydrolate}`, id: 5 },
  { image: `${tableware}`, id: 6 },
  { image: `${essentialOil}`, id: 7 },
  { image: `${hydrolate}`, id: 8 },
];

class BestSelling extends React.Component {
  render() {
    const {
      prevHandler, nextHandler, disabledPrev, disabledNext, innerRef 
    } = this.props;
    return (
      <CarouselView
        heading="лучшие продажи"
        products={items}
        className={style.bestSellingContainer}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        disabledPrev={disabledPrev}
        disabledNext={disabledNext}
        innerRef={innerRef}
      />
    );
  }
}
export default withCarousel(BestSelling, items);
