import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../img/svg/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterLike: 0,
      counterShoppingCart: 1,
      styleHeart: 'none',
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((state) => ({
      styleHeart: 'block',
      counter_like: state.counter_like + 1
    }));
  }

  render() {
    const { headerStyle } = this.props;
    const { styleHeart, counterLike, counterShoppingCart } = this.state;
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
          </nav>
          <div className="icons_list">
            <Link onClick={this.increment} className="icon heart" id="heart" to="/"> 
              {' '}
              <p className={styleHeart}>
                {counterLike}
              </p>
              {' '}
 
            </Link>
            <Link className="icon user" to="profile/profile.js"> </Link>
            <Link className="icon shopping_cart" id="shopping-cart" to="/"> 
              {' '}
              {counterShoppingCart}
              {' '}
            </Link>
          </div>

          <Link to="/" className="nav_mobail">
            <img src="../img/img_1screen/mb.png" alt="Меню" className="nav_mobail_img" />
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  headerStyle: PropTypes.string.isRequired,
};

export default Header;
