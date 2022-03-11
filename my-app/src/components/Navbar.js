import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <img className="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" />
          <Typography variant="h6" color="inherit" noWrap>
            Personajes StarWars
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
