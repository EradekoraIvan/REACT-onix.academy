import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './refreshButton.module.css';
/* import 'antd/dist/antd.css'; */

function Refresh({ goLoad }) {
  const [load, setLoad] = useState(false);
  const news = useSelector((state) => state.news.news);
  useEffect(() => {
    setTimeout(() => {
      setLoad(() => {
        return false;
      });
    }, 1000);
  }, [news]);
  
  const loader = () => {
    setLoad((prevLoad) => {
      const valueLoad = !prevLoad;
      return valueLoad;
    });
 
    /* setTimeout(() => {
      setLoad(() => {
        return false;
      });
    }, [news]); */
  };
  
  return (
    <Button
      type="primary" 
      className={style.RefreshButton} 
      loading={load}
      onClick={() => {
        goLoad();
        loader();
      }}
    >
      {' '}
      Обновить
      {' '}
    </Button>
  );
}

Refresh.propTypes = {
  goLoad: PropTypes.bool.isRequired,
};

export default Refresh;
