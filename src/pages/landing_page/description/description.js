import React from 'react';
import './description.css';
import { Link } from 'react-router-dom';

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <section>
          <h2>Интернет магазин медной посуды</h2>
          <p>Автор: Новиков Иван</p>
          <p>
            <Link to="https://github.com/EradekoraIvan/REACT-onix.academy" target="_blank">Ссылка на Github</Link>
          </p>
          <p>
            <Link
              to="https://www.figma.com/file/d8EuHOVVRQFLq9Sj3XOxbP/COPPER-(Copy)?node-id=0%3A1"
              target="_blank"
            >
              Оригинал макета
            </Link>
          </p>
        </section>
      </div>
    );
  }
} 
export default Description;
