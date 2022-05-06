import React from "react"
import style from './like.module.css';


class Like extends React.Component{
    constructor(props){
        super(props)
        this.state={
            style : true
        };
        this.likeClick = this.likeClick.bind(this);
    }

likeClick() {
    this.setState(state => ({
        style: !state.style
    }));
}
    render(){
        if (this.state.style){
        return(
            <span onClick={this.likeClick} class={style.like}></span>
        );
        }
        else {
            return(
                <span onClick={this.likeClick} class={`${style.like} ${style.like_active}`}></span>
            );
        }
    }
} 
export default Like;