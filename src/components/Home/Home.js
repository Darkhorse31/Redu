import React, { useEffect } from "react";
import MovieList from "../MovieListing/MovieList";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../../Store/movies/moviesSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieData = async () => {
      await axios
        .get(`https://www.omdbapi.com?apiKey=5f9d0863&s=Harry&type=movie`)
        .then((Data) => {
          dispatch(addMovies(Data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    movieData();
  }, []);

  return (
    <div className="home">
      <div className="banner-image"></div>
      <MovieList />
    </div>
  );
};

export default Home;
