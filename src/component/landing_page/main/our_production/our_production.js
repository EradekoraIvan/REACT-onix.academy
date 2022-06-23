import React from 'react';
import './our_production.css';
import { Link } from 'react-router-dom';
import essentialOil from '../../../../img/product/our_production/essential_oil.png';
import hydrolate from '../../../../img/product/our_production/hydrolate.png';
import tableware from '../../../../img/product/our_production/tableware.png';
import accessories from '../../../../img/product/our_production/accessories.png';
import individual from '../../../../img/product/our_production/individual.png';
import vouchers from '../../../../img/product/our_production/vouchers.png';

class OurProduction extends React.Component {
  render() {
    return (

      <section className="our_production">

        <h2>наша продукция</h2>

        <article className="kart copper">
          <Link to="/">
            <img src={essentialOil} alt="" />
            <h3>Для эфирных масел</h3>
          </Link>
        </article>

        <article className="kart gray">
          <Link to="/">
            <img src={hydrolate} alt="" />
            <h3>Для гидролатов</h3>
          </Link>
        </article>

        <article className="kart gray">
          <Link to="/">
            <img src={tableware} alt="" />
            <h3>Медная посуда</h3>
          </Link>
        </article>

        <article className="kart gray">
          <Link to="/">
            <img src={accessories} alt="" />
            <h3>Аксессуары из меди</h3>
          </Link>
        </article>

        <article className="kart">
          <Link to="/">
            <img src={individual} alt="" />
            <h3>
              Индивидуальный
              <br />
              {' '}
              заказ
            </h3>
          </Link>
        </article>

        <article className="kart">
          <Link to="/">
            <img src={vouchers} alt="" />
            <h3>
              Скидки и
              <br />
              {' '}
              предложения
            </h3>
          </Link>
        </article>
      </section>

    );
  }
}

export default OurProduction;
