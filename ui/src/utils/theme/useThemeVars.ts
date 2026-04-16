import { themeToCSSVars } from "./themeToCSSVars";
import { theme } from "./theme";

export const useThemeVars = () => {
  return themeToCSSVars(theme);
};
