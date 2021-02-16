import { styled } from "@material-ui/core/styles";
import {
  compose,
  spacing,
  typography,
  sizing,
  // palette,
} from "@material-ui/system";

import Typography from "@material-ui/core/Typography";

export default styled(Typography)(compose(spacing, typography, sizing));

// const Text = styled(Typography)(spacing);
