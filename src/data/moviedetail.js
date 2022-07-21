import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movies from './movies';


const GetMovie = (movieId)=>{
    const [moviesdata, setMoviesdata] = useState({});
    useEffect(()=>{
        const fetchDataMovies= async()=>{
            try{
            const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c0d4330747b4572aa670778c3c816b00");
            setMoviesdata((response.data.results).find((movie)=> moviesdata.id === movieId));
            return moviesdata;
            }catch(err){
                console.log("Error", err)
            }
        }; 
        fetchDataMovies();
    },[]);
    return moviesdata;
}

export default GetMovie ;

