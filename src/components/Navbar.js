import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

function Navbar() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Live Score</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
