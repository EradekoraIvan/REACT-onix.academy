import React from "react";
import './text.css';
import BuyButton from "../../../button/buy_button/buy_batton";
import Dots from "../../../button/dots/dots_fs";


class Text extends React.Component {
    render() {
        return (
                <div className="text">
                    <h1>Хит продаж</h1>
                    <img className="line" src="/img/slider_first_screen/Line_1.png" alt=""/>
                        <p className="product_name_fs">Дистиллятор для <br/> эфирных масел </p>
                        <p className="prise"><span>Цена</span><span>4 906 грн</span></p>
                        <BuyButton/>
                        <Dots/>
                </div>
        )
    }
} 

export default Text;