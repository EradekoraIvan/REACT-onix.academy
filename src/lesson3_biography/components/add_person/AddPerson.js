import React from "react";
import style from './AddPerson.module.css';

class AddPerson extends React.Component{
    render(){
        return(
            <button className={style.biography_btn} onClick={this.props.showForm}> {this.props.action} </button>
        )
    }
}

export default AddPerson;