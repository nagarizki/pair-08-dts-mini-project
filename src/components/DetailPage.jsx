import React, { useState, useEffect } from "react";

import { Box} from "@mui/material";

import styles from "./DetailPage.module.css";

// import {auth} from "../authentication/firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

import axios from "axios";

import CardMovieDetail from "../containers/CardMovieDetail";

import {useParams} from "react-router-dom";


const DetailPage = () => {

  let param= useParams();



  const [movie, setMovie] = useState({})
  
  
  useEffect(()=>{
   
    const fetchDataMovies= async()=>{
      try{
      const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c0d4330747b4572aa670778c3c816b00");
      setMovie((response.data.results).find((mov)=> mov.id === 507086));
      console.log(param.id);
      }catch(err){
          console.log("Error", err)
      }
    }; 
    fetchDataMovies();
    console.log(movie.title);
  },[]);
  console.log(movie.title);
  return (
    <>
      <Box className={styles.container}>
      <CardMovieDetail key={movie.id} propsMovie={movie}/>
      </Box>
    </>
  );
};

export default DetailPage;