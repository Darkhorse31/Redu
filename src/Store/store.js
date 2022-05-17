import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "./movies/moviesSlice";
export default configureStore({
  reducer: {
    movie:moviesReducers,
  },
});
