import { createMuiTheme } from "@material-ui/core/styles";

const df = createMuiTheme();

const commonTheme = createMuiTheme({
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
