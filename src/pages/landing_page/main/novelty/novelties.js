import React, { useContext } from 'react';
import style from './novelties.module.css';
import CarouselView from '../../../../component/carousel/CarouselProducts';
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

function Novelties({
  prevHandler,
  nextHandler,
  disabledPrev,
  disabledNext,
  innerRef
}) {
  return (
    <CarouselView
      heading="новинки"
      products={items}
      className={style.novelttiesContainer}
      prevHandler={prevHandler}
      nextHandler={nextHandler}
      disabledPrev={disabledPrev}
      disabledNext={disabledNext}
      innerRef={innerRef}
    />
  );
}
export default withCarousel(Novelties, items);
