import React from 'react';
import style from './dots.module.css';

class Dots extends React.Component {
  render() {
    return (
      <div className={style.dots}>
        <div className={`${style.dot} ${style.active}`} />
        <div className={style.dot} />
        <div className={style.dot} />
      </div>
    );
  }
}

export default Dots;
