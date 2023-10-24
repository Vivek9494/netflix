import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import './style.css'
const base_url = "https://image.tmdb.org/t/p/original/";
export default function Row({...restProps}) {
    const {title, fetchUrl} = {...restProps};
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const [Error, setError] = useState('');

    useEffect(() => {
        async function fetchData(){
            await axios.get(fetchUrl)
            .then((res) => {
                setMovies(res.data.results);
            }).catch((error) => {
                console.log(error);
            });
        }
        fetchData();
    },[fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playVars: {
            autoplay: 1,
        },
    };


    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error));
        }
    }
  return (
    <div className="row" >
        <div className='row_title'><h2>{title}</h2></div>
        <div className="row_posters">
        {movies.map(movie => (            
            <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className="row_poster"
                src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />            
        ))}
        </div>

        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  )
}
