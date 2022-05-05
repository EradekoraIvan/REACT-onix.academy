import React from "react";
import style from './dots.module.css';

class Dots extends React.Component {
    render() {
        return (
            <div className={style.dots}>
                <div className={`${style.dot} ${style.active}`}></div>
                <div className={style.dot}></div>
                <div className={style.dot}></div>
            </div>
        )
    }
}

export default Dots;