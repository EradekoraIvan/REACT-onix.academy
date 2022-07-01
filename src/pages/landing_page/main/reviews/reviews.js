import React from 'react';
import MainArrow from '../arrow/MainArrow';
import Dots from '../../../../component/button/dots/dots_fs';
import ReviewsArticle from './reviews_article/reviews_article';
import photo from '../../../../img/reviews/Ivanov.png';

const reviewsImg = [
  { photo: `${photo}`, id: 1, },
  { photo: `${photo}`, id: 2, },
  { photo: `${photo}`, id: 3, }
];

class Reviews extends React.Component {
  render() {
    return (
      <section className="reviews container">
        <h2>что думают о нас</h2>
        <MainArrow />
        <div className="slider_w">
          {reviewsImg.map((item) => <ReviewsArticle key={item.id} photo={item.photo} />)}
        </div>
        <Dots />
      </section>
    );
  }
}

export default Reviews;
