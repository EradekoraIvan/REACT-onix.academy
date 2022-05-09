import React from "react";
import './header.css';

import logo from '../../img/svg/logo.svg';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter_like: 0,
            counter_shopping_cart: 1,
            style: 'none'
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState(state => ({
            style: 'block',
            counter_like: state.counter_like + 1
        }));
    }

    render() {
        return (
            <>
                <header>
                    <div className="header_wrapper">
                        <a href="" className="logo"><img src={logo} alt="Copper Pro" /></a>
                        <nav>
                            <a href="#">Каталог</a>
                            <a href="#">Новости</a>
                            <a href="#">Доставка</a>
                            <a href="#">О нас</a>
                            <a href="#">Контакты</a>
                        </nav>
                        <div className="icons_list">
                            <a onClick={this.increment} className="icon heart" id="heart" href="#"> <p className={this.state.style}>{this.state.counter_like}</p> </a>
                            <a className="icon user" href="#"></a>
                            <a className="icon shopping-cart" id="shopping-cart" href="#"> {this.state.counter_shopping_cart} </a>
                        </div>

                        <a href="../nav_mobail.html" className="nav_mobail">
                            <img src="../img/img_1screen/mb.png" alt="Меню" className="nav_mobail_img" />
                        </a>
                    </div>
                </header>
            </>
        )
    }
}

export default Header;