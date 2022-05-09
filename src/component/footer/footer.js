import React from "react";
import style from './footer.module.css';
import logo from '../../img/svg/logo.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="container">
                <div className={style.footer_wrapper}>
                    <div className={style.footer_logo}>
                        <img className={style.footer_img} src={logo} alt="logo" />
                        <p>© 2021 “Copper Pro” <br />
                            Все права защищенны</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                    <div className={style.footer_group}>
                        <div className={style.footer_nav}>
                            <h3>Навигация</h3>
                            <ul className={style.ul}>
                                <li><a href="#">Каталог</a></li>
                                <li><a href="#">Новости</a></li>
                                <li><a href="#">Доставка</a></li>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                        <div className={style.footer_catalog}>
                            <h3>Каталог</h3>
                            <ul className={style.ul}>
                                <li><a href="#">Для эфирных масел</a></li>
                                <li><a href="#">Для гидролатов</a></li>
                                <li><a href="#">Медная посуда</a></li>
                                <li><a href="#">Аксессуары из меди</a></li>
                                <li><a href="#">Индивидуальный заказ</a></li>
                                <li><a href="#">Скидки и предложения</a></li>
                            </ul>
                        </div>
                        <div className={style.footer_contacts}>
                            <h3>Контакты</h3>
                            <ul className={style.ul}>
                                <li><a href="#">Бажана 8-Б, Киев, <br />
                                    02132 Украина</a></li>
                                <li><a href="tel:+380988044247">+38 (096) 990 67 56</a></li>
                                <li><a href="mailto:eradekora@gmail.com">a.alambik@gmail.com</a></li>
                                <li>
                                    <div className={style.socials}>
                                        <a className={`${style.social} ${style.twitter}`} href="#"></a>
                                        <a className={`${style.social} ${style.facebook}`} href="#"></a>
                                        <a className={`${style.social} ${style.instagram}`} href="#"></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a href="#" className={style.up}>ВВЕРХ</a>
            </footer>
        )
    }
}
export default Footer;