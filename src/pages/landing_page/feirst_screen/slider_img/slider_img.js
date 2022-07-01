import React from 'react';
import style from './slider_img.module.css';
import sliderImg from '../../../../img/slider_ferst_screen/slider_img/dst.png';

class SliderImg extends React.Component {
  render() {
    return (
      <img className={style.slider_img} src={sliderImg} alt="" />
    );
  }
}
export default SliderImg;
