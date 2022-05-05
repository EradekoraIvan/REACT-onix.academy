import React from "react"
import style from './like.module.css';


class Like extends React.Component{
    render(){
        return(
            <span class={`${style.like} ${style.like_active}`}></span>
        )
    }
} 
export default Like;