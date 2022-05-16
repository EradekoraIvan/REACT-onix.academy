import React from "react";
import Arrow from "../arrow/arrow";
import ArticleProduct from "../ArticleProduct/article_product";
import Dots from "../../../button/dots/dots_fs";
import GoCatalog from "../../../button/go_catalog/go_catalog";
import essential_oil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';


const products =
    [{ "image": `${essential_oil}`, id:1},
    { "image": `${hydrolate}`, id:2 },
    { "image": `${tableware}`, id:3 },
    ];

class Novelties extends React.Component {
    render() {
        return (
            <section className="novelty container">
                <h2>новинки</h2>
                <Arrow />
                <div className="slider_w">
                    {products.map(item => <ArticleProduct key={item.id} image={item.image} />)}
                </div>
                <Dots />
                <GoCatalog />
            </section>
        )
    }
}
export default Novelties;