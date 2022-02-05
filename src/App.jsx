import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { COLOR, theme } from "constants/theme";

import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

const App = () => {
  const muiTheme = createTheme({
    palette: {
      [COLOR.PRIMARY]: {
        main: theme.colors.primary,
      },
      [COLOR.INFO]: {
        main: theme.colors.secondary,
      },
    },
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
