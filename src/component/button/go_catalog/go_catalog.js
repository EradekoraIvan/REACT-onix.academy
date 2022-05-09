import React from "react";
import style from './go_catalog.module.css';

class GoCatalog extends React.Component{
    render(){
        return(
            <a class={style.go_catalog} href="#">Перейти в каталог</a>
        )
    }
}
export default GoCatalog;