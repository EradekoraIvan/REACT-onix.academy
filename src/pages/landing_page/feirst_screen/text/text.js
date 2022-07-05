import React from 'react';
import './text.css';
import BuyButton from '../../../../component/button/buy_button/buy_batton';
import Dots from '../../../../component/button/dots/dots_fs';
import Line from '../../../../img/slider_ferst_screen/Line_1.png';

function Text() {
    return (
      <div className="text">
        <h1>Хит продаж</h1>
        <img className="line" src={Line} alt="" />
        <p className="product_name_fs">
          Дистиллятор для
          <br />
          {' '}
          эфирных масел
          {' '}
        </p>
        <p className="prise">
          <span>Цена</span>
          <span>4 906 грн</span>
        </p>
        <BuyButton />
        <Dots />
      </div>
    );
  }

export default Text;
