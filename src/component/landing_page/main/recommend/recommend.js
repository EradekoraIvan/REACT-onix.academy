import React from "react";
import style from './recommend.module.css';
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

class Recommend extends React.Component {
    render() {
        return (
            <section className="grey_container container">
                <h2>скидки</h2>
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

export default Recommend;