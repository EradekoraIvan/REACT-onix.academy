import React from 'react';
import PropTypes from 'prop-types';
import style from './NewsView.module.css';

class NewsView extends React.Component {
  render() {
    const {
      image, publishedAt, h4, newsText 
    } = this.props;
    return (
      <div className={style.news_item_wrapper}>
        <div className={style.image_container}>
          <img className={style.news_image} src={image} alt="" />
          <div className={style.date}> 
            {publishedAt}
          </div>
          <h4 className={style.h4}> 
            {h4}
          </h4>
        </div>
        <p className={style.news_text}> 
          {newsText}
        </p>
      </div>
    );
  }
}

NewsView.propTypes = {
  image: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  h4: PropTypes.string.isRequired,
  newsText: PropTypes.string.isRequired,
}; 

export default NewsView;
