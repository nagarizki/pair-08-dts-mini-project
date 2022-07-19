import React from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { logout } from "../authentication/firebase"

import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async() => {
    await logout();
    navigate("/login");
  };

  return (
    <Box className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h8" component="div" className={styles.grow}>
            GARLIC'S MOVIES LIST NAVIGATION (HOME AND ABOUT US)
          </Typography>
          <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
