import React, { useState } from 'react';
import Refresh from '../../../component/button/refreshButton/refreshButton';
import style from './NewsList.module.css';
import News from '../News';

function NewsList() {
  const [hendelLoad, setHendelLoad] = useState(false);
  const goLoad = () => {
    setHendelLoad((prevhendelLoad) => {
      const valueLoad = !prevhendelLoad;
      return valueLoad;
    });
  };

  return (
    <>
      <div className={style.news}>
        <h1 className={style.news_h1}>Новости</h1>
        <Refresh 
          goLoad={goLoad}
        />
      </div>
      <News 
        isRefresh={hendelLoad}
      />
    </>
  );
}

export default NewsList;
