import React from "react";
import './header.css';
import logo from '../../img/svg/logo.svg';


class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header_wrapper">
                    <a href="../index.html" className="logo"><img src={logo} alt="Copper Pro" /></a>
                    <nav>
                        <a href="#">Каталог</a>
                        <a href="#">Новости</a>
                        <a href="#">Доставка</a>
                        <a href="#">О нас</a>
                        <a href="#">Контакты</a>
                    </nav>
                    <div className="icons_list">
                        <a className="icon heart" id="heart" href="#"></a>
                        <a className="icon user" href="#"></a>
                        <a className="icon shopping-cart" id="shopping-cart" href="#">1</a>
                    </div>

                    <a href="../nav_mobail.html" className="nav_mobail">
                        <img src="../img/img_1screen/mb.png" alt="Меню" className="nav_mobail_img" />
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;