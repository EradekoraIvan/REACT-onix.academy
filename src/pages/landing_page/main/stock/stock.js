import React from 'react';
import style from './stock.module.css';
import bg from '../../../../img/bg/stok.png';
import Background from '../../feirst_screen/background/background';
import CopperPro from '../../copper_pro/copper_pro';
import GoCatalog from '../../../../component/button/go_catalog/go_catalog';
import sliderImg from '../../../../img/slider_ferst_screen/slider_img/dst.png';

class Stock extends React.Component {
  render() {
    return (
      <section className={`${style.stock} ${style.container}`}>
        <Background bg={bg} />
        <div className="text">
          <h2>1 + 1 = 3</h2>
          <p>
            Закажите два товара и
            <br />
            {' '}
            получите третий бесплатно
          </p>
          <GoCatalog />
        </div>
        <img className={style.stock_img} src={sliderImg} alt="" />
        <CopperPro />
      </section>

    );
  }
}

export default Stock;
