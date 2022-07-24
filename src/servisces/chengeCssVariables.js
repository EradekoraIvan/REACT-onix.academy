export const chengeCssVariables = (theme) => {
  const root = document.querySelector(':root');

  const cssVariables = [
    'whitePart',
    'grayPart',
    'blackText',
    'green',
    'blackArrow-border',
    'blackArrow-fill',
    'dot'];
  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
