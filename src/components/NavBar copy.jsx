import React, {useEffect} from "react";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { logout } from "../authentication/firebase"

import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

import {auth} from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const NavBar = () => {
  const navigate = useNavigate();
  const user = useAuthState(auth);

  const buttonLogoutOnClickHandler = async() => {
    await logout();
    navigate("/login");
  };

  const homeWithLogin =()=>{
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

  const homeWithoutLogin =()=>{
    return (
      <Box className={styles.grow}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h8" component="div" className={styles.grow}>
              GARLIC'S MOVIES LIST 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  useEffect(()=>{
    if(user){
      homeWithLogin();
    }if(!user){
      homeWithoutLogin();
    }
  }, []);

 

  
};

export default NavBar;
