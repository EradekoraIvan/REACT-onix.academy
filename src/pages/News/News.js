import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { loadNews } from '../../redux/NewsApi/slice';
import NewsView from './NewsView';
import style from './News.module.css';

function News(isRefresh) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://api.thenewsapi.com/v1/news/top?api_token=8HM974pyYtJ5JfOIpxnaXJCShh2D2zlO98m4zATL')
      .then(((res) => {
        dispatch(loadNews(res.data.data));
      }))
      .catch(() => {
        console.error(error);
      });
  }, [isRefresh]);

  const news = useSelector((state) => state.news.news);

  const newsArray = news.map((item) => {
    return (
      <NewsView
        key={item.uuid}
        image={item.image_url}
        publishedAt={item.published_at}
        h4={item.title}
        newsText={item.snippet}
      />
    );
  });

  return (
    <div className={style.wrapper}>
      {newsArray}
    </div>
  );
}

export default News;
