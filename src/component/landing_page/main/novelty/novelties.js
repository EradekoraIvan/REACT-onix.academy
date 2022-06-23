import React from 'react';
import style from './novelties.module.css';
import ArticleProduct from '../ArticleProduct/article_product';
import CarouselView from '../../../carousel/CarouselView';
import essentialOil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';

const products = [{ image: `${essentialOil}`, id: 1 },
  { image: `${hydrolate}`, id: 2 },
  { image: `${tableware}`, id: 3 },
];

class Novelties extends React.Component {
  render() {
    const productsBlock = products.map((item) =>{
      return(
        <ArticleProduct
        key={item.id}
        image={item.image} />
      )
    })
    return (
      <CarouselView
      heading='новинки'
      products={productsBlock}
      className={style.novelttiesContainer} />
    );
  }
}
export default Novelties;
