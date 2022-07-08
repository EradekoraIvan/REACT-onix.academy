import { useState } from 'react';
import { PropTypes } from 'prop-types';
import style from './ThemeButton.module.css';
import { useTheme, THEME_LIGHT, THEME_DARK } from '../../context/themeProvider';

function ThemeButton() {
  const [theme, setTheme] = useState(true);
  const isTheme = useTheme();
  const changeTheme = () => {
    setTheme(!theme);
    isTheme.change(theme ? THEME_DARK : THEME_LIGHT);
  };
  const selectTheme = theme ? 'Light' : 'Dark';
  return (
    <div className={style.themeButtonWrapper}>
      <button className={style.themeButtonLight} onClick={changeTheme}>{selectTheme}</button>
    </div>
  );
}
ThemeButton.propTypes = {

};

export default ThemeButton;
