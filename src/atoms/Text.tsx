import { styled } from "@material-ui/core/styles";
import { style } from "@material-ui/system";
import {
  compose,
  spacing,
  sizing,
  typography,
  palette,
  PaletteProps,
} from "@material-ui/system";
import Typography from "@material-ui/core/Typography";

const colors = style({
  prop: "colors",
  cssProperty: "color",
});

export default styled(Typography)(
  compose(spacing, sizing, typography, palette, colors)
);

// const Text = styled(Typography)(spacing);
