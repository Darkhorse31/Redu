import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCart/MovieCard";
const MovieList = () => {
  const MovieList = useSelector((state) => state.movie);
  
  return (
    <div className="movieList">
      {Movie.map((AllMovie, index) => {
        return <MovieCard key={index} data={AllMovie} />;
      })}
    </div>
  );
};

export default MovieList;
