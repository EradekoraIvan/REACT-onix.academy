import React from 'react';
import style from './NewsList.module.css';
import News from '../News';

class NewsList extends React.Component {
  render() {
    return (
      <>
        <h1 className={style.news_h1}>Новости</h1>
        <News />
      </>
    );
  }
}

export default NewsList;
