import React from "react";
import style from './novelties.module.css';
import Arrow from "../arrow/arrow";
import ArticleProduct from "../ArticleProduct/article_product";
import Dots from "../../../button/dots/dots_fs";
import GoCatalog from "../../../button/go_catalog/go_catalog";
import essential_oil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';


const products =
    [{ "image": `${essential_oil}` },
    { "image": `${hydrolate}` },
    { "image": `${tableware}` },
    ];

class Novelties extends React.Component {
    render() {
        return (
            <section class="novelty container">
                <h2>новинки</h2>
                <Arrow />
                <div class="slider_w">
                    {products.map(item => <ArticleProduct image={item.image} />)}
                </div>
                <Dots />
                <GoCatalog />
            </section>
        )
    }
}
export default Novelties;