import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Conozca todo sobre los personajes de StarWars
      </Typography>
    </Box>
  );
}
