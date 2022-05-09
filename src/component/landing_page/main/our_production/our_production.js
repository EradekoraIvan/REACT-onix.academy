import React from "react";
import './our_production.css';
import essential_oil from '../../../../img/product/our_production/essential_oil.png';
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
                    <a href="#">
                        <img src={essential_oil} alt="" />
                        <h3>Для эфирных масел</h3>
                    </a>
                </article>

                <article className="kart gray">
                    <a href="#">
                        <img src={hydrolate} alt="" />
                        <h3>Для гидролатов</h3>
                    </a>
                </article>

                <article className="kart gray">
                    <a href="#">
                        <img src={tableware} alt="" />
                        <h3>Медная посуда</h3>
                    </a>
                </article>

                <article className="kart gray">
                    <a href="#">
                        <img src={accessories} alt="" />
                        <h3>Аксессуары из меди</h3>
                    </a>
                </article>

                <article className="kart">
                    <a href="#">
                        <img src={individual} alt="" />
                        <h3>Индивидуальный <br /> заказ</h3>
                    </a>
                </article>

                <article className="kart">
                    <a href="#">
                        <img src={vouchers} alt="" />
                        <h3>Скидки и <br /> предложения</h3>
                    </a>
                </article>
            </section>

        )
    }
}

export default OurProduction;