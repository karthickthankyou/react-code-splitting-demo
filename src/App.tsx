import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import CssBaseline from "@material-ui/core/CssBaseline";

import lightTheme from "./theme/light_theme";
import darkTheme from "./theme/dark_theme";

import Text from "./atoms/Text";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box bgcolor="grey.900" color="grey.100">
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

          <Box color="text.primary">Text Primary</Box>
          <Text>Text Secondary</Text>

          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Text>Text Primary</Text>
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

          <Text fontWeight="100">Font weight Light</Text>
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
