import React from "react";
import style from './NewsView.module.css';



class NewsView extends React.Component {
    render() {
        return (
           <div className={style.news_item_wrapper}>
               <div className={style.image_container}>
                   <img className={style.news_image} src={this.props.image} alt="" />
                   <div className={style.date}> {this.props.published_at} </div>
                   <h4 className={style.h4}> {this.props.h4} </h4>
               </div>
                <p className={style.news_text}> {this.props.newsText} </p>
           </div>
        )
    }
}

export default NewsView