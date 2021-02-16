import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const df = responsiveFontSizes(createMuiTheme());

const spacingOptions = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 12,
  6: 16,
  7: 24,
};

console.log(spacingOptions[6]);

console.log("Factor not in spacing Options");
const getSpacing = (factor: number) => {
  if (!(factor in spacingOptions)) {
    console.log("Factor not in spacing Options");

    throw new Error(`Expected one of ${Object.keys(spacingOptions)}`);
  }
  // @ts-ignore
  return spacingOptions[factor];
};

const commonTheme = createMuiTheme({
  spacing: (factor) => getSpacing(factor),
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: "italic",
    },
  },
  props: {
    MuiButton: {
      disableRipple: false,
      disableElevation: true,
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        paddingTop: df.spacing(1),
        paddingBottom: df.spacing(1),
        paddingLeft: df.spacing(2),
        paddingRight: df.spacing(2),
      },
    },
    MuiInputLabel: {
      // shrink: true as any,
    },
    // MuiInputBase: {
    //   root: {
    //     // color: df.palette.primary.500,
    //   },
    // },
  },
});

export { commonTheme };
