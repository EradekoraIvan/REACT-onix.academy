import React from 'react';
import PropTypes from 'prop-types';
import style from './background.module.css';

class Background extends React.Component {
  render() {
    const { bg } = this.props;
    return (
      <img className={style.bgfs} src={bg} alt="" />
    );
  }
}

Background.propTypes = {
  bg: PropTypes.string.isRequired
};

export default Background;
