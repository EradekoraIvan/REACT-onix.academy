import React from 'react';
import PropTypes from 'prop-types';
import style from './li.module.css';

class Li extends React.Component {
  render() {
    const {
      icon, h, p, details 
    } = this.props;
    return (
      <li className={style.whyUsLi}>
        <img src={icon} alt="" />
        <h3>{h}</h3>
        <p> 
          {' '}
          {p}
          {' '}
        </p>
        <details>
          <summary>Читать далее</summary>
          {details}
        </details>
      </li>
    );
  }
}

Li.propTypes = {
  icon: PropTypes.string.isRequired, 
  h: PropTypes.string.isRequired, 
  p: PropTypes.string.isRequired, 
  details: PropTypes.string.isRequired
};

export default Li;
