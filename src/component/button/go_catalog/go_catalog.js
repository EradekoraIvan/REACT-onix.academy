import React from "react";
import style from './go_catalog.module.css';
import {Link} from 'react-router-dom';

class GoCatalog extends React.Component{
    render(){
        return(
            <Link className={style.go_catalog} to="/">Перейти в каталог</Link>
        )
    }
}
export default GoCatalog;