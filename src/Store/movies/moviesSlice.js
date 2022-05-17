import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{movies:[]},
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        }
    }
})
export const {addMovies} = movieSlice.actions
export default movieSlice.reducer;