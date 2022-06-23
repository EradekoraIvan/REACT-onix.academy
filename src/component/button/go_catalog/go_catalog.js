import React from 'react';
import { Link } from 'react-router-dom';
import style from './go_catalog.module.css';

class GoCatalog extends React.Component {
  render() {
    return (
      <Link className={style.go_catalog} to="/">Перейти в каталог</Link>
    );
  }
}
export default GoCatalog;
