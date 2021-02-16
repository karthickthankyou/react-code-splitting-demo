import { styled } from "@material-ui/core/styles";
import {
  compose,
  spacing,
  borders,
  sizing,
  palette,
} from "@material-ui/system";
import Paper from "@material-ui/core/Paper";

export default styled(Paper)(compose(spacing, borders, sizing, palette));
