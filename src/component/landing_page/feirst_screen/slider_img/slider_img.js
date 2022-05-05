import React from "react";
import style from './slider_img.module.css';
import slider_img from '../../../../img/slider_ferst_screen/slider_img/dst.png';

class SliderImg extends React.Component{
    render(){
        return(
            <img className={style.slider_img} src={slider_img} alt=""/>
        )
    }
}
export default SliderImg;