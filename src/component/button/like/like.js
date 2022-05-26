import React from "react"
import style from './like.module.css';


class Like extends React.Component{
    constructor(props){
        super(props)
        this.state={
            style : true
        };
    }

likeClick =()=> {
    this.setState(state => ({
        style: !state.style
    }));
}
    render(){

        return(
            <span onClick={this.likeClick} className={`${style.like} ${this.state.style ? style.like_active : ''}`}></span>
        )
    }
} 
export default Like;