// import "../src/App.scss";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

// import { MemoryRouter } from "react-router-dom";

// import "../src/App.scss";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   layout: "fullscreen",
// };
