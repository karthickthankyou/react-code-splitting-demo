import React, { useState } from "react";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import CssBaseline from "@material-ui/core/CssBaseline";

import { makeStyles } from "@material-ui/core/styles";

import lightTheme from "./theme/light_theme";
import darkTheme from "./theme/dark_theme";

import Text from "./atoms/Text";

// https://blog.bitsrc.io/mui-system-will-make-your-life-easier-410f7d639a88

const useStyles = makeStyles((theme) => ({
  "p-1": {
    padding: theme.spacing(8),
  },
}));

function App() {
  const theme = useTheme();
  console.log(theme, "theme");

  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box className={classes["p-1"]}>padding 1</Box>
      <Box bgcolor="grey.800" color="grey.100">
        <Text colors={theme.palette.grey[100]}>Primary 700</Text>
        <Text
          display="inline"
          letterSpacing={1}
          lineHeight={2}
          textAlign="right"
          p={7}
        >
          Sample Text
        </Text>
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode((darkMode) => !darkMode)}
          name="Dark Switch"
          inputProps={{ "aria-label": "Dark Mode" }}
        />
        Hello
        <div>
          <Box bgcolor="primary.900" px={4} py={2}>
            <div>Hi 25</div>
            <div>Hi 2</div>
          </Box>

          {/* <Box display="flex">
        <Text m={10} pt={9.15} textAlign="center" maxWidth={300} mx={10}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
          repellendus dolorem voluptatem doloribus. Voluptatem accusantium
          eveniet suscipit. Assumenda totam, temporibus nulla atque amet
          eligendi neque.
        </Text>
      </Box> */}

          <Box color="primary.100" m={6}>
            Text Primary
          </Box>
          <Box color="primary.300"></Box>

          <Button variant="contained" color="primary">
            Primary
          </Button>

          <Button color="secondary" variant="contained">
            Secondary
          </Button>
          <Button color="primary" variant="outlined">
            Primary
          </Button>

          <Box color="primary.200">Primary 200</Box>
          <Box color="primary.main">primary.main</Box>
          <Box color="secondary.main">secondary.main</Box>
          <Box color="error.main">error.main</Box>
          <Box color="warning.main">warning.main</Box>
          <Box color="info.main">info.main</Box>
          <Box color="success.main">success.main</Box>
          <Box color="text.primary">text.primary</Box>
          <Box color="text.secondary">text.secondary</Box>
          <Box color="text.disabled">text.disabled</Box>

          <Text>Color text</Text>
          <TextField
            label="Name"
            variant="outlined"
            id="tf-name"
            InputLabelProps={{ shrink: true }}
          />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
