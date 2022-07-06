import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../img/svg/logo.svg';
import ThemeButton from '../themeButton/ThemeButton';
import {useLike} from '../../context/likeProvider';

function Header({headerStyle}) {
    const [counterShoppingCart, setCounterShoppingCart] = useState(0);
    const itsCounter = useLike();
    const counterLike = localStorage.getItem('likeCaunter');
    useEffect(() =>{
        localStorage.setItem('likeCaunter', JSON.stringify(itsCounter.isLike));
    },[itsCounter.isLike])

    return (
        <header className={headerStyle}>
            <div className="header_wrapper">
                <Link to="/" className="logo"><img src={logo} alt="Copper Pro" /></Link>
                <nav>
                    <Link to="/">Каталог</Link>
                    <Link to="News/NewsList/NewsList.js">Новости</Link>
                    <Link to="/">Доставка</Link>
                    <Link to="/">О нас</Link>
                    <Link to="/">Контакты</Link>
                    <Link to="pages/biography/biography.js">Биографии</Link>
                </nav>
                <div className="ThemeIconsWrapper">
                    <ThemeButton />
                    <div className="icons_list">
                        <Link className="icon heart" id="heart" to="/">
                            {' '}
                            <p>
                                { itsCounter.isLike || JSON.parse(counterLike) || '' }
                            </p>
                            {' '}
                        </Link>
                        <Link className="icon user" to="profile/profile.js"> </Link>
                        <Link className="icon shopping_cart" id="shopping-cart" to="/">
                            {' '}
                            {counterShoppingCart || ''}
                            {' '}
                        </Link>
                    </div>
                </div>
                <Link to="/" className="nav_mobail">
                    <img src="../img/img_1screen/mb.png" alt="Меню" className="nav_mobail_img" />
                </Link>
            </div>
        </header>
    );
}

Header.propTypes = {
    headerStyle: PropTypes.string.isRequired,
};

export default Header;
