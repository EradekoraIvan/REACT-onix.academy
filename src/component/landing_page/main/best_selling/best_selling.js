import React from 'react';
import style from './best_selling.module.css'
import ArticleProduct from '../ArticleProduct/article_product';
import CarouselView from '../../../carousel/CarouselView';
import essentialOil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';

const products = [{ image: `${essentialOil}`, id: 1 },
  { image: `${hydrolate}`, id: 2 },
  { image: `${tableware}`, id: 3 },
];

class BestSelling extends React.Component {
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
      heading='лучшие продажи'
      products={productsBlock}
      className={style.bestSellingContainer} />
    );
  }
}
export default BestSelling;
