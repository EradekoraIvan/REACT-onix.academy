export const chengeCssVariables = (theme) => {
  const root = document.querySelector(':root');

  const chengeCssVariables = [
    'whitePart',
    'grayPart',
    'blackText',
    'green',
    'blackArrow-border',
    'blackArrow-fill',
    'dot'];
  chengeCssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};
