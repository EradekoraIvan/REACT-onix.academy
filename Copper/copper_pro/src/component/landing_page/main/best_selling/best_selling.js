import React from "react";
import './best_selling.css';
import MainArrow from "../arrow/arrow";
import essential_oil from '../../../../img/product/essential_oil.png';
import hydrolate from '../../../../img/product/hydrolate.png';
import tableware from '../../../../img/product/tableware.png';
import ArticleProduct from "../ArticleProduct/article_product";
import GoCatalog from "../../../button/go_catalog/go_catalog";
import Dots from "../../../button/dots/dots_fs";


const products =
    [{ "image": `${essential_oil}` },
    { "image": `${hydrolate}` },
    { "image": `${tableware}` },
    ];

class BestSelling extends React.Component {
    render() {
        return (
            <section class="grey_container container">
                <h2>лучшие продажи</h2>
                <MainArrow />
                <div class="slider_w">
                    {products.map(item => <ArticleProduct image={item.image} />)}
                </div>
                <Dots />
                <GoCatalog />


                <img src="img/img_1screen/circles.png" alt="" class="bgfs circles" />
            </section>
        )
    }
}
export default BestSelling;