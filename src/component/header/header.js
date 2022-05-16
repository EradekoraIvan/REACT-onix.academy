import React from "react";
import './header.css';
import logo from '../../img/svg/logo.svg';
import { Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter_like: 0,
            counter_shopping_cart: 1,
            style_heart: 'none',
        };
        this.increment=this.increment.bind(this);
    }

    increment(){
        this.setState(state => ({
            style_heart: 'block',
            counter_like: state.counter_like + 1
        }));
    }

    render() {
        return (
            <header className={this.props.heder_style}>
                <div className="header_wrapper">
                    <Link to="/" className="logo"><img src={logo} alt="Copper Pro" /></Link>
                    <nav>
                        <Link to="/">Каталог</Link>
                        <Link to="/">Новости</Link>
                        <Link to="/">Доставка</Link>
                        <Link to="#">О нас</Link>
                        <Link to="#">Контакты</Link>
                    </nav>
                    <div className="icons_list">
                        <Link onClick={this.increment} className="icon heart" id="heart" to="/"> <p className={this.state.style_heart}>{this.state.counter_like}</p> </Link>
                        <Link className="icon user" to="profile/profile.js" > </Link>
                        <Link className="icon shopping_cart" id="shopping-cart" to="/"> {this.state.counter_shopping_cart} </Link>
                    </div>

                    <Link to="/" className="nav_mobail">
                        <img src="../img/img_1screen/mb.png" alt="Меню" className="nav_mobail_img" />
                    </Link>
                </div>
            </header>
        )
    }
}

export default Header;