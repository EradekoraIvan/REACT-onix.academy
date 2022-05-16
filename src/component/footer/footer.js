import React from "react";
import style from './footer.module.css';
import logo from '../../img/svg/logo.svg';
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="container">
                <div className={style.footer_wrapper}>
                    <div className={style.footer_logo}>
                        <img className={style.img} src={logo} alt="logo" />
                        <p>© 2021 “Copper Pro” <br />
                            Все права защищенны</p>
                        <Link to="/">Политика конфиденциальности</Link>
                    </div>
                    <div className={style.footer_group}>
                        <div className={style.footer_nav}>
                            <h3>Навигация</h3>
                            <ul className={style.ul}>
                                <li><Link to="/">Каталог</Link></li>
                                <li><Link to="/">Новости</Link></li>
                                <li><Link to="/">Доставка</Link></li>
                                <li><Link to="/">О нас</Link></li>
                                <li><Link to="/">Контакты</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_catalog}>
                            <h3>Каталог</h3>
                            <ul className={style.ul}>
                                <li><Link to="/">Для эфирных масел</Link></li>
                                <li><Link to="/">Для гидролатов</Link></li>
                                <li><Link to="/">Медная посуда</Link></li>
                                <li><Link to="/">Аксессуары из меди</Link></li>
                                <li><Link to="/">Индивидуальный заказ</Link></li>
                                <li><Link to="/">Скидки и предложения</Link></li>
                            </ul>
                        </div>
                        <div className={style.footer_contacts}>
                            <h3>Контакты</h3>
                            <ul className={style.ul}>
                                <li><Link to="/">Бажана 8-Б, Киев, <br />
                                    02132 Украина</Link></li>
                                <li><Link to="tel:+380988044247">+38 (096) 990 67 56</Link></li>
                                <li><Link to="mailto:eradekora@gmail.com">a.alambik@gmail.com</Link></li>
                                <li>
                                    <div className={style.socials}>
                                        <Link className={`${style.social} ${style.twitter}`} to="/"></Link>
                                        <Link className={`${style.social} ${style.facebook}`} to="/"></Link>
                                        <Link className={`${style.social} ${style.instagram}`} to="/"></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Link to="/" className={style.up}>ВВЕРХ</Link>
            </footer>
        )
    }
}
export default Footer;