import React from "react";
import style from './arrow.module.css';

class MainArrow extends React.Component {
    render() {
        return (
            <>
                <svg className={style.arrow_left_3} viewBox="0 0 9 9">
                    <path
                        d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z">
                    </path>
                </svg>
                <svg className={style.arrow_right_3} viewBox="0 0 9 9">
                    <path
                        d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z">
                    </path>
                </svg>
            </>
        )
    }
}
export default MainArrow;