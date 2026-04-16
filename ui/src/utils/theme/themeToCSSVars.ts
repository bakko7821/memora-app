import { theme } from "./theme";

export const themeToCSSVars = (themeObj = theme) => {
  return {
    "--bg": themeObj.background,
    "--header": themeObj.header,
    "--card": themeObj.card,

    "--text": themeObj.text,
    "--text-secondary": themeObj.secondary,

    "--primary": themeObj.primary,

    "--border": themeObj.borders.default,
    "--border-soft": themeObj.borders.soft,
    "--border-focus": themeObj.borders.focus,

    "--hover-card": themeObj.hover.card,
    "--hover-primary": themeObj.hover.primary,
    "--hover-secondary": themeObj.hover.secondary,

    "--active-card": themeObj.active.card,
    "--active-primary": themeObj.active.primary,

    "--disabled-text": themeObj.disabled.text,
    "--disabled-secondary": themeObj.disabled.secondary,

    "--selected-card": themeObj.selected.card,
  } as React.CSSProperties;
};
