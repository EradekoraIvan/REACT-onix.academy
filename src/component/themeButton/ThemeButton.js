import { PropTypes } from 'prop-types';
import style from './ThemeButton.module.css';
import { useTheme, THEME_LIGHT, THEME_DARK } from '../../context/themeProvider';

function ThemeButton() {
  const isTheme = useTheme();
  return (
    <div className={style.themeButtonWrapper}>
      <button className={style.themeButtonLight} onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button className={style.themeButtonDark} onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
    </div>
  );
}
ThemeButton.propTypes = {

};

export default ThemeButton;
