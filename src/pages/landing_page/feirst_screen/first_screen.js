import React from 'react';
import './first_screen.css';
import bg from '../../../img/bg/bg.png';
import Headrer from '../../../component/header/header';
import Background from './background/background';
import Arrow from './arrow/arrow';
import Text from './text/text';
import SliderImg from './slider_img/slider_img';
import CopperPro from '../copper_pro/copper_pro';

function FirstScreen() {
  return (
    <div className="first_screen_wrapper">
      <Background bg={bg} />
      <Headrer headerStyle="header_style_fs" />
      <Arrow />
      <Text />
      <SliderImg />
      <CopperPro />
    </div>

  );
}

export default FirstScreen;
