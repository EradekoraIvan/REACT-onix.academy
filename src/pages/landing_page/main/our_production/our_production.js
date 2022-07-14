import React from 'react';
import './our_production.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import essentialOil from '../../../../img/product/our_production/essential_oil.png';
import hydrolate from '../../../../img/product/our_production/hydrolate.png';
import tableware from '../../../../img/product/our_production/tableware.png';
import accessories from '../../../../img/product/our_production/accessories.png';
import individual from '../../../../img/product/our_production/individual.png';
import vouchers from '../../../../img/product/our_production/vouchers.png';

function OurProduction() {
  const { t } = useTranslation();
  return (

    <section className="our_production">

      <h2>{t('categories.our_production')}</h2>

      <article className="kart copper">
        <Link to="/">
          <img src={essentialOil} alt="" />
          <h3>{t('categories.for_essential_oils')}</h3>
        </Link>
      </article>

      <article className="kart gray">
        <Link to="/">
          <img src={hydrolate} alt="" />
          <h3>{t('categories.for_hydrolots')}</h3>
        </Link>
      </article>

      <article className="kart gray">
        <Link to="/">
          <img src={tableware} alt="" />
          <h3>{t('categories.copper_utensils')}</h3>
        </Link>
      </article>

      <article className="kart gray">
        <Link to="/">
          <img src={accessories} alt="" />
          <h3>{t('categories.copper_accessories')}</h3>
        </Link>
      </article>

      <article className="kart">
        <Link to="/">
          <img src={individual} alt="" />
          <h3>{t('categories.individual_order')}</h3>
        </Link>
      </article>

      <article className="kart">
        <Link to="/">
          <img src={vouchers} alt="" />
          <h3> 
            {' '}
            {t('categories.discounts_and_offers')}
            {' '}
          </h3>
        </Link>
      </article>
    </section>

  );
}

export default OurProduction;
