import React from "react";
import './first_screen.css';
import bg from '../../../img/bg/bg.png';
import Headrer from '../../header/header.js';
import Background from '../feirst_screen/background/background.js';
import Arrow from "./arrow/arrow.js";
import Text from "./text/text.js";
import SliderImg from "./slider_img/slider_img";
import CopperPro from "../copper_pro/copper_pro";

class FirstScreen extends React.Component {
    render() {
        return (
            <div className="first_screen_wrapper">
                <Background bg={bg} />
                <Headrer />
                <Arrow />
                <Text/>
                <SliderImg/>
                <CopperPro/>
            </div>

        )
    }
}

export default FirstScreen;