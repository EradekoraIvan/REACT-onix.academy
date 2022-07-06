import React, { useState, useEffect } from 'react';
import NewsView from './NewsView';
import axios from 'axios';
import style from './News.module.css';

function News() {
    const [news, setNews] = useState([])
    
    useEffect(() => {
        axios
            .get('https://api.thenewsapi.com/v1/news/top?api_token=8HM974pyYtJ5JfOIpxnaXJCShh2D2zlO98m4zATL')
            .then((res => {
                setNews( res.data.data);
                console.log(news)
            }))
            .catch(() => {
                console.error(error);
            })
    }, []);

    const newsArray = news.map((item) => {
        return(
            <NewsView
            key={item.uuid}
            image={item.image_url}
            publishedAt={item.published_at}
            h4={item.title}
            newsText={item.snippet}
        />
        )  
    });

    return (
        <div className={style.wrapper}>
            {newsArray}
        </div>
    );
}

export default News;

