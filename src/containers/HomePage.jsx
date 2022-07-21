import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {Box, Typography } from "@mui/material";

import styles from "./HomePage.module.css";

import axios from "axios";
import CardMovie from "../components/CardMovie";

const HomePage = () => {

  const [movies, setMovies] = useState([])
  

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
    
        <Box>
          <Typography variant="h4" sx={{textAlign: 'center', fontWeight: 'bold', marginTop: '1em'}}>List Movie</Typography>
        </Box>
      <Box className={styles.container}>
        {movies.map((movie)=>{
                return <Link key={movie.id} to={`/movies/${movie.id}`} style={{textDecoration: 'none'}}><CardMovie key={movie.id} propsMovie={movie}/>
                </Link>             
             })}
      </Box>
    </>
  );
};

export default HomePage;