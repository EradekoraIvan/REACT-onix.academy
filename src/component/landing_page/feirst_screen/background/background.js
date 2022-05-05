import React from "react";
import style from './background.module.css';


class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return(
            
            <img className={style.bgfs} src={this.props.bg} alt=""/>
            
        )
    }
}

export default Background;

