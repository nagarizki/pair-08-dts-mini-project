import React, { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

import styles from "./HomePage.module.css";

import {auth} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import axios from "axios";
import CardMovie from "./CardMovie";

const HomePage = () => {

  const [movies, setMovies] = useState([])
  const [user] = useAuthState(auth);
  

  useEffect(()=>{
    const fetchDataMovies= async()=>{
        try{
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c0d4330747b4572aa670778c3c816b00");
        setMovies(response.data.results);
        }catch(err){
            console.log("Error", err)
        }
    }; 
    fetchDataMovies();
},[]);

  return (
    <>
      <Box className={styles.container}>
        {/* <Typography variant="body1">Selamat Datang {user?.email} </Typography> */}
        {movies.map((movie)=>{
                return <CardMovie key={movie.id} propsMovie={movie}/>;
             })}
      </Box>
    </>
  );
};

export default HomePage;