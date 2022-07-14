import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import style from './article_product.module.css';
import Like from '../button/like/like';

function ArticleProduct({ image, id, index }) {
  const { t } = useTranslation();
  return (
    <article className={style.sale}>
      <Like
        id={id}
        index={index}
      />   
      <img src={image} alt="" />
      <div className={style.cart_p}>
        <h4>
          <span>
            {t('products.copper_teapot')}
          </span>
        </h4>
        <div>
          <p className={style.discount}> 
            {' '}
            <span>1973 грн</span>
          </p>
          <p className={`${style.cart_p_prise} ${style.fool_price}`}><span>1953 грн</span></p>
        </div>
      </div>
                
    </article>
  );
}

ArticleProduct.propTypes = {
  image: PropTypes.string.isRequired
};

export default ArticleProduct;
