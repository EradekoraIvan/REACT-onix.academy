import React from "react";
import style from './article_product.module.css';
import Like from "../../../button/like/like";


class ArticleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <article className={style.sale}>
                <Like />
                
                    <img src={this.props.image} alt="" />
                    <div className={style.cart_p}>
                        <h4><span>Медный чайник с<br /> фарфоровой ручкой</span></h4>
                        <div>
                            <p className={style.discount}> <span>1973 грн</span></p>
                            <p className={`${style.cart_p_prise} ${style.fool_price}`}><span>1953 грн</span></p>
                        </div>
                    </div>
                
            </article>
        )
    }
}

export default ArticleProduct;