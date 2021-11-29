import { red } from '@material-ui/core/colors';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

export const primary = "rgba(255,255,255,.9)";
export const primaryLight = "rgba(255,255,255,.8)";
export const primaryDark = "rgba(255,255,255,.5)";
export const primaryActive = "rgba(255,255,255,1)";

export const secondary = "rgba(30,255,7,.6)";
export const secondaryLight = "rgba(30,255,7,.5)";
export const secondaryDark = "rgba(30,255,7,.3)";
export const secondaryActive = "rgba(30,255,7,.8)";

export const muted = "rgba(255, 255, 255, .20)";
export const mutedActive = "rgba(255, 255, 255, .8)";

export const superMuted = "rgba(255, 255, 255, .12)";

export const surfaceLayer2 = "rgba(0,0,0,0.12)";
export const surfaceLayer = "rgba(0,0,0,.40)";

export const Palette: PaletteOptions = {
  type: "dark",
  primary: {
    light: primaryLight,
    dark: primaryDark,
    contrastText: superMuted,
    main: primary,
  },
  secondary: {
    light: secondaryLight,
    dark: secondaryDark,
    contrastText: primary,
    main: secondary,
  },
  text: {
    disabled: mutedActive,
    hint: secondaryLight,
    primary: primary,
    secondary: muted,
  },
  action: {
    hover: primaryActive,
  },
  divider: superMuted,
  error: {
    main: red.A400,
  },
  background: {
    default: surfaceLayer,
    paper: surfaceLayer2,
  },
};

export default Palette;