import React from "react";
import style from './reviews.module.css';
import MainArrow from "../arrow/arrow";
import Dots from "../../../button/dots/dots_fs";
import ReviewsArticle from "./reviews_article/reviews_article";
import photo from '../../../../img/reviews/Ivanov.png';

const reviews_img = [
    { photo: `${photo}` },
    { photo: `${photo}` },
    { photo: `${photo}` },
]

class Reviews extends React.Component {
    render() {
        return (
            <section class="reviews container">
                <h2>что думают о нас</h2>
                <MainArrow />
                <div class="slider_w">
                    {reviews_img.map(item => <ReviewsArticle photo={item.photo} />)}
                </div>
                <Dots />
            </section>
        )
    }
}

export default Reviews;