import React from 'react';
import PropTypes from 'prop-types';
import style from './arrow.module.css';

function MainArrow({
  prevHandler,
  nextHandler,
  disabledPrev,
  disabledNext
}) {
  return (
    <>
      <button className={style.buttonLeft} type="button" onClick={prevHandler} disabled={disabledPrev}>
        <svg className={style.arrow_left_3} viewBox="0 0 9 9">
          <path
            d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"
          />
        </svg>
      </button>
      <button className={style.buttonRight} type="button" onClick={nextHandler} disabled={disabledNext}>
        <svg className={style.arrow_right_3} viewBox="0 0 9 9">
          <path
            d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"
          />
        </svg>
      </button>
    </>
  );
}

MainArrow.propTypes = {
  prevHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
  disabledNext: PropTypes.bool.isRequired,
};

export default MainArrow;
