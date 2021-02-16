import { createMuiTheme } from "@material-ui/core/styles";
import { primaryLight } from "./colors/primary";
import { secondaryLight } from "./colors/secondary";
import { greyLight } from "./colors/grey";

import { commonTheme } from "./common_theme";

// type spacingType = "auto" | 1 | 2 | 3 | 4 | 5 | 6;

// Todo 1: Create an enum for spacing.
// Todo 2: Create the color palette ready to do dark mode.
// I'm stuck here. How do we have dark modes for Primary[50] and so on?

const theme = createMuiTheme({
  ...commonTheme,
  /**Spacing */
  spacing: [0, 1, 2, 4, 8, 16, 24, 32, 48, 72, 120],

  palette: {
    type: "light",
    primary: primaryLight,
    secondary: secondaryLight,
    grey: greyLight,
    // // Used by `getContrastText()` to maximize the contrast between
    // // the background and the text.
    // contrastThreshold: 3,
    // // Used by the functions below to shift a color's luminance by approximately
    // // two indexes within its tonal palette.
    // // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  },
});

export default theme;
