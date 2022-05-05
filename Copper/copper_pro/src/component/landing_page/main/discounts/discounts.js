import React from "react";
import style from './discounts.module.css';

import MainArrow from "../arrow/arrow";
import ArticleProduct from "../ArticleProduct/article_product";
import GoCatalog from "../../../button/go_catalog/go_catalog";
import Dots from "../../../button/dots/dots_fs";
import essential_oil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';


const products =
    [{ "image": `${essential_oil}` },
    { "image": `${hydrolate}` },
    { "image": `${tableware}` },
    ];

class Discouts extends React.Component {
    render() {
        return (
            <section className="discounts container">
                <h2>мы рекомендуем</h2>
                <MainArrow />
                <div className="slider_w">
                    {products.map(item => <ArticleProduct image={item.image} />)}
                </div>
                <Dots />
                <GoCatalog />
            </section>
        )
    }
}

export default Discouts;